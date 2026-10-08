#!/bin/sh
# Télécharge la dernière base DB-IP Country Lite (gratuite, CC BY 4.0, mise à jour mensuelle)
set -e
MONTH=$(date +%Y-%m)
cd "$(dirname "$0")/.."
curl -sSfL -o data/dbip-country-lite.mmdb.gz "https://download.db-ip.com/free/dbip-country-lite-$MONTH.mmdb.gz"
gunzip -f data/dbip-country-lite.mmdb.gz
echo "Base GeoIP mise à jour ($MONTH)"
