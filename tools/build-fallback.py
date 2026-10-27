#!/usr/bin/env python3
"""
P.E.T Docs - veri dogrulama ve fallback-data.js ureteci.

Kullanim:
    python3 tools/build-fallback.py            # dogrular + fallback-data.js'i yeniler
    python3 tools/build-fallback.py --check   # sadece dogrular (CI / commit oncesi)

Kontroller:
  * data/*.json icinde UTF-8 BOM var mi? (BOM bazi araclari bozar)
  * JSON gecerli mi? (sondaki virgul, tek tirnak, yorum gibi hatalar)
  * fallback-data.js JSON'larin aynisini mi iceriyor? (eski veri gosterilmesin)
  * archive.json'daki logo dosyalari gercekten var mi? (uyari)
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
FALLBACK = ROOT / "assets" / "js" / "fallback-data.js"
KEYS = ["docs", "archive", "links", "support", "updates"]


def read_strict(path):
    raw = path.read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"):
        raise ValueError(f"{path.name}: UTF-8 BOM var. Dosyayi 'UTF-8 without BOM' olarak kaydet.")
    text = raw.decode("utf-8")
    try:
        return json.loads(text)
    except json.JSONDecodeError as e:
        line = text.splitlines()[e.lineno - 1].strip() if e.lineno <= len(text.splitlines()) else ""
        hint = ""
        if re.search(r",\s*[}\]]", text):
            hint = " (ipucu: sondaki virgul / trailing comma var)"
        raise ValueError(
            f"{path.name}: gecersiz JSON - satir {e.lineno}, sutun {e.colno}: {e.msg}{hint}\n"
            f"    > {line[:160]}"
        ) from e


def build_fallback_text():
    obj = {}
    for key in KEYS:
        obj[key] = read_strict(DATA / f"{key}.json")
    body = json.dumps(obj, ensure_ascii=False, indent=2)
    header = (
        "/* P.E.T Docs - Cevrimdisi (file://) yedek veri aynasi\n"
        "   OTOMATIK URETILDI - elle duzenlemeyin.\n"
        "   data/*.json degistiginde: python3 tools/build-fallback.py\n"
        "   Kaynak: tools/build-fallback.py\n"
        "*/\n"
    )
    return header + "window.PET_FALLBACK = " + body + ";\n"


def check_assets():
    archive = read_strict(DATA / "archive.json")
    missing = []
    for item in archive.get("items", []):
        logo = item.get("logo")
        if logo and not (ROOT / logo).is_file():
            missing.append(f"{item.get('id')}: {logo}")
    return missing


def main():
    check_only = "--check" in sys.argv
    errors = []

    for key in KEYS:
        path = DATA / f"{key}.json"
        try:
            read_strict(path)
            print(f"OK    {path.relative_to(ROOT)}")
        except (ValueError, UnicodeDecodeError) as e:
            errors.append(str(e))
            print(f"FAIL  {path.relative_to(ROOT)} -> {e}", file=sys.stderr)

    if errors:
        print("\nJSON dogrulama BASARISIZ. Yukaridaki hatalari duzeltin.", file=sys.stderr)
        return 1

    try:
        generated = build_fallback_text()
    except ValueError as e:
        print(str(e), file=sys.stderr)
        return 1

    current = FALLBACK.read_text(encoding="utf-8") if FALLBACK.exists() else ""
    if current == generated:
        print(f"OK    {FALLBACK.relative_to(ROOT)} JSON'larla ayni")
    elif check_only:
        print(
            f"FAIL  {FALLBACK.relative_to(ROOT)} eski. "
            "'python3 tools/build-fallback.py' calistirip commit edin.",
            file=sys.stderr,
        )
        return 1
    else:
        FALLBACK.write_text(generated, encoding="utf-8", newline="\n")
        print(f"YAZ   {FALLBACK.relative_to(ROOT)} guncellendi")

    missing = check_assets()
    for m in missing:
        print(f"UYARI eksik logo dosyasi: {m}")
    if missing:
        print(f"Toplam {len(missing)} eksik logo (site ikon yerine yedek simge gosterir).")

    print("\nTum kontroller gecti." if not missing else "\nJSON'lar gecerli; logo uyarilarina bakin.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
