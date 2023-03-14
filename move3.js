//Execute mongoexport
mongoexport --db Development --collection Data --uri mongodb+srv://[Username]:[Password]@orifarm.pdtiagg.mongodb.net/  --out good.json,

//Execute mongoimport
mongoimport --db Produktion --collection Data --uri mongodb+srv://[Username]:[Password]@orifarm.pdtiagg.mongodb.net/ --file good.json

//sådan her gør man det fra en normal terminal hvis man har downloadet
//nogen database tools til mongodb