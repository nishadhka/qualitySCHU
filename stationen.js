// JavaScript Document
// wird für die Seite stat.htm benötigt
//
// Eigenschaft "disko": 
//					0 = kontinuierliche Messung (Bild: Diagramm)
//					1 = diskontinuierliche Messung (Bild: Reagenzgläser)
//					2 = zur Zeit [noch] keine Messwerte (kein Bild)
// *************************************************************************
var stationen = new Object();



stationen.VACW = new Object();
stationen.VACW.kuerzel = "VACW";
stationen.VACW.type = "Verkehr";
stationen.VACW.name = "Aachen, Wilhelmstra&szlig;e";
stationen.VACW.plz = "52070";
stationen.VACW.longitude = 76.94113422571094;
stationen.VACW.latitude = 11.15037248052486;
stationen.VACW.address = "Aachen<br>Wilhelmstra&szlig;e 22-24";
stationen.VACW.disko = 0;

stationen.AABU = new Object();
stationen.AABU.kuerzel = "AABU";
stationen.AABU.type = "Hintergrund";
stationen.AABU.name = "Aachen- Burtscheid";
stationen.AABU.plz = "52064";
stationen.AABU.longitude = 6.09389;
stationen.AABU.latitude = 50.75469;
stationen.AABU.address = "Aachen<br>Hein-G&ouml;rgen-Stra&szlig;e";
stationen.AABU.disko = 0;

stationen.BIEL = new Object();
stationen.BIEL.kuerzel = "BIEL";
stationen.BIEL.type = "Hintergrund";
stationen.BIEL.name = "Bielefeld-Ost";
stationen.BIEL.plz = "33607";
stationen.BIEL.longitude = 8.5484;
stationen.BIEL.latitude = 52.02313;
stationen.BIEL.address = "Bielefeld<br>Hermann-Delius-Stra&szlig;e/ Bleichstra&szlig;e";
stationen.BIEL.disko = 0;

stationen.VBIS = new Object();
stationen.VBIS.kuerzel = "VBIS";
stationen.VBIS.type = "Verkehr";
stationen.VBIS.name = "Bielefeld, Stapenhorststra&szlig;e";
stationen.VBIS.plz = "33615";
stationen.VBIS.longitude = 8.52173;
stationen.VBIS.latitude = 52.02613;
stationen.VBIS.address = "Bielefeld<br>Stapenhorststra&szlig;e 59";
stationen.VBIS.disko = 0;

/*stationen.VBOH = new Object();
stationen.VBOH.kuerzel = "VBOH";
stationen.VBOH.type = "Verkehr";
stationen.VBOH.name = "Bochum, Herner Stra&szlig;e";
stationen.VBOH.plz = "44807";
stationen.VBOH.longitude = 7.21025;
stationen.VBOH.latitude = 51.51097;
stationen.VBOH.address = "Bochum<br>Herner Stra&szlig;e 383";
stationen.VBOH.disko = 0;*/

stationen.BOST = new Object();
stationen.BOST.kuerzel = "BOST";
stationen.BOST.type = "Industrie";
stationen.BOST.name = "Bochum- Stahlhausen";
stationen.BOST.plz = "44793";
stationen.BOST.longitude = 7.18617;
stationen.BOST.latitude = 51.4825;
stationen.BOST.address = "Bochum<br>An der Maarbr&uuml;cke 75";
stationen.BOST.disko = 1;

stationen.BONN = new Object();
stationen.BONN.kuerzel = "BONN";
stationen.BONN.type = "Hintergrund";
stationen.BONN.name = "Bonn- Auerberg";
stationen.BONN.plz = "53117";
stationen.BONN.longitude = 7.08264;
stationen.BONN.latitude = 50.75363;
stationen.BONN.address = "Bonn<br>An der Josefsh&ouml;he";
stationen.BONN.disko = 0;

stationen.BORG = new Object();
stationen.BORG.kuerzel = "BORG";
stationen.BORG.type = "Hintergrund";
stationen.BORG.name = "Borken- Gemen";
stationen.BORG.plz = "45325";
stationen.BORG.longitude = 6.87450;
stationen.BORG.latitude = 51.862;
stationen.BORG.address = "Borken<br>Pumpenwerk Landwehr";
stationen.BORG.disko = 0;

stationen.VBOT = new Object();
stationen.VBOT.kuerzel = "VBOT";
stationen.VBOT.type = "Verkehr";
stationen.VBOT.name = "Bottrop, Peterstra&szlig;e";
stationen.VBOT.plz = "46236";
stationen.VBOT.longitude = 6.9240800;
stationen.VBOT.latitude = 51.5192300;
stationen.VBOT.address = "Bottrop<br>Peterstra&szlig;e 11";
stationen.VBOT.disko = 0;

stationen.BOTT = new Object();
stationen.BOTT.kuerzel = "BOTT";
stationen.BOTT.type = "Industrie";
stationen.BOTT.name = "Bottrop-Welheim";
stationen.BOTT.plz = "46238";
stationen.BOTT.longitude = 6.9769;
stationen.BOTT.latitude = 51.5259;
stationen.BOTT.address = "Bottrop<br>Welheimer Stra&szlig;e";
stationen.BOTT.disko = 0;

/*stationen.DABA = new Object();
stationen.DABA.kuerzel = "DABA";
stationen.DABA.type = "Industrie";
stationen.DABA.name = "Datteln, Am Bahnhof";
stationen.DABA.plz = "45711";
stationen.DABA.longitude = 7.32139;
stationen.DABA.latitude = 51.6238;
stationen.DABA.address = "Datteln<br>Am Bahnhof 6";
stationen.DABA.disko = 1;
*/

stationen.DATT = new Object();
stationen.DATT.kuerzel = "DATT";
stationen.DATT.type = "Hintergrund";
stationen.DATT.name = "Datteln- Hagem";
stationen.DATT.plz = "45711";
stationen.DATT.longitude = 7.33136;
stationen.DATT.latitude = 51.64138;
stationen.DATT.address = "Datteln<br>Mozartstra&szlig;e";
stationen.DATT.disko = 0;

/*
stationen.VDIN = new Object();
stationen.VDIN.kuerzel = "VDIN";
stationen.VDIN.type = "Verkehr";
stationen.VDIN.name = "Dinslaken, Wilhelm-Lantermann-Stra&szlig;e";
stationen.VDIN.plz = "46535";
stationen.VDIN.longitude = 6.74062;
stationen.VDIN.latitude = 51.56475;
stationen.VDIN.address = "Dinslaken<br>Wilhelm-Lantermann-Stra&szlig;e 30";
stationen.VDIN.disko = 0;
*/

stationen.DOB12 = new Object();
stationen.DOB12.kuerzel = "DOB12";
stationen.DOB12.type = "Verkehr";
stationen.DOB12.name = "Dortmund B1 Rheinlanddamm";
stationen.DOB12.plz = "44139";
stationen.DOB12.longitude = 394561;
stationen.DOB12.latitude = 5706589;
stationen.DOB12.address = "Dortmund<br>Rheinlanddamm 5/74";
stationen.DOB12.disko = 1;

stationen.VDOM = new Object();
stationen.VDOM.kuerzel = "VDOM";
stationen.VDOM.type = "Verkehr";
stationen.VDOM.name = "Dortmund, Brackeler Stra&szlig;e";
stationen.VDOM.plz = "44145";
stationen.VDOM.longitude = 7.4836;
stationen.VDOM.latitude = 51.5235;
stationen.VDOM.address = "Dortmund<br>Brackeler Stra&szlig;e";
stationen.VDOM.disko = 0;

stationen.VDOR = new Object();
stationen.VDOR.kuerzel = "VDOR";
stationen.VDOR.type = "Verkehr";
stationen.VDOR.name = "Dortmund, Steinstra&szlig;e";
stationen.VDOR.plz = "44147";
stationen.VDOR.longitude = 7.4643;
stationen.VDOR.latitude = 51.51958;
stationen.VDOR.address = "Dortmund<br>Steinstra&szlig;e";
stationen.VDOR.disko = 0;

stationen.DMD2 = new Object();
stationen.DMD2.kuerzel = "DMD2";
stationen.DMD2.type = "Hintergrund";
stationen.DMD2.name = "Dortmund- Eving";
stationen.DMD2.plz = "44145";
stationen.DMD2.longitude = 7.45745;
stationen.DMD2.latitude = 51.53685;
stationen.DMD2.address = "Dortmund<br>Burgweg";
stationen.DMD2.disko = 0;

stationen.VDUI = new Object();
stationen.VDUI.kuerzel = "VDUI";
stationen.VDUI.type = "Verkehr";
stationen.VDUI.name = "Duisburg, Kardinal-Galen-Stra&szlig;e";
stationen.VDUI.plz = "47051";
stationen.VDUI.longitude = 6.7719;
stationen.VDUI.latitude = 51.43766;
stationen.VDUI.address = "Duisburg<br>Kardinal-Galen-Stra&szlig;e";
stationen.VDUI.disko = 0;

stationen.DUBR = new Object();
stationen.DUBR.kuerzel = "DUBR";
stationen.DUBR.type = "Industrie";
stationen.DUBR.name = "Duisburg- Bruckhausen";
stationen.DUBR.plz = "47169";
stationen.DUBR.longitude = 6.73576;
stationen.DUBR.latitude = 51.48575;
stationen.DUBR.address = "Duisburg<br>Kaiser-Wilhelm-Stra&szlig;e";
stationen.DUBR.disko = 0;

stationen.BUCH = new Object();
stationen.BUCH.kuerzel = "BUCH";
stationen.BUCH.type = "Hintergrund";
stationen.BUCH.name = "Duisburg- Buchholz";
stationen.BUCH.plz = "47249";
stationen.BUCH.longitude = 6.763;
stationen.BUCH.latitude = 51.3852;
stationen.BUCH.address = "Duisburg<br>B&ouml;hmer Stra&szlig;e";
stationen.BUCH.disko = 0;

/*stationen.VDNS = new Object();
stationen.VDNS.kuerzel = "VDNS";
stationen.VDNS.type = "Verkehr";
stationen.VDNS.name = "D&uuml;ren, Schoeller Stra&szlig;e";
stationen.VDNS.plz = "52351";
stationen.VDNS.longitude = 6.4926823;
stationen.VDNS.latitude = 50.8065;
stationen.VDNS.address = "D&uuml;ren<br>Schoeller Straße 21";
stationen.VDNS.disko = 0;*/

/*stationen.DUH3 = new Object();
stationen.DUH3.kuerzel = "DUH3";
stationen.DUH3.type = "Industrie";
stationen.DUH3.name = "Duisburg- H&uuml;ttenheim";
stationen.DUH3.plz = "47259";
stationen.DUH3.longitude = 6.728048;
stationen.DUH3.latitude = 51.36767;
stationen.DUH3.address = "Duisburg<br>Klettenweg 5";
stationen.DUH3.disko = 1;*/

stationen.DUM2 = new Object();
stationen.DUM2.kuerzel = "DUM2";
stationen.DUM2.type = "Industrie";
stationen.DUM2.name = "Duisburg- Marxloh 2";
stationen.DUM2.plz = "47169";
stationen.DUM2.longitude = 6.74678;
stationen.DUM2.latitude = 51.50618;
stationen.DUM2.address = "Duisburg<br>Kiebitzm&uuml;hlenstra&szlig;e 21";
stationen.DUM2.disko = 1;

stationen.DUUM = new Object();
stationen.DUUM.kuerzel = "DUUM";
stationen.DUUM.type = "Industrie";
stationen.DUUM.name = "Duisburg- Untermeiderich";
stationen.DUUM.plz = "47137";
stationen.DUUM.longitude = 6.7527;
stationen.DUUM.latitude = 51.46815;
stationen.DUUM.address = "Duisburg<br>Bergstra&szlig;e 48";
stationen.DUUM.disko = 1;

stationen.WALS = new Object();
stationen.WALS.kuerzel = "WALS";
stationen.WALS.type = "Industrie";
stationen.WALS.name = "Duisburg- Walsum";
stationen.WALS.plz = "47179";
stationen.WALS.longitude = 6.74836;
stationen.WALS.latitude = 51.524;
stationen.WALS.address = "Duisburg<br>Sonnenstra&szlig;e";
stationen.WALS.disko = 0;

stationen.DLOH = new Object();
stationen.DLOH.kuerzel = "DLOH";
stationen.DLOH.type = "Verkehr";
stationen.DLOH.name = "D&uuml;sseldorf-Lohausen";
stationen.DLOH.plz = "40468";
stationen.DLOH.longitude = 6.754231;
stationen.DLOH.latitude = 51.268804;
stationen.DLOH.address = "D&uuml;sseldorf<br>Wacholderweg (Spielplatz)";
stationen.DLOH.disko = 0;

stationen.DDCS = new Object();
stationen.DDCS.kuerzel = "DDCS";
stationen.DDCS.type = "Verkehr";
stationen.DDCS.name = "D&uuml;sseldorf, Corneliusstra&szlig;e";
stationen.DDCS.plz = "40215";
stationen.DDCS.longitude = 6.78254;
stationen.DDCS.latitude = 51.2131;
stationen.DDCS.address = "D&uuml;sseldorf<br>Corneliusstra&szlig;e 71";
stationen.DDCS.disko = 0;

stationen.LOER = new Object();
stationen.LOER.kuerzel = "LOER";
stationen.LOER.type = "Hintergrund";
stationen.LOER.name = "D&uuml;sseldorf- L&ouml;rick";
stationen.LOER.plz = "40547";
stationen.LOER.longitude = 6.7324;
stationen.LOER.latitude = 51.2492;
stationen.LOER.address = "D&uuml;sseldorf<br>Bushaltestelle Erholungsst&auml;tte L&ouml;rick";
stationen.LOER.disko = 0;

stationen.REIS = new Object();
stationen.REIS.kuerzel = "REIS";
stationen.REIS.type = "Hintergrund";
stationen.REIS.name = "D&uuml;sseldorf- Reisholz";
stationen.REIS.plz = "40599";
stationen.REIS.longitude = 6.85928;
stationen.REIS.latitude = 51.1888;
stationen.REIS.address = "D&uuml;sseldorf<br>Further Stra&szlig;e";
stationen.REIS.disko = 0;

stationen.ELSB = new Object();
stationen.ELSB.kuerzel = "ELSB";
stationen.ELSB.type = "Industrie";
stationen.ELSB.name = "Elsdorf-Berrendorf";
stationen.ELSB.plz = "50189";
stationen.ELSB.longitude =6.58297;
stationen.ELSB.latitude = 50.92724;
stationen.ELSB.address = "Elsdorf<br>Zum Sportplatz/Holunderweg (Parkplatz Kindergarten)";
stationen.ELSB.disko = 0;

/*
stationen.VEME = new Object();
stationen.VEME.kuerzel = "VEME";
stationen.VEME.type = "Hintergrund";
stationen.VEME.name = "Emmerich-Elten";
stationen.VEME.plz = "46446";
stationen.VEME.longitude =6.16056;
stationen.VEME.latitude = 51.8725;
stationen.VEME.address = "Emmerich<br>Schmidtstraße 8";
stationen.VEME.disko = 0;
*/
/*
stationen.VEFD = new Object();
stationen.VEFD.kuerzel = "VEFD";
stationen.VEFD.type = "Verkehr";
stationen.VEFD.name = "Essen-Frillendorf";
stationen.VEFD.plz = "45139";
stationen.VEFD.longitude = 7.0465;
stationen.VEFD.latitude = 51.457;
stationen.VEFD.address = "Essen<br>Hombrucher Straße 11";
stationen.VEFD.disko = 0;
*/

stationen.VEAE = new Object();
stationen.VEAE.kuerzel = "VEAE";
stationen.VEAE.type = "Verkehr";
stationen.VEAE.name = "Essen, Gladbecker Stra&szlig;e";
stationen.VEAE.plz = "45326";
stationen.VEAE.longitude = 7.00528;
stationen.VEAE.latitude = 51.47785;
stationen.VEAE.address = "Essen<br>Gladbecker Stra&szlig;e";
stationen.VEAE.disko = 0;

stationen.VESN = new Object();
stationen.VESN.kuerzel = "VESN";
stationen.VESN.type = "Verkehr";
stationen.VESN.name = "Essen-Ost, Steeler Stra&szlig;e";
stationen.VESN.plz = "45138";
stationen.VESN.longitude = 7.03057;
stationen.VESN.latitude = 51.45115;
stationen.VESN.address = "Essen<br>Steeler Stra&szlig;e/ Markgrafenstra&szlig;e";
stationen.VESN.disko = 0;

stationen.ELAN = new Object();
stationen.ELAN.kuerzel = "ELAN";
stationen.ELAN.type = "Hintergrund";
stationen.ELAN.name = "Essen- Schuir, LANUV";
stationen.ELAN.plz = "45133";
stationen.ELAN.longitude = 6.96565;
stationen.ELAN.latitude = 51.40694;
stationen.ELAN.address = "Essen<br>Wallneyer Stra&szlig;e 6";
stationen.ELAN.disko = 0;

stationen.EVOG = new Object();
stationen.EVOG.kuerzel = "EVOG";
stationen.EVOG.type = "Hintergrund";
stationen.EVOG.name = "Essen- Vogelheim";
stationen.EVOG.plz = "45356";
stationen.EVOG.longitude = 6.981;
stationen.EVOG.latitude = 51.4965;
stationen.EVOG.address = "Essen<br>Hafenstra&szlig;e/ Wildstra&szlig;e";
stationen.EVOG.disko = 0;

stationen.VGES = new Object();
stationen.VGES.kuerzel = "VGES";
stationen.VGES.type = "Verkehr";
stationen.VGES.name = "Gelsenkirchen, Kurt-Schumacher-Stra&szlig;e";
stationen.VGES.plz = "45881";
stationen.VGES.longitude = 7.08444;
stationen.VGES.latitude = 51.52775;
stationen.VGES.address = "Gelsenkirchen<br>Kurt-Schumacher-Stra&szlig;e 109";
stationen.VGES.disko = 0;

stationen.GELS = new Object();
stationen.GELS.kuerzel = "GELS";
stationen.GELS.type = "Industrie";
stationen.GELS.name = "Gelsenkirchen- Bismarck";
stationen.GELS.plz = "45889";
stationen.GELS.longitude = 7.10175;
stationen.GELS.latitude = 51.5336;
stationen.GELS.address = "Gelsenkirchen<br>Trinenkamp";
stationen.GELS.disko = 0;

stationen.GRGG = new Object();
stationen.GRGG.kuerzel = "GRGG";
stationen.GRGG.type = "Industrie";
stationen.GRGG.name = "Grevenbroich- Gustorf/ Gindorf";
stationen.GRGG.plz = "41517";
stationen.GRGG.longitude = 6.55944605044792;
stationen.GRGG.latitude = 51.063759241829665;
stationen.GRGG.address = "Grevenbroich<br>St.-Leonhard-Stra&szlig;e (Wendehammer)";
stationen.GRGG.disko = 1;

stationen.VHAM = new Object();
stationen.VHAM.kuerzel = "VHAM";
stationen.VHAM.type = "Verkehr";
stationen.VHAM.name = "Hagen, Graf-von-Galen-Ring";
stationen.VHAM.plz = "58095";
stationen.VHAM.longitude = 7.463492703415426;
stationen.VHAM.latitude = 51.36282770489183;
stationen.VHAM.address = "Hagen<br>Graf-von-Galen-Ring (vor Haus Nr. 9)";
stationen.VHAM.disko = 0;

stationen.HATT = new Object();
stationen.HATT.kuerzel = "HATT";
stationen.HATT.type = "Hintergrund";
stationen.HATT.name = "Hattingen- Blankenstein";
stationen.HATT.plz = "45527";
stationen.HATT.longitude = 7.208535867317781;
stationen.HATT.latitude = 51.40300308228954;
stationen.HATT.address = "Hattingen<br>An der Becke";
stationen.HATT.disko = 0;

stationen.VHER = new Object();
stationen.VHER.kuerzel = "VHER";
stationen.VHER.type = "Verkehr";
stationen.VHER.name = "Herne, Recklinghauser Stra&szlig;e";
stationen.VHER.plz = "44653";
stationen.VHER.longitude = 7.15033;
stationen.VHER.latitude = 51.54307;
stationen.VHER.address = "Herne<br>Recklinghauser Stra&szlig;e 6/8";
stationen.VHER.disko = 0;

stationen.HUE2 = new Object();
stationen.HUE2.kuerzel = "HUE2";
stationen.HUE2.type = "Industrie";
stationen.HUE2.name = "H&uuml;rth";
stationen.HUE2.plz = "50354";
stationen.HUE2.longitude = 6.873749112526172;
stationen.HUE2.latitude = 50.876115178311906;
stationen.HUE2.address = "H&uuml;rth<br>Dunant-Stra&szlig;e, Sportplatzeingang";
stationen.HUE2.disko = 0;

/*stationen.INLA = new Object();
stationen.INLA.kuerzel = "INLA";
stationen.INLA.type = "Industrie";
stationen.INLA.name = "Inden-Lamersdorf";
stationen.INLA.plz = "52459";
stationen.INLA.longitude = 6.35229;
stationen.INLA.latitude = 50.8512;
stationen.INLA.address = "Inden-Lamersdorf<br>Corneliusstr. 39";
stationen.INLA.disko = 0;*/

/*
stationen.VISE = new Object();
stationen.VISE.kuerzel = "VISE";
stationen.VISE.type = "Verkehr";
stationen.VISE.name = "Iserlohn, Hohler Weg";
stationen.VISE.plz = "58636";
stationen.VISE.longitude = 7.70194;
stationen.VISE.latitude = 51.37306;
stationen.VISE.address = "Iserlohn<br>Hohler Weg 27";
stationen.VISE.disko = 0;
*/

stationen.JACK = new Object();
stationen.JACK.kuerzel = "JACK";
stationen.JACK.type = "Verkehr";
stationen.JACK.name = "Jackerath";
stationen.JACK.plz = "52445";
stationen.JACK.longitude = 6.450579;
stationen.JACK.latitude = 51.032065;
stationen.JACK.address = "Jackerath<br>Jülicher Straße 30/32";
stationen.JACK.disko = 0;


stationen.VKCL = new Object();
stationen.VKCL.kuerzel = "VKCL";
stationen.VKCL.type = "Verkehr";
stationen.VKCL.name = "K&ouml;ln, Clevischer Ring";
stationen.VKCL.plz = "51065";
stationen.VKCL.longitude = 7.003130683472389;
stationen.VKCL.latitude = 50.9628648083225;
stationen.VKCL.address = "K&ouml;ln<br>Clevischer Ring 3-5";
stationen.VKCL.disko = 0;

stationen.VKTU = new Object();
stationen.VKTU.kuerzel = "VKTU";
stationen.VKTU.type = "Verkehr";
stationen.VKTU.name = "K&ouml;ln, Turiner Stra&szlig;e";
stationen.VKTU.plz = "50674";
stationen.VKTU.longitude = 6.957659838611318;
stationen.VKTU.latitude = 50.947362495204295;
stationen.VKTU.address = "K&ouml;ln<br>Turiner Stra&szlig;e 19";
stationen.VKTU.disko = 0;

stationen.CHOR = new Object();
stationen.CHOR.kuerzel = "CHOR";
stationen.CHOR.type = "Hintergrund";
stationen.CHOR.name = "K&ouml;ln- Chorweiler";
stationen.CHOR.plz = "50765";
stationen.CHOR.longitude = 6.884605008886377;
stationen.CHOR.latitude = 51.019339889646474;
stationen.CHOR.address = "K&ouml;ln<br>F&uuml;hlinger Weg";
stationen.CHOR.disko = 0;

stationen.RODE = new Object();
stationen.RODE.kuerzel = "RODE";
stationen.RODE.type = "Hintergrund";
stationen.RODE.name = "K&ouml;ln- Rodenkirchen";
stationen.RODE.plz = "50996";
stationen.RODE.longitude = 6.985131013271416;
stationen.RODE.latitude = 50.88980895967599;
stationen.RODE.address = "K&ouml;ln<br>Friedrich-Ebert-Stra&szlig;e";
stationen.RODE.disko = 0;

stationen.KRHA = new Object();
stationen.KRHA.kuerzel = "KRHA";
stationen.KRHA.type = "Industrie";
stationen.KRHA.name = "Krefeld-Hafen";
stationen.KRHA.plz = "47809";
stationen.KRHA.longitude = 6.670141624393791;
stationen.KRHA.latitude = 51.342574596154506;
stationen.KRHA.address = "Krefeld<br>Hentrichstra&szlig;e (Dreiringwerke)";
stationen.KRHA.disko = 0;

stationen.KREF = new Object();
stationen.KREF.kuerzel = "KREF";
stationen.KREF.type = "Hintergrund";
stationen.KREF.name = "Krefeld- Linn";
stationen.KREF.plz = "47809";
stationen.KREF.longitude = 6.640207370703614;
stationen.KREF.latitude = 51.337663511659436;
stationen.KREF.address = "Krefeld<br>Hammerstra&szlig;e";
stationen.KREF.disko = 0;

/*stationen.KRIN = new Object();
stationen.KRIN.kuerzel = "KRIN";
stationen.KRIN.type = "Industrie";
stationen.KRIN.name = "Krefeld-Inrath";
stationen.KRIN.plz = "47803";
stationen.KRIN.longitude = 6.5292;
stationen.KRIN.latitude = 51.3561;
stationen.KRIN.address = "Krefeld-Inrath<br>Am Schluff";
stationen.KRIN.disko = 0;*/

stationen.KRES = new Object();
stationen.KRES.kuerzel = "KRES";
stationen.KRES.type = "Industrie";
stationen.KRES.name = "Krefeld- Stahldorf";
stationen.KRES.plz = "47807";
stationen.KRES.longitude = 6.557372844198542;
stationen.KRES.latitude = 51.3076068688756;
stationen.KRES.address = "Krefeld<br>Vulkanstra&szlig;e 250";
stationen.KRES.disko = 1;

stationen.LEV2 = new Object();
stationen.LEV2.kuerzel = "LEV2";
stationen.LEV2.type = "Hintergrund";
stationen.LEV2.name = "Leverkusen- Manfort";
stationen.LEV2.plz = "51373";
stationen.LEV2.longitude = 7.005025536259368;
stationen.LEV2.latitude = 51.02887443626711;
stationen.LEV2.address = "Leverkusen<br>Manforter Stra&szlig;e";
stationen.LEV2.disko = 0;

stationen.NIED = new Object();
stationen.NIED.kuerzel = "NIED";
stationen.NIED.type = "Hintergrund";
stationen.NIED.name = "L&uuml;nen- Niederaden";
stationen.NIED.plz = "44532";
stationen.NIED.longitude = 7.5697935813107575;
stationen.NIED.latitude = 51.59220630659797;
stationen.NIED.address = "L&uuml;nen<br>Kreisstra&szlig;e";
stationen.NIED.disko = 0;

stationen.LUEV = new Object();
stationen.LUEV.kuerzel = "LUEV";
stationen.LUEV.type = "Industrie";
stationen.LUEV.name = "L&uuml;nen, Viktoriastra&szlig;e";
stationen.LUEV.plz = "44532";
stationen.LUEV.longitude = 7.522915150669842;
stationen.LUEV.latitude = 51.608416591030824;
stationen.LUEV.address = "L&uuml;nen<br>Viktoriastra&szlig;e 5";
stationen.LUEV.disko = 1;

stationen.LUMW = new Object();
stationen.LUMW.kuerzel = "LUMW";
stationen.LUMW.type = "Industrie";
stationen.LUMW.name = "Lünen Mühlenweg";
stationen.LUMW.plz = "44536";
stationen.LUMW.longitude = 7.522915150669842;
stationen.LUMW.latitude = 51.608416591030824;
stationen.LUMW.address = "Lünen<br>Mühlenweg 20";
stationen.LUMW.disko = 1;

stationen.SICK = new Object();
stationen.SICK.kuerzel = "SICK";
stationen.SICK.type = "Hintergrund";
stationen.SICK.name = "Marl- Sickingm&uuml;hle";
stationen.SICK.plz = "45772";
stationen.SICK.longitude = 7.122674458403504;
stationen.SICK.latitude = 51.69895804033006;
stationen.SICK.address = "Marl<br>Alte Stra&szlig;e";
stationen.SICK.disko = 0;

/*stationen.VMEB = new Object();
stationen.VMEB.kuerzel = "VMEB";
stationen.VMEB.type = "Verkehr";
stationen.VMEB.name = "Mettmann, Breite Straße";
stationen.VMEB.plz = "40822";
stationen.VMEB.longitude = 6.9785133;
stationen.VMEB.latitude = 51.2501015;
stationen.VMEB.address = "Mettmann<br>Breite Straße 12";
stationen.VMEB.disko = 0;*/

stationen.VMGR = new Object();
stationen.VMGR.kuerzel = "VMGR";
stationen.VMGR.type = "Verkehr";
stationen.VMGR.name = "M&ouml;nchengladbach, D&uuml;sseldorfer Stra&szlig;e";
stationen.VMGR.plz = "41238";
stationen.VMGR.longitude = 6.458800226605263;
stationen.VMGR.latitude = 51.16996015463865;
stationen.VMGR.address = "M&ouml;nchengladbach<br>D&uuml;sseldorfer Stra&szlig;e";
stationen.VMGR.disko = 0;

stationen.VMGF = new Object();
stationen.VMGF.kuerzel = "VMGF";
stationen.VMGF.type = "Verkehr";
stationen.VMGF.name = "M&ouml;nchengladbach,<br>Friedrich-Ebert-Straße";
stationen.VMGF.plz = "41236";
stationen.VMGF.longitude = 6.4400031;
stationen.VMGF.latitude = 51.1694897;
stationen.VMGF.address = "M&ouml;nchengladbach<br>Friedrich-Ebert-Straße 111/115";
stationen.VMGF.disko = 0;

stationen.MGRH = new Object();
stationen.MGRH.kuerzel = "MGRH";
stationen.MGRH.type = "Hintergrund";
stationen.MGRH.name = "M&ouml;nchengladbach- Rheydt";
stationen.MGRH.plz = "41239";
stationen.MGRH.longitude = 6.4256735833598935;
stationen.MGRH.latitude = 51.154606785087964;
stationen.MGRH.address = "M&ouml;nchengladbach<br>Urftstra&szlig;e/ Hubertusstra&szlig;e";
stationen.MGRH.disko = 0;

/*
stationen.VMHA = new Object();
stationen.VMHA.kuerzel = "VMHA";
stationen.VMHA.type = "Verkehr";
stationen.VMHA.name = "M&uuml;lheim, Aktienstr.";
stationen.VMHA.plz = "45473";
stationen.VMHA.longitude = 6.8968;
stationen.VMHA.latitude = 51.4415;
stationen.VMHA.address = "M&uuml;lheim<br>, Aktienstraße 154";
stationen.VMHA.disko = 0;
*/

stationen.STYR = new Object();
stationen.STYR.kuerzel = "STYR";
stationen.STYR.type = "Hintergrund";
stationen.STYR.name = "M&uuml;lheim- Styrum";
stationen.STYR.plz = "45476";
stationen.STYR.longitude = 6.8650610424089304;
stationen.STYR.latitude = 51.45345639005812;
stationen.STYR.address = "M&uuml;lheim<br>Neustadtstra&szlig;e";
stationen.STYR.disko = 0;


stationen.VMS2 = new Object();
stationen.VMS2.kuerzel = "VMS2";
stationen.VMS2.type = "Verkehr";
stationen.VMS2.name = "M&uuml;nster, Weseler Stra&szlig;e";
stationen.VMS2.plz = "48151";
stationen.VMS2.longitude = 7.61938;
stationen.VMS2.latitude = 51.9532;
stationen.VMS2.address = "M&uuml;nster<br>Weseler Stra&szlig;e 38/40";
stationen.VMS2.disko = 0;



stationen.MSGE = new Object();
stationen.MSGE.kuerzel = "MSGE";
stationen.MSGE.type = "Hintergrund";
stationen.MSGE.name = "M&uuml;nster- Geist";
stationen.MSGE.plz = "48151";
stationen.MSGE.longitude = 7.611537804696124;
stationen.MSGE.latitude = 51.93654919863546;
stationen.MSGE.address = "M&uuml;nster<br>Gut Insel (Gel&auml;nde Ludwig-Erhard-Schule)";
stationen.MSGE.disko = 0;

stationen.ROTH = new Object();
stationen.ROTH.kuerzel = "ROTH";
stationen.ROTH.type = "Hintergrund";
stationen.ROTH.name = "Netphen Rothaargebirge";
stationen.ROTH.plz = "57250";
stationen.ROTH.longitude = 8.191898990164025;
stationen.ROTH.latitude = 50.9303289967415;
stationen.ROTH.address = "Netphen<br>Nauholzer Weg, F&ouml;rsterei Hohenroth";
stationen.ROTH.disko = 0;

stationen.NETT = new Object();
stationen.NETT.kuerzel = "NETT";
stationen.NETT.type = "Hintergrund";
stationen.NETT.name = "Nettetal- Kaldenkirchen";
stationen.NETT.plz = "41334";
stationen.NETT.longitude = 6.195827563633262;
stationen.NETT.latitude = 51.326935411588145;
stationen.NETT.address = "Nettetal<br>Juiserfeldstra&szlig;e";
stationen.NETT.disko = 0;

stationen.NIZI = new Object();
stationen.NIZI.kuerzel = "NIZI";
stationen.NIZI.type = "Hintergrund";
stationen.NIZI.name = "Niederzier";
stationen.NIZI.plz = "52382";
stationen.NIZI.longitude = 6.46932340504981;
stationen.NIZI.latitude = 50.883467117483164;
stationen.NIZI.address = "Niederzier<br>Treibbach (am Feuerwehr-Ger&auml;tehaus)";
stationen.NIZI.disko = 0;

stationen.VOBM = new Object();
stationen.VOBM.kuerzel = "VOBM";
stationen.VOBM.type = "Verkehr";
stationen.VOBM.name = "Oberhausen, M&uuml;lheimer Str.";
stationen.VOBM.plz = "46045 ";
stationen.VOBM.longitude = 6.8641666;
stationen.VOBM.latitude = 51.47611104;
stationen.VOBM.address = "Oberhausen<br>M&uuml;lheimer Stra&szlig;e";
stationen.VOBM.disko = 0;

stationen.RAT2 = new Object();
stationen.RAT2.kuerzel = "RAT2";
stationen.RAT2.type = "Hintergrund";
stationen.RAT2.name = "Ratingen- Tiefenbroich";
stationen.RAT2.plz = "40880";
stationen.RAT2.longitude = 6.819929775301022;
stationen.RAT2.latitude = 51.30391445035118;
stationen.RAT2.address = "Ratingen<br>Daniel-Goldbach-Stra&szlig;e";
stationen.RAT2.disko = 0;

/*
stationen.VREB = new Object();
stationen.VREB.kuerzel = "VREB";
stationen.VREB.type = "Verkehr";
stationen.VREB.name = "Recklinghausen, Bochumer Stra&szlig;e";
stationen.VREB.plz = "45663";
stationen.VREB.longitude = 7.2133741394115995;
stationen.VREB.latitude = 51.577440528290666;
stationen.VREB.address = "Recklinghausen<br>Bochumer Stra&szlig;e 63";
stationen.VREB.disko = 0;
*/

stationen.VSCH = new Object();
stationen.VSCH.kuerzel = "VSCH";
stationen.VSCH.type = "Verkehr";
stationen.VSCH.name = "Schwerte, H&ouml;rder Stra&szlig;e";
stationen.VSCH.plz = "58239";
stationen.VSCH.longitude = 7.56346;
stationen.VSCH.latitude = 51.44657;
stationen.VSCH.address = "Schwerte<br> H&ouml;rder Stra&szlig;e 11";
stationen.VSCH.disko = 0;

stationen.SHW2 = new Object();
stationen.SHW2.kuerzel = "SHW2";
stationen.SHW2.type = "Hintergrund";
stationen.SHW2.name = "Schwerte";
stationen.SHW2.plz = "58239";
stationen.SHW2.longitude = 7.582250023361347;
stationen.SHW2.latitude = 51.448761971319016;
stationen.SHW2.address = "Schwerte<br>Konrad-Zuse-Stra&szlig;e";
stationen.SHW2.disko = 0;

stationen.SIGH = new Object();
stationen.SIGH.kuerzel = "SIGH";
stationen.SIGH.type = "Industrie";
stationen.SIGH.name = "Siegen, Haardter Berg";
stationen.SIGH.plz = "37076";
stationen.SIGH.longitude = 8.025025100701356;
stationen.SIGH.latitude = 50.91220898452651;
stationen.SIGH.address = "Siegen<br>H&ouml;lderlinstra&szlig;e 35";
stationen.SIGH.disko = 1;

stationen.EIFE = new Object();
stationen.EIFE.kuerzel = "EIFE";
stationen.EIFE.type = "Hintergrund";
stationen.EIFE.name = "Simmerath Eifel";
stationen.EIFE.plz = "52152";
stationen.EIFE.longitude = 6.2810358162072175;
stationen.EIFE.latitude = 50.65322665095196;
stationen.EIFE.address = "Simmerath-Lammersdorf";
stationen.EIFE.disko = 0;

stationen.SOES = new Object();
stationen.SOES.kuerzel = "SOES";
stationen.SOES.type = "Hintergrund";
stationen.SOES.name = "Soest-Ost";
stationen.SOES.plz = "59494";
stationen.SOES.longitude = 8.148014475065194;
stationen.SOES.latitude = 51.570664799959175;
stationen.SOES.address = "Soest<br>Enkesenweg";
stationen.SOES.disko = 0;

stationen.SOLI = new Object();
stationen.SOLI.kuerzel = "SOLI";
stationen.SOLI.type = "Hintergrund";
stationen.SOLI.name = "Solingen- Wald";
stationen.SOLI.plz = "42719";
stationen.SOLI.longitude = 7.052600188689695;
stationen.SOLI.latitude = 51.18376915089783;
stationen.SOLI.address = "Solingen<br>D&uuml;ltgenstaler Stra&szlig;e";
stationen.SOLI.disko = 0;

stationen.STOH = new Object();
stationen.STOH.kuerzel = "STOH";
stationen.STOH.type = "Industrie";
stationen.STOH.name = "Stolberg, Heinrich-B&ouml;ll-Platz";
stationen.STOH.plz = "52222";
stationen.STOH.longitude = 6.232582327619056;
stationen.STOH.latitude = 50.76479252242734;
stationen.STOH.address = "Stolberg<br>Heinrich-B&ouml;ll-Platz";
stationen.STOH.disko = 1;

stationen.UNNA = new Object();
stationen.UNNA.kuerzel = "UNNA";
stationen.UNNA.type = "Hintergrund";
stationen.UNNA.name = "Unna- K&ouml;nigsborn";
stationen.UNNA.plz = "59425";
stationen.UNNA.longitude = 7.6937963160197835;
stationen.UNNA.latitude = 51.547495371937;
stationen.UNNA.address = "Unna<br>Palaiseaustra&szlig;e";
stationen.UNNA.disko = 0;

stationen.WAST = new Object();
stationen.WAST.kuerzel = "WAST";
stationen.WAST.type = "Industrie";
stationen.WAST.name = "Warstein";
stationen.WAST.plz = "59581";
stationen.WAST.longitude = 8.3609;
stationen.WAST.latitude = 51.443;
stationen.WAST.address = "Warstein<br>Rangetriftweg";
stationen.WAST.disko = 0;

stationen.WESE = new Object();
stationen.WESE.kuerzel = "WESE";
stationen.WESE.type = "Hintergrund";
stationen.WESE.name = "Wesel- Feldmark";
stationen.WESE.plz = "46485";
stationen.WESE.longitude = 6.629526598223247;
stationen.WESE.latitude = 51.67280472078626;
stationen.WESE.address = "Wesel<br>Mercatorstra&szlig;e";
stationen.WESE.disko = 0;

stationen.WIT2 = new Object();
stationen.WIT2.kuerzel = "WIT2";
stationen.WIT2.type = "Hintergrund";
stationen.WIT2.name = "Witten- Annen";
stationen.WIT2.plz = "58455";
stationen.WIT2.longitude = 7.358356749197764;
stationen.WIT2.latitude = 51.444265867039114;
stationen.WIT2.address = "Witten<br>Westfalenstra&szlig;e";
stationen.WIT2.disko = 0;

stationen.VWEL = new Object();
stationen.VWEL.kuerzel = "VWEL";
stationen.VWEL.type = "Verkehr";
stationen.VWEL.name = "Wuppertal, Gathe";
stationen.VWEL.plz = "42107";
stationen.VWEL.longitude = 7.147363836494846;
stationen.VWEL.latitude = 51.260677739380434;
stationen.VWEL.address = "Wuppertal<br>Gathe/ Wilhelmstra&szlig;e";
stationen.VWEL.disko = 0;

stationen.WULA = new Object();
stationen.WULA.kuerzel = "WULA";
stationen.WULA.type = "Hintergrund";
stationen.WULA.name = "Wuppertal- Langerfeld";
stationen.WULA.plz = "42389";
stationen.WULA.longitude = 7.231857388735508;
stationen.WULA.latitude = 51.27764412820164;
stationen.WULA.address = "Wuppertal<br>Am Buchenloh";
stationen.WULA.disko = 0;
