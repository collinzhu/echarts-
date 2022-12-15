#!/bin/bash
NOW=$(date +"%s")
echo ${NOW}
URL="https://portal.smxemail.com/api/customer/"
CUSTOMERID='2017656'

number=0
# clean up

# rm allCustomers.txt allDomains.txt
# /usr/bin/curl "${inURL}" -uroy.foubister@smxemail.com:ARsN3@ln4fr7 -A "Roys report tool" > allDomains.json
# cat allDomains.json | jq -r '.data[].partyid' > allDomains.txt
# cat allDomains.txt | sort | uniq  > allCustomers.txt 

# /// not in use /// old call for domains - cat allDomains.json | jq -r '.data[].domainname' > allCustomers.txt

while IFS= read -r line
do
    echo ${number}
    echo ${URL}${CUSTOMERID}"/"${line}${NOW}000
    /usr/bin/curl ${URL}${CUSTOMERID}"/"${line}${NOW}000 -uroy.foubister@smxemail.com: -A "Roys report tool" > ${number}.json
    number=$((number+1))

done < urls.txt
