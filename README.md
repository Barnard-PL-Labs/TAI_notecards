# TAI_notecards

## Demo

https://www.canva.com/design/DAEjb3NYfQA/S-MK9oXb4Yl04BxMY5az6g/watch?utm_content=DAEjb3NYfQA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton


## to run

   npm install
   ./run.sh

## to install

1) create a .env file
2) in that file add the following

   API_KEY = "****"
   GOOGLE_APPLICATION_CREDENTIALS = "****"

where API_KEY is the key for gpt3 and GOOGLE_APPLICATION_CREDENTIALS is [broken for now, don't bother]

3) to run on a server (not just locally), create an ssl cert with a key called key.pem and a certificate called cert.pem
If no ssl credentials are provided, HTTPS will not work and the system will fall back to HTTP on port 80

