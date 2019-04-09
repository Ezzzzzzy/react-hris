const cities = [
  {
    id: 1,
    desc: "ADAMS"
  },
  {
    id: 2,
    desc: "BACARRA"
  },
  {
    id: 3,
    desc: "BADOC"
  },
  {
    id: 4,
    desc: "BANGUI"
  },
  {
    id: 5,
    desc: "BATAC CITY"
  },
  {
    id: 6,
    desc: "BURGOS"
  },
  {
    id: 7,
    desc: "CARASI"
  },
  {
    id: 8,
    desc: "CURRIMAO"
  },
  {
    id: 9,
    desc: "DINGRAS"
  },
  {
    id: 10,
    desc: "DUMALNEG"
  },
  {
    id: 11,
    desc: "BANNA (ESPIRITU)"
  },
  {
    id: 12,
    desc: "LAOAG CITY (Capital)"
  },
  {
    id: 13,
    desc: "MARCOS"
  },
  {
    id: 14,
    desc: "NUEVA ERA"
  },
  {
    id: 15,
    desc: "PAGUDPUD"
  },
  {
    id: 16,
    desc: "PAOAY"
  },
  {
    id: 17,
    desc: "PASUQUIN"
  },
  {
    id: 18,
    desc: "PIDDIG"
  },
  {
    id: 19,
    desc: "PINILI"
  },
  {
    id: 20,
    desc: "SAN NICOLAS"
  },
  {
    id: 21,
    desc: "SARRAT"
  },
  {
    id: 22,
    desc: "SOLSONA"
  },
  {
    id: 23,
    desc: "VINTAR"
  },
  {
    id: 24,
    desc: "ALILEM"
  },
  {
    id: 25,
    desc: "BANAYOYO"
  },
  {
    id: 26,
    desc: "BANTAY"
  },
  {
    id: 28,
    desc: "CABUGAO"
  },
  {
    id: 29,
    desc: "CANDON CITY"
  },
  {
    id: 30,
    desc: "CAOAYAN"
  },
  {
    id: 31,
    desc: "CERVANTES"
  },
  {
    id: 32,
    desc: "GALIMUYOD"
  },
  {
    id: 33,
    desc: "GREGORIO DEL PILAR (CONCEPCION)"
  },
  {
    id: 34,
    desc: "LIDLIDDA"
  },
  {
    id: 35,
    desc: "MAGSINGAL"
  },
  {
    id: 36,
    desc: "NAGBUKEL"
  },
  {
    id: 37,
    desc: "NARVACAN"
  },
  {
    id: 38,
    desc: "QUIRINO (ANGKAKI)"
  },
  {
    id: 39,
    desc: "SALCEDO (BAUGEN)"
  },
  {
    id: 40,
    desc: "SAN EMILIO"
  },
  {
    id: 41,
    desc: "SAN ESTEBAN"
  },
  {
    id: 42,
    desc: "SAN ILDEFONSO"
  },
  {
    id: 43,
    desc: "SAN JUAN (LAPOG)"
  },
  {
    id: 55,
    desc: "MANILA CITY"
  },
  {
    id: 44,
    desc: "SAN VICENTE"
  },
  {
    id: 45,
    desc: "SANTA"
  },
  {
    id: 46,
    desc: "SANTA CATALINA"
  },
  {
    id: 47,
    desc: "SANTA CRUZ"
  },
  {
    id: 48,
    desc: "SANTA LUCIA"
  },
  {
    id: 49,
    desc: "SANTA MARIA"
  },
  {
    id: 50,
    desc: "SANTIAGO"
  },
  {
    id: 51,
    desc: "SANTO DOMINGO"
  },
  {
    id: 52,
    desc: "SIGAY"
  },
  {
    id: 53,
    desc: "SINAIT"
  },
  {
    id: 54,
    desc: "SUGPON"
  },
  {
    id: 55,
    desc: "SUYO"
  },
  {
    id: 56,
    desc: "TAGUDIN"
  },
  {
    id: 57,
    desc: "VIGAN CITY (Capital)"
  },
  {
    id: 58,
    desc: "AGOO"
  },
  {
    id: 59,
    desc: "ARINGAY"
  },
  {
    id: 60,
    desc: "BACNOTAN"
  },
  {
    id: 61,
    desc: "BAGULIN"
  },
  {
    id: 62,
    desc: "BALAOAN"
  },
  {
    id: 63,
    desc: "BANGAR"
  },
  {
    id: 64,
    desc: "BAUANG"
  },
  {
    id: 66,
    desc: "CABA"
  },
  {
    id: 67,
    desc: "LUNA"
  },
  {
    id: 68,
    desc: "NAGUILIAN"
  },
  {
    id: 69,
    desc: "PUGO"
  },
  {
    id: 70,
    desc: "ROSARIO"
  },
  {
    id: 71,
    desc: "SAN FERNANDO CITY (Capital)"
  },
  {
    id: 72,
    desc: "SAN GABRIEL"
  },
  {
    id: 73,
    desc: "SAN JUAN"
  },
  {
    id: 74,
    desc: "SANTO TOMAS"
  },
  {
    id: 75,
    desc: "SANTOL"
  },
  {
    id: 76,
    desc: "SUDIPEN"
  },
  {
    id: 77,
    desc: "TUBAO"
  },
  {
    id: 78,
    desc: "AGNO"
  },
  {
    id: 79,
    desc: "AGUILAR"
  },
  {
    id: 80,
    desc: "ALAMINOS CITY"
  },
  {
    id: 81,
    desc: "ALCALA"
  },
  {
    id: 82,
    desc: "ANDA"
  },
  {
    id: 83,
    desc: "ASINGAN"
  },
  {
    id: 84,
    desc: "BALUNGAO"
  },
  {
    id: 85,
    desc: "BANI"
  },
  {
    id: 86,
    desc: "BASISTA"
  },
  {
    id: 87,
    desc: "BAUTISTA"
  },
  {
    id: 88,
    desc: "BAYAMBANG"
  },
  {
    id: 89,
    desc: "BINALONAN"
  },
  {
    id: 90,
    desc: "BINMALEY"
  },
  {
    id: 91,
    desc: "BOLINAO"
  },
  {
    id: 92,
    desc: "BUGALLON"
  },
  {
    id: 94,
    desc: "CALASIAO"
  },
  {
    id: 95,
    desc: "DAGUPAN CITY"
  },
  {
    id: 96,
    desc: "DASOL"
  },
  {
    id: 97,
    desc: "INFANTA"
  },
  {
    id: 98,
    desc: "LABRADOR"
  },
  {
    id: 99,
    desc: "LINGAYEN (Capital)"
  },
  {
    id: 100,
    desc: "MABINI"
  },
  {
    id: 101,
    desc: "MALASIQUI"
  },
  {
    id: 102,
    desc: "MANAOAG"
  },
  {
    id: 103,
    desc: "MANGALDAN"
  },
  {
    id: 104,
    desc: "MANGATAREM"
  },
  {
    id: 105,
    desc: "MAPANDAN"
  },
  {
    id: 106,
    desc: "NATIVIDAD"
  },
  {
    id: 107,
    desc: "POZORRUBIO"
  },
  {
    id: 108,
    desc: "ROSALES"
  },
  {
    id: 109,
    desc: "SAN CARLOS CITY"
  },
  {
    id: 110,
    desc: "SAN FABIAN"
  },
  {
    id: 111,
    desc: "SAN JACINTO"
  },
  {
    id: 112,
    desc: "SAN MANUEL"
  },
  {
    id: 114,
    desc: "SAN QUINTIN"
  },
  {
    id: 115,
    desc: "SANTA BARBARA"
  },
  {
    id: 118,
    desc: "SISON"
  },
  {
    id: 119,
    desc: "SUAL"
  },
  {
    id: 120,
    desc: "TAYUG"
  },
  {
    id: 121,
    desc: "UMINGAN"
  },
  {
    id: 122,
    desc: "URBIZTONDO"
  },
  {
    id: 123,
    desc: "URDANETA CITY"
  },
  {
    id: 124,
    desc: "VILLASIS"
  },
  {
    id: 125,
    desc: "LAOAC"
  },
  {
    id: 126,
    desc: "BASCO (Capital)"
  },
  {
    id: 127,
    desc: "ITBAYAT"
  },
  {
    id: 128,
    desc: "IVANA"
  },
  {
    id: 129,
    desc: "MAHATAO"
  },
  {
    id: 130,
    desc: "SABTANG"
  },
  {
    id: 131,
    desc: "UYUGAN"
  },
  {
    id: 132,
    desc: "ABULUG"
  },
  {
    id: 134,
    desc: "ALLACAPAN"
  },
  {
    id: 135,
    desc: "AMULUNG"
  },
  {
    id: 136,
    desc: "APARRI"
  },
  {
    id: 137,
    desc: "BAGGAO"
  },
  {
    id: 138,
    desc: "BALLESTEROS"
  },
  {
    id: 139,
    desc: "BUGUEY"
  },
  {
    id: 140,
    desc: "CALAYAN"
  },
  {
    id: 141,
    desc: "CAMALANIUGAN"
  },
  {
    id: 142,
    desc: "CLAVERIA"
  },
  {
    id: 143,
    desc: "ENRILE"
  },
  {
    id: 144,
    desc: "GATTARAN"
  },
  {
    id: 145,
    desc: "GONZAGA"
  },
  {
    id: 146,
    desc: "IGUIG"
  },
  {
    id: 147,
    desc: "LAL-LO"
  },
  {
    id: 148,
    desc: "LASAM"
  },
  {
    id: 149,
    desc: "PAMPLONA"
  },
  {
    id: 150,
    desc: "PEÑABLANCA"
  },
  {
    id: 151,
    desc: "PIAT"
  },
  {
    id: 152,
    desc: "RIZAL"
  },
  {
    id: 153,
    desc: "SANCHEZ-MIRA"
  },
  {
    id: 154,
    desc: "SANTA ANA"
  },
  {
    id: 155,
    desc: "SANTA PRAXEDES"
  },
  {
    id: 156,
    desc: "SANTA TERESITA"
  },
  {
    id: 157,
    desc: "SANTO NIÑO (FAIRE)"
  },
  {
    id: 158,
    desc: "SOLANA"
  },
  {
    id: 159,
    desc: "TUAO"
  },
  {
    id: 160,
    desc: "TUGUEGARAO CITY (Capital)"
  },
  {
    id: 161,
    desc: "ALICIA"
  },
  {
    id: 162,
    desc: "ANGADANAN"
  },
  {
    id: 163,
    desc: "AURORA"
  },
  {
    id: 164,
    desc: "BENITO SOLIVEN"
  },
  {
    id: 166,
    desc: "CABAGAN"
  },
  {
    id: 167,
    desc: "CABATUAN"
  },
  {
    id: 168,
    desc: "CAUAYAN CITY"
  },
  {
    id: 169,
    desc: "CORDON"
  },
  {
    id: 170,
    desc: "DINAPIGUE"
  },
  {
    id: 171,
    desc: "DIVILACAN"
  },
  {
    id: 172,
    desc: "ECHAGUE"
  },
  {
    id: 173,
    desc: "GAMU"
  },
  {
    id: 174,
    desc: "ILAGAN CITY (Capital)"
  },
  {
    id: 175,
    desc: "JONES"
  },
  {
    id: 177,
    desc: "MACONACON"
  },
  {
    id: 178,
    desc: "DELFIN ALBANO (MAGSAYSAY)"
  },
  {
    id: 179,
    desc: "MALLIG"
  },
  {
    id: 181,
    desc: "PALANAN"
  },
  {
    id: 182,
    desc: "QUEZON"
  },
  {
    id: 183,
    desc: "QUIRINO"
  },
  {
    id: 184,
    desc: "RAMON"
  },
  {
    id: 185,
    desc: "REINA MERCEDES"
  },
  {
    id: 186,
    desc: "ROXAS"
  },
  {
    id: 187,
    desc: "SAN AGUSTIN"
  },
  {
    id: 188,
    desc: "SAN GUILLERMO"
  },
  {
    id: 189,
    desc: "SAN ISIDRO"
  },
  {
    id: 191,
    desc: "SAN MARIANO"
  },
  {
    id: 192,
    desc: "SAN MATEO"
  },
  {
    id: 193,
    desc: "SAN PABLO"
  },
  {
    id: 195,
    desc: "SANTIAGO CITY"
  },
  {
    id: 197,
    desc: "TUMAUINI"
  },
  {
    id: 198,
    desc: "AMBAGUIO"
  },
  {
    id: 199,
    desc: "ARITAO"
  },
  {
    id: 200,
    desc: "BAGABAG"
  },
  {
    id: 201,
    desc: "BAMBANG"
  },
  {
    id: 202,
    desc: "BAYOMBONG (Capital)"
  },
  {
    id: 203,
    desc: "DIADI"
  },
  {
    id: 204,
    desc: "DUPAX DEL NORTE"
  },
  {
    id: 205,
    desc: "DUPAX DEL SUR"
  },
  {
    id: 206,
    desc: "KASIBU"
  },
  {
    id: 207,
    desc: "KAYAPA"
  },
  {
    id: 209,
    desc: "SANTA FE"
  },
  {
    id: 210,
    desc: "SOLANO"
  },
  {
    id: 211,
    desc: "VILLAVERDE"
  },
  {
    id: 212,
    desc: "ALFONSO CASTANEDA"
  },
  {
    id: 213,
    desc: "AGLIPAY"
  },
  {
    id: 214,
    desc: "CABARROGUIS (Capital)"
  },
  {
    id: 215,
    desc: "DIFFUN"
  },
  {
    id: 216,
    desc: "MADDELA"
  },
  {
    id: 217,
    desc: "SAGUDAY"
  },
  {
    id: 218,
    desc: "NAGTIPUNAN"
  },
  {
    id: 219,
    desc: "ABUCAY"
  },
  {
    id: 220,
    desc: "BAGAC"
  },
  {
    id: 221,
    desc: "BALANGA CITY (Capital)"
  },
  {
    id: 222,
    desc: "DINALUPIHAN"
  },
  {
    id: 223,
    desc: "HERMOSA"
  },
  {
    id: 224,
    desc: "LIMAY"
  },
  {
    id: 225,
    desc: "MARIVELES"
  },
  {
    id: 226,
    desc: "MORONG"
  },
  {
    id: 227,
    desc: "ORANI"
  },
  {
    id: 228,
    desc: "ORION"
  },
  {
    id: 229,
    desc: "PILAR"
  },
  {
    id: 230,
    desc: "SAMAL"
  },
  {
    id: 231,
    desc: "ANGAT"
  },
  {
    id: 232,
    desc: "BALAGTAS (BIGAA)"
  },
  {
    id: 233,
    desc: "BALIUAG"
  },
  {
    id: 234,
    desc: "BOCAUE"
  },
  {
    id: 235,
    desc: "BULACAN"
  },
  {
    id: 236,
    desc: "BUSTOS"
  },
  {
    id: 237,
    desc: "CALUMPIT"
  },
  {
    id: 238,
    desc: "GUIGUINTO"
  },
  {
    id: 239,
    desc: "HAGONOY"
  },
  {
    id: 240,
    desc: "MALOLOS CITY (Capital)"
  },
  {
    id: 241,
    desc: "MARILAO"
  },
  {
    id: 242,
    desc: "MEYCAUAYAN CITY"
  },
  {
    id: 243,
    desc: "NORZAGARAY"
  },
  {
    id: 244,
    desc: "OBANDO"
  },
  {
    id: 245,
    desc: "PANDI"
  },
  {
    id: 246,
    desc: "PAOMBONG"
  },
  {
    id: 247,
    desc: "PLARIDEL"
  },
  {
    id: 248,
    desc: "PULILAN"
  },
  {
    id: 250,
    desc: "SAN JOSE DEL MONTE CITY"
  },
  {
    id: 251,
    desc: "SAN MIGUEL"
  },
  {
    id: 252,
    desc: "SAN RAFAEL"
  },
  {
    id: 254,
    desc: "DOÑA REMEDIOS TRINIDAD"
  },
  {
    id: 255,
    desc: "ALIAGA"
  },
  {
    id: 256,
    desc: "BONGABON"
  },
  {
    id: 257,
    desc: "CABANATUAN CITY"
  },
  {
    id: 258,
    desc: "CABIAO"
  },
  {
    id: 259,
    desc: "CARRANGLAN"
  },
  {
    id: 260,
    desc: "CUYAPO"
  },
  {
    id: 261,
    desc: "GABALDON (BITULOK & SABANI)"
  },
  {
    id: 262,
    desc: "GAPAN CITY"
  },
  {
    id: 263,
    desc: "GENERAL MAMERTO NATIVIDAD"
  },
  {
    id: 264,
    desc: "GENERAL TINIO (PAPAYA)"
  },
  {
    id: 265,
    desc: "GUIMBA"
  },
  {
    id: 266,
    desc: "JAEN"
  },
  {
    id: 267,
    desc: "LAUR"
  },
  {
    id: 268,
    desc: "LICAB"
  },
  {
    id: 269,
    desc: "LLANERA"
  },
  {
    id: 270,
    desc: "LUPAO"
  },
  {
    id: 271,
    desc: "SCIENCE MUÑOZ CITY"
  },
  {
    id: 272,
    desc: "NAMPICUAN"
  },
  {
    id: 273,
    desc: "PALAYAN CITY (Capital)"
  },
  {
    id: 274,
    desc: "PANTABANGAN"
  },
  {
    id: 275,
    desc: "PEÑARANDA"
  },
  {
    id: 278,
    desc: "SAN ANTONIO"
  },
  {
    id: 280,
    desc: "SAN JOSE CITY"
  },
  {
    id: 281,
    desc: "SAN LEONARDO"
  },
  {
    id: 282,
    desc: "SANTA ROSA"
  },
  {
    id: 284,
    desc: "TALAVERA"
  },
  {
    id: 285,
    desc: "TALUGTUG"
  },
  {
    id: 286,
    desc: "ZARAGOZA"
  },
  {
    id: 287,
    desc: "ANGELES CITY"
  },
  {
    id: 288,
    desc: "APALIT"
  },
  {
    id: 289,
    desc: "ARAYAT"
  },
  {
    id: 290,
    desc: "BACOLOR"
  },
  {
    id: 291,
    desc: "CANDABA"
  },
  {
    id: 292,
    desc: "FLORIDABLANCA"
  },
  {
    id: 293,
    desc: "GUAGUA"
  },
  {
    id: 294,
    desc: "LUBAO"
  },
  {
    id: 295,
    desc: "MABALACAT CITY"
  },
  {
    id: 296,
    desc: "MACABEBE"
  },
  {
    id: 297,
    desc: "MAGALANG"
  },
  {
    id: 298,
    desc: "MASANTOL"
  },
  {
    id: 299,
    desc: "MEXICO"
  },
  {
    id: 300,
    desc: "MINALIN"
  },
  {
    id: 301,
    desc: "PORAC"
  },
  {
    id: 303,
    desc: "SAN LUIS"
  },
  {
    id: 304,
    desc: "SAN SIMON"
  },
  {
    id: 306,
    desc: "SANTA RITA"
  },
  {
    id: 308,
    desc: "SASMUAN (Sexmoan)"
  },
  {
    id: 309,
    desc: "ANAO"
  },
  {
    id: 310,
    desc: "BAMBAN"
  },
  {
    id: 311,
    desc: "CAMILING"
  },
  {
    id: 312,
    desc: "CAPAS"
  },
  {
    id: 313,
    desc: "CONCEPCION"
  },
  {
    id: 314,
    desc: "GERONA"
  },
  {
    id: 315,
    desc: "LA PAZ"
  },
  {
    id: 316,
    desc: "MAYANTOC"
  },
  {
    id: 317,
    desc: "MONCADA"
  },
  {
    id: 318,
    desc: "PANIQUI"
  },
  {
    id: 319,
    desc: "PURA"
  },
  {
    id: 320,
    desc: "RAMOS"
  },
  {
    id: 321,
    desc: "SAN CLEMENTE"
  },
  {
    id: 323,
    desc: "SANTA IGNACIA"
  },
  {
    id: 324,
    desc: "TARLAC CITY (Capital)"
  },
  {
    id: 325,
    desc: "VICTORIA"
  },
  {
    id: 326,
    desc: "SAN JOSE"
  },
  {
    id: 327,
    desc: "BOTOLAN"
  },
  {
    id: 328,
    desc: "CABANGAN"
  },
  {
    id: 329,
    desc: "CANDELARIA"
  },
  {
    id: 330,
    desc: "CASTILLEJOS"
  },
  {
    id: 331,
    desc: "IBA (Capital)"
  },
  {
    id: 332,
    desc: "MASINLOC"
  },
  {
    id: 333,
    desc: "OLONGAPO CITY"
  },
  {
    id: 334,
    desc: "PALAUIG"
  },
  {
    id: 336,
    desc: "SAN FELIPE"
  },
  {
    id: 337,
    desc: "SAN MARCELINO"
  },
  {
    id: 338,
    desc: "SAN NARCISO"
  },
  {
    id: 340,
    desc: "SUBIC"
  },
  {
    id: 341,
    desc: "BALER (Capital)"
  },
  {
    id: 342,
    desc: "CASIGURAN"
  },
  {
    id: 343,
    desc: "DILASAG"
  },
  {
    id: 344,
    desc: "DINALUNGAN"
  },
  {
    id: 345,
    desc: "DINGALAN"
  },
  {
    id: 346,
    desc: "DIPACULAO"
  },
  {
    id: 347,
    desc: "MARIA AURORA"
  },
  {
    id: 349,
    desc: "AGONCILLO"
  },
  {
    id: 350,
    desc: "ALITAGTAG"
  },
  {
    id: 351,
    desc: "BALAYAN"
  },
  {
    id: 352,
    desc: "BALETE"
  },
  {
    id: 353,
    desc: "BATANGAS CITY (Capital)"
  },
  {
    id: 354,
    desc: "BAUAN"
  },
  {
    id: 355,
    desc: "CALACA"
  },
  {
    id: 356,
    desc: "CALATAGAN"
  },
  {
    id: 357,
    desc: "CUENCA"
  },
  {
    id: 358,
    desc: "IBAAN"
  },
  {
    id: 359,
    desc: "LAUREL"
  },
  {
    id: 360,
    desc: "LEMERY"
  },
  {
    id: 361,
    desc: "LIAN"
  },
  {
    id: 362,
    desc: "LIPA CITY"
  },
  {
    id: 363,
    desc: "LOBO"
  },
  {
    id: 365,
    desc: "MALVAR"
  },
  {
    id: 366,
    desc: "MATAASNAKAHOY"
  },
  {
    id: 367,
    desc: "NASUGBU"
  },
  {
    id: 368,
    desc: "PADRE GARCIA"
  },
  {
    id: 374,
    desc: "SAN PASCUAL"
  },
  {
    id: 377,
    desc: "TAAL"
  },
  {
    id: 378,
    desc: "TALISAY"
  },
  {
    id: 379,
    desc: "TANAUAN CITY"
  },
  {
    id: 380,
    desc: "TAYSAN"
  },
  {
    id: 381,
    desc: "TINGLOY"
  },
  {
    id: 382,
    desc: "TUY"
  },
  {
    id: 383,
    desc: "ALFONSO"
  },
  {
    id: 384,
    desc: "AMADEO"
  },
  {
    id: 385,
    desc: "BACOOR CITY"
  },
  {
    id: 386,
    desc: "CARMONA"
  },
  {
    id: 387,
    desc: "CAVITE CITY"
  },
  {
    id: 388,
    desc: "DASMARIÑAS CITY"
  },
  {
    id: 389,
    desc: "GENERAL EMILIO AGUINALDO"
  },
  {
    id: 390,
    desc: "GENERAL TRIAS"
  },
  {
    id: 391,
    desc: "IMUS CITY"
  },
  {
    id: 392,
    desc: "INDANG"
  },
  {
    id: 393,
    desc: "KAWIT"
  },
  {
    id: 394,
    desc: "MAGALLANES"
  },
  {
    id: 395,
    desc: "MARAGONDON"
  },
  {
    id: 396,
    desc: "MENDEZ (MENDEZ-NUÑEZ)"
  },
  {
    id: 397,
    desc: "NAIC"
  },
  {
    id: 398,
    desc: "NOVELETA"
  },
  {
    id: 400,
    desc: "SILANG"
  },
  {
    id: 401,
    desc: "TAGAYTAY CITY"
  },
  {
    id: 402,
    desc: "TANZA"
  },
  {
    id: 403,
    desc: "TERNATE"
  },
  {
    id: 404,
    desc: "TRECE MARTIRES CITY (Capital)"
  },
  {
    id: 405,
    desc: "GEN. MARIANO ALVAREZ"
  },
  {
    id: 406,
    desc: "ALAMINOS"
  },
  {
    id: 407,
    desc: "BAY"
  },
  {
    id: 408,
    desc: "BIÑAN CITY"
  },
  {
    id: 409,
    desc: "CABUYAO CITY"
  },
  {
    id: 410,
    desc: "CALAMBA CITY"
  },
  {
    id: 411,
    desc: "CALAUAN"
  },
  {
    id: 412,
    desc: "CAVINTI"
  },
  {
    id: 413,
    desc: "FAMY"
  },
  {
    id: 414,
    desc: "KALAYAAN"
  },
  {
    id: 415,
    desc: "LILIW"
  },
  {
    id: 416,
    desc: "LOS BAÑOS"
  },
  {
    id: 417,
    desc: "LUISIANA"
  },
  {
    id: 418,
    desc: "LUMBAN"
  },
  {
    id: 419,
    desc: "MABITAC"
  },
  {
    id: 420,
    desc: "MAGDALENA"
  },
  {
    id: 421,
    desc: "MAJAYJAY"
  },
  {
    id: 422,
    desc: "NAGCARLAN"
  },
  {
    id: 423,
    desc: "PAETE"
  },
  {
    id: 424,
    desc: "PAGSANJAN"
  },
  {
    id: 425,
    desc: "PAKIL"
  },
  {
    id: 426,
    desc: "PANGIL"
  },
  {
    id: 427,
    desc: "PILA"
  },
  {
    id: 429,
    desc: "SAN PABLO CITY"
  },
  {
    id: 430,
    desc: "SAN PEDRO CITY"
  },
  {
    id: 431,
    desc: "SANTA CRUZ (Capital)"
  },
  {
    id: 433,
    desc: "SANTA ROSA CITY"
  },
  {
    id: 434,
    desc: "SINILOAN"
  },
  {
    id: 436,
    desc: "AGDANGAN"
  },
  {
    id: 437,
    desc: "ALABAT"
  },
  {
    id: 438,
    desc: "ATIMONAN"
  },
  {
    id: 439,
    desc: "BUENAVISTA"
  },
  {
    id: 440,
    desc: "BURDEOS"
  },
  {
    id: 441,
    desc: "CALAUAG"
  },
  {
    id: 443,
    desc: "CATANAUAN"
  },
  {
    id: 444,
    desc: "DOLORES"
  },
  {
    id: 445,
    desc: "GENERAL LUNA"
  },
  {
    id: 446,
    desc: "GENERAL NAKAR"
  },
  {
    id: 447,
    desc: "GUINAYANGAN"
  },
  {
    id: 448,
    desc: "GUMACA"
  },
  {
    id: 450,
    desc: "JOMALIG"
  },
  {
    id: 451,
    desc: "LOPEZ"
  },
  {
    id: 452,
    desc: "LUCBAN"
  },
  {
    id: 453,
    desc: "LUCENA CITY (Capital)"
  },
  {
    id: 454,
    desc: "MACALELON"
  },
  {
    id: 455,
    desc: "MAUBAN"
  },
  {
    id: 456,
    desc: "MULANAY"
  },
  {
    id: 457,
    desc: "PADRE BURGOS"
  },
  {
    id: 458,
    desc: "PAGBILAO"
  },
  {
    id: 459,
    desc: "PANUKULAN"
  },
  {
    id: 460,
    desc: "PATNANUNGAN"
  },
  {
    id: 461,
    desc: "PEREZ"
  },
  {
    id: 462,
    desc: "PITOGO"
  },
  {
    id: 464,
    desc: "POLILLO"
  },
  {
    id: 466,
    desc: "REAL"
  },
  {
    id: 467,
    desc: "SAMPALOC"
  },
  {
    id: 468,
    desc: "SAN ANDRES"
  },
  {
    id: 470,
    desc: "SAN FRANCISCO (AURORA)"
  },
  {
    id: 472,
    desc: "SARIAYA"
  },
  {
    id: 473,
    desc: "TAGKAWAYAN"
  },
  {
    id: 474,
    desc: "TAYABAS CITY"
  },
  {
    id: 475,
    desc: "TIAONG"
  },
  {
    id: 476,
    desc: "UNISAN"
  },
  {
    id: 477,
    desc: "ANGONO"
  },
  {
    id: 478,
    desc: "ANTIPOLO CITY"
  },
  {
    id: 479,
    desc: "BARAS"
  },
  {
    id: 480,
    desc: "BINANGONAN"
  },
  {
    id: 481,
    desc: "CAINTA"
  },
  {
    id: 482,
    desc: "CARDONA"
  },
  {
    id: 483,
    desc: "JALA-JALA"
  },
  {
    id: 484,
    desc: "RODRIGUEZ (MONTALBAN)"
  },
  {
    id: 486,
    desc: "PILILLA"
  },
  {
    id: 488,
    desc: "TANAY"
  },
  {
    id: 489,
    desc: "TAYTAY"
  },
  {
    id: 490,
    desc: "TERESA"
  },
  {
    id: 491,
    desc: "BOAC (Capital)"
  },
  {
    id: 493,
    desc: "GASAN"
  },
  {
    id: 494,
    desc: "MOGPOG"
  },
  {
    id: 496,
    desc: "TORRIJOS"
  },
  {
    id: 497,
    desc: "ABRA DE ILOG"
  },
  {
    id: 498,
    desc: "CALINTAAN"
  },
  {
    id: 499,
    desc: "LOOC"
  },
  {
    id: 500,
    desc: "LUBANG"
  },
  {
    id: 501,
    desc: "MAGSAYSAY"
  },
  {
    id: 502,
    desc: "MAMBURAO (Capital)"
  },
  {
    id: 503,
    desc: "PALUAN"
  },
  {
    id: 505,
    desc: "SABLAYAN"
  },
  {
    id: 508,
    desc: "BACO"
  },
  {
    id: 509,
    desc: "BANSUD"
  },
  {
    id: 510,
    desc: "BONGABONG"
  },
  {
    id: 511,
    desc: "BULALACAO (SAN PEDRO)"
  },
  {
    id: 512,
    desc: "CALAPAN CITY (Capital)"
  },
  {
    id: 513,
    desc: "GLORIA"
  },
  {
    id: 514,
    desc: "MANSALAY"
  },
  {
    id: 515,
    desc: "NAUJAN"
  },
  {
    id: 516,
    desc: "PINAMALAYAN"
  },
  {
    id: 517,
    desc: "POLA"
  },
  {
    id: 518,
    desc: "PUERTO GALERA"
  },
  {
    id: 520,
    desc: "SAN TEODORO"
  },
  {
    id: 521,
    desc: "SOCORRO"
  },
  {
    id: 523,
    desc: "ABORLAN"
  },
  {
    id: 524,
    desc: "AGUTAYA"
  },
  {
    id: 525,
    desc: "ARACELI"
  },
  {
    id: 526,
    desc: "BALABAC"
  },
  {
    id: 527,
    desc: "BATARAZA"
  },
  {
    id: 528,
    desc: "BROOKE'S POINT"
  },
  {
    id: 529,
    desc: "BUSUANGA"
  },
  {
    id: 530,
    desc: "CAGAYANCILLO"
  },
  {
    id: 531,
    desc: "CORON"
  },
  {
    id: 532,
    desc: "CUYO"
  },
  {
    id: 533,
    desc: "DUMARAN"
  },
  {
    id: 534,
    desc: "EL NIDO (BACUIT)"
  },
  {
    id: 535,
    desc: "LINAPACAN"
  },
  {
    id: 537,
    desc: "NARRA"
  },
  {
    id: 538,
    desc: "PUERTO PRINCESA CITY (Capital)"
  },
  {
    id: 544,
    desc: "CULION"
  },
  {
    id: 545,
    desc: "RIZAL (MARCOS)"
  },
  {
    id: 546,
    desc: "SOFRONIO ESPAÑOLA"
  },
  {
    id: 547,
    desc: "ALCANTARA"
  },
  {
    id: 548,
    desc: "BANTON"
  },
  {
    id: 549,
    desc: "CAJIDIOCAN"
  },
  {
    id: 550,
    desc: "CALATRAVA"
  },
  {
    id: 552,
    desc: "CORCUERA"
  },
  {
    id: 554,
    desc: "MAGDIWANG"
  },
  {
    id: 555,
    desc: "ODIONGAN"
  },
  {
    id: 556,
    desc: "ROMBLON (Capital)"
  },
  {
    id: 559,
    desc: "SAN FERNANDO"
  },
  {
    id: 562,
    desc: "FERROL"
  },
  {
    id: 563,
    desc: "SANTA MARIA (IMELDA)"
  },
  {
    id: 564,
    desc: "BACACAY"
  },
  {
    id: 565,
    desc: "CAMALIG"
  },
  {
    id: 566,
    desc: "DARAGA (LOCSIN)"
  },
  {
    id: 567,
    desc: "GUINOBATAN"
  },
  {
    id: 568,
    desc: "JOVELLAR"
  },
  {
    id: 569,
    desc: "LEGAZPI CITY (Capital)"
  },
  {
    id: 570,
    desc: "LIBON"
  },
  {
    id: 571,
    desc: "LIGAO CITY"
  },
  {
    id: 572,
    desc: "MALILIPOT"
  },
  {
    id: 573,
    desc: "MALINAO"
  },
  {
    id: 574,
    desc: "MANITO"
  },
  {
    id: 575,
    desc: "OAS"
  },
  {
    id: 576,
    desc: "PIO DURAN"
  },
  {
    id: 577,
    desc: "POLANGUI"
  },
  {
    id: 578,
    desc: "RAPU-RAPU"
  },
  {
    id: 579,
    desc: "SANTO DOMINGO (LIBOG)"
  },
  {
    id: 580,
    desc: "TABACO CITY"
  },
  {
    id: 581,
    desc: "TIWI"
  },
  {
    id: 582,
    desc: "BASUD"
  },
  {
    id: 583,
    desc: "CAPALONGA"
  },
  {
    id: 584,
    desc: "DAET (Capital)"
  },
  {
    id: 585,
    desc: "SAN LORENZO RUIZ (IMELDA)"
  },
  {
    id: 586,
    desc: "JOSE PANGANIBAN"
  },
  {
    id: 587,
    desc: "LABO"
  },
  {
    id: 588,
    desc: "MERCEDES"
  },
  {
    id: 589,
    desc: "PARACALE"
  },
  {
    id: 591,
    desc: "SANTA ELENA"
  },
  {
    id: 593,
    desc: "VINZONS"
  },
  {
    id: 594,
    desc: "BAAO"
  },
  {
    id: 595,
    desc: "BALATAN"
  },
  {
    id: 596,
    desc: "BATO"
  },
  {
    id: 597,
    desc: "BOMBON"
  },
  {
    id: 598,
    desc: "BUHI"
  },
  {
    id: 599,
    desc: "BULA"
  },
  {
    id: 600,
    desc: "CABUSAO"
  },
  {
    id: 601,
    desc: "CALABANGA"
  },
  {
    id: 602,
    desc: "CAMALIGAN"
  },
  {
    id: 603,
    desc: "CANAMAN"
  },
  {
    id: 604,
    desc: "CARAMOAN"
  },
  {
    id: 605,
    desc: "DEL GALLEGO"
  },
  {
    id: 606,
    desc: "GAINZA"
  },
  {
    id: 607,
    desc: "GARCHITORENA"
  },
  {
    id: 608,
    desc: "GOA"
  },
  {
    id: 609,
    desc: "IRIGA CITY"
  },
  {
    id: 610,
    desc: "LAGONOY"
  },
  {
    id: 611,
    desc: "LIBMANAN"
  },
  {
    id: 612,
    desc: "LUPI"
  },
  {
    id: 613,
    desc: "MAGARAO"
  },
  {
    id: 614,
    desc: "MILAOR"
  },
  {
    id: 615,
    desc: "MINALABAC"
  },
  {
    id: 616,
    desc: "NABUA"
  },
  {
    id: 617,
    desc: "NAGA CITY"
  },
  {
    id: 618,
    desc: "OCAMPO"
  },
  {
    id: 620,
    desc: "PASACAO"
  },
  {
    id: 621,
    desc: "PILI (Capital)"
  },
  {
    id: 622,
    desc: "PRESENTACION (PARUBCAN)"
  },
  {
    id: 623,
    desc: "RAGAY"
  },
  {
    id: 624,
    desc: "SAGÑAY"
  },
  {
    id: 627,
    desc: "SIPOCOT"
  },
  {
    id: 628,
    desc: "SIRUMA"
  },
  {
    id: 629,
    desc: "TIGAON"
  },
  {
    id: 630,
    desc: "TINAMBAC"
  },
  {
    id: 631,
    desc: "BAGAMANOC"
  },
  {
    id: 634,
    desc: "CARAMORAN"
  },
  {
    id: 635,
    desc: "GIGMOTO"
  },
  {
    id: 636,
    desc: "PANDAN"
  },
  {
    id: 637,
    desc: "PANGANIBAN (PAYO)"
  },
  {
    id: 638,
    desc: "SAN ANDRES (CALOLBON)"
  },
  {
    id: 640,
    desc: "VIGA"
  },
  {
    id: 641,
    desc: "VIRAC (Capital)"
  },
  {
    id: 642,
    desc: "AROROY"
  },
  {
    id: 643,
    desc: "BALENO"
  },
  {
    id: 644,
    desc: "BALUD"
  },
  {
    id: 645,
    desc: "BATUAN"
  },
  {
    id: 646,
    desc: "CATAINGAN"
  },
  {
    id: 647,
    desc: "CAWAYAN"
  },
  {
    id: 649,
    desc: "DIMASALANG"
  },
  {
    id: 650,
    desc: "ESPERANZA"
  },
  {
    id: 651,
    desc: "MANDAON"
  },
  {
    id: 652,
    desc: "MASBATE CITY (Capital)"
  },
  {
    id: 653,
    desc: "MILAGROS"
  },
  {
    id: 654,
    desc: "MOBO"
  },
  {
    id: 655,
    desc: "MONREAL"
  },
  {
    id: 656,
    desc: "PALANAS"
  },
  {
    id: 657,
    desc: "PIO V. CORPUZ (LIMBUHAN)"
  },
  {
    id: 658,
    desc: "PLACER"
  },
  {
    id: 662,
    desc: "USON"
  },
  {
    id: 663,
    desc: "BARCELONA"
  },
  {
    id: 664,
    desc: "BULAN"
  },
  {
    id: 665,
    desc: "BULUSAN"
  },
  {
    id: 667,
    desc: "CASTILLA"
  },
  {
    id: 668,
    desc: "DONSOL"
  },
  {
    id: 669,
    desc: "GUBAT"
  },
  {
    id: 670,
    desc: "IROSIN"
  },
  {
    id: 671,
    desc: "JUBAN"
  },
  {
    id: 673,
    desc: "MATNOG"
  },
  {
    id: 675,
    desc: "PRIETO DIAZ"
  },
  {
    id: 676,
    desc: "SANTA MAGDALENA"
  },
  {
    id: 677,
    desc: "SORSOGON CITY (Capital)"
  },
  {
    id: 678,
    desc: "ALTAVAS"
  },
  {
    id: 680,
    desc: "BANGA"
  },
  {
    id: 681,
    desc: "BATAN"
  },
  {
    id: 682,
    desc: "BURUANGA"
  },
  {
    id: 683,
    desc: "IBAJAY"
  },
  {
    id: 684,
    desc: "KALIBO (Capital)"
  },
  {
    id: 685,
    desc: "LEZO"
  },
  {
    id: 686,
    desc: "LIBACAO"
  },
  {
    id: 687,
    desc: "MADALAG"
  },
  {
    id: 688,
    desc: "MAKATO"
  },
  {
    id: 689,
    desc: "MALAY"
  },
  {
    id: 691,
    desc: "NABAS"
  },
  {
    id: 692,
    desc: "NEW WASHINGTON"
  },
  {
    id: 693,
    desc: "NUMANCIA"
  },
  {
    id: 694,
    desc: "TANGALAN"
  },
  {
    id: 695,
    desc: "ANINI-Y"
  },
  {
    id: 696,
    desc: "BARBAZA"
  },
  {
    id: 697,
    desc: "BELISON"
  },
  {
    id: 698,
    desc: "BUGASONG"
  },
  {
    id: 699,
    desc: "CALUYA"
  },
  {
    id: 700,
    desc: "CULASI"
  },
  {
    id: 701,
    desc: "TOBIAS FORNIER (DAO)"
  },
  {
    id: 702,
    desc: "HAMTIC"
  },
  {
    id: 703,
    desc: "LAUA-AN"
  },
  {
    id: 704,
    desc: "LIBERTAD"
  },
  {
    id: 706,
    desc: "PATNONGON"
  },
  {
    id: 707,
    desc: "SAN JOSE (Capital)"
  },
  {
    id: 708,
    desc: "SAN REMIGIO"
  },
  {
    id: 709,
    desc: "SEBASTE"
  },
  {
    id: 710,
    desc: "SIBALOM"
  },
  {
    id: 711,
    desc: "TIBIAO"
  },
  {
    id: 712,
    desc: "VALDERRAMA"
  },
  {
    id: 713,
    desc: "CUARTERO"
  },
  {
    id: 714,
    desc: "DAO"
  },
  {
    id: 715,
    desc: "DUMALAG"
  },
  {
    id: 716,
    desc: "DUMARAO"
  },
  {
    id: 717,
    desc: "IVISAN"
  },
  {
    id: 718,
    desc: "JAMINDAN"
  },
  {
    id: 719,
    desc: "MA-AYON"
  },
  {
    id: 720,
    desc: "MAMBUSAO"
  },
  {
    id: 721,
    desc: "PANAY"
  },
  {
    id: 722,
    desc: "PANITAN"
  },
  {
    id: 724,
    desc: "PONTEVEDRA"
  },
  {
    id: 725,
    desc: "PRESIDENT ROXAS"
  },
  {
    id: 726,
    desc: "ROXAS CITY (Capital)"
  },
  {
    id: 727,
    desc: "SAPI-AN"
  },
  {
    id: 728,
    desc: "SIGMA"
  },
  {
    id: 729,
    desc: "TAPAZ"
  },
  {
    id: 730,
    desc: "AJUY"
  },
  {
    id: 731,
    desc: "ALIMODIAN"
  },
  {
    id: 732,
    desc: "ANILAO"
  },
  {
    id: 733,
    desc: "BADIANGAN"
  },
  {
    id: 734,
    desc: "BALASAN"
  },
  {
    id: 735,
    desc: "BANATE"
  },
  {
    id: 736,
    desc: "BAROTAC NUEVO"
  },
  {
    id: 737,
    desc: "BAROTAC VIEJO"
  },
  {
    id: 738,
    desc: "BATAD"
  },
  {
    id: 739,
    desc: "BINGAWAN"
  },
  {
    id: 741,
    desc: "CALINOG"
  },
  {
    id: 742,
    desc: "CARLES"
  },
  {
    id: 744,
    desc: "DINGLE"
  },
  {
    id: 745,
    desc: "DUEÑAS"
  },
  {
    id: 746,
    desc: "DUMANGAS"
  },
  {
    id: 747,
    desc: "ESTANCIA"
  },
  {
    id: 748,
    desc: "GUIMBAL"
  },
  {
    id: 749,
    desc: "IGBARAS"
  },
  {
    id: 750,
    desc: "ILOILO CITY (Capital)"
  },
  {
    id: 751,
    desc: "JANIUAY"
  },
  {
    id: 752,
    desc: "LAMBUNAO"
  },
  {
    id: 753,
    desc: "LEGANES"
  },
  {
    id: 755,
    desc: "LEON"
  },
  {
    id: 756,
    desc: "MAASIN"
  },
  {
    id: 757,
    desc: "MIAGAO"
  },
  {
    id: 758,
    desc: "MINA"
  },
  {
    id: 759,
    desc: "NEW LUCENA"
  },
  {
    id: 760,
    desc: "OTON"
  },
  {
    id: 761,
    desc: "PASSI CITY"
  },
  {
    id: 762,
    desc: "PAVIA"
  },
  {
    id: 763,
    desc: "POTOTAN"
  },
  {
    id: 764,
    desc: "SAN DIONISIO"
  },
  {
    id: 765,
    desc: "SAN ENRIQUE"
  },
  {
    id: 766,
    desc: "SAN JOAQUIN"
  },
  {
    id: 770,
    desc: "SARA"
  },
  {
    id: 771,
    desc: "TIGBAUAN"
  },
  {
    id: 772,
    desc: "TUBUNGAN"
  },
  {
    id: 773,
    desc: "ZARRAGA"
  },
  {
    id: 774,
    desc: "BACOLOD CITY (Capital)"
  },
  {
    id: 775,
    desc: "BAGO CITY"
  },
  {
    id: 776,
    desc: "BINALBAGAN"
  },
  {
    id: 777,
    desc: "CADIZ CITY"
  },
  {
    id: 779,
    desc: "CANDONI"
  },
  {
    id: 780,
    desc: "CAUAYAN"
  },
  {
    id: 781,
    desc: "ENRIQUE B. MAGALONA (SARAVIA)"
  },
  {
    id: 782,
    desc: "ESCALANTE CITY"
  },
  {
    id: 783,
    desc: "HIMAMAYLAN CITY"
  },
  {
    id: 784,
    desc: "HINIGARAN"
  },
  {
    id: 785,
    desc: "HINOBA-AN (ASIA)"
  },
  {
    id: 786,
    desc: "ILOG"
  },
  {
    id: 787,
    desc: "ISABELA"
  },
  {
    id: 788,
    desc: "KABANKALAN CITY"
  },
  {
    id: 789,
    desc: "LA CARLOTA CITY"
  },
  {
    id: 790,
    desc: "LA CASTELLANA"
  },
  {
    id: 791,
    desc: "MANAPLA"
  },
  {
    id: 792,
    desc: "MOISES PADILLA (MAGALLON)"
  },
  {
    id: 793,
    desc: "MURCIA"
  },
  {
    id: 795,
    desc: "PULUPANDAN"
  },
  {
    id: 796,
    desc: "SAGAY CITY"
  },
  {
    id: 799,
    desc: "SILAY CITY"
  },
  {
    id: 800,
    desc: "SIPALAY CITY"
  },
  {
    id: 801,
    desc: "TALISAY CITY"
  },
  {
    id: 802,
    desc: "TOBOSO"
  },
  {
    id: 803,
    desc: "VALLADOLID"
  },
  {
    id: 804,
    desc: "VICTORIAS CITY"
  },
  {
    id: 805,
    desc: "SALVADOR BENEDICTO"
  },
  {
    id: 807,
    desc: "JORDAN (Capital)"
  },
  {
    id: 808,
    desc: "NUEVA VALENCIA"
  },
  {
    id: 809,
    desc: "SAN LORENZO"
  },
  {
    id: 810,
    desc: "SIBUNAG"
  },
  {
    id: 811,
    desc: "ALBURQUERQUE"
  },
  {
    id: 814,
    desc: "ANTEQUERA"
  },
  {
    id: 815,
    desc: "BACLAYON"
  },
  {
    id: 816,
    desc: "BALILIHAN"
  },
  {
    id: 818,
    desc: "BILAR"
  },
  {
    id: 820,
    desc: "CALAPE"
  },
  {
    id: 821,
    desc: "CANDIJAY"
  },
  {
    id: 822,
    desc: "CARMEN"
  },
  {
    id: 823,
    desc: "CATIGBIAN"
  },
  {
    id: 824,
    desc: "CLARIN"
  },
  {
    id: 825,
    desc: "CORELLA"
  },
  {
    id: 826,
    desc: "CORTES"
  },
  {
    id: 827,
    desc: "DAGOHOY"
  },
  {
    id: 828,
    desc: "DANAO"
  },
  {
    id: 829,
    desc: "DAUIS"
  },
  {
    id: 830,
    desc: "DIMIAO"
  },
  {
    id: 831,
    desc: "DUERO"
  },
  {
    id: 832,
    desc: "GARCIA HERNANDEZ"
  },
  {
    id: 833,
    desc: "GUINDULMAN"
  },
  {
    id: 834,
    desc: "INABANGA"
  },
  {
    id: 835,
    desc: "JAGNA"
  },
  {
    id: 836,
    desc: "JETAFE"
  },
  {
    id: 837,
    desc: "LILA"
  },
  {
    id: 838,
    desc: "LOAY"
  },
  {
    id: 839,
    desc: "LOBOC"
  },
  {
    id: 840,
    desc: "LOON"
  },
  {
    id: 842,
    desc: "MARIBOJOC"
  },
  {
    id: 843,
    desc: "PANGLAO"
  },
  {
    id: 845,
    desc: "PRES. CARLOS P. GARCIA (PITOGO)"
  },
  {
    id: 846,
    desc: "SAGBAYAN (BORJA)"
  },
  {
    id: 849,
    desc: "SEVILLA"
  },
  {
    id: 850,
    desc: "SIERRA BULLONES"
  },
  {
    id: 851,
    desc: "SIKATUNA"
  },
  {
    id: 852,
    desc: "TAGBILARAN CITY (Capital)"
  },
  {
    id: 853,
    desc: "TALIBON"
  },
  {
    id: 854,
    desc: "TRINIDAD"
  },
  {
    id: 855,
    desc: "TUBIGON"
  },
  {
    id: 856,
    desc: "UBAY"
  },
  {
    id: 857,
    desc: "VALENCIA"
  },
  {
    id: 858,
    desc: "BIEN UNIDO"
  },
  {
    id: 860,
    desc: "ALCOY"
  },
  {
    id: 861,
    desc: "ALEGRIA"
  },
  {
    id: 862,
    desc: "ALOGUINSAN"
  },
  {
    id: 863,
    desc: "ARGAO"
  },
  {
    id: 864,
    desc: "ASTURIAS"
  },
  {
    id: 865,
    desc: "BADIAN"
  },
  {
    id: 866,
    desc: "BALAMBAN"
  },
  {
    id: 867,
    desc: "BANTAYAN"
  },
  {
    id: 868,
    desc: "BARILI"
  },
  {
    id: 869,
    desc: "BOGO CITY"
  },
  {
    id: 870,
    desc: "BOLJOON"
  },
  {
    id: 871,
    desc: "BORBON"
  },
  {
    id: 872,
    desc: "CARCAR CITY"
  },
  {
    id: 874,
    desc: "CATMON"
  },
  {
    id: 875,
    desc: "CEBU CITY (Capital)"
  },
  {
    id: 876,
    desc: "COMPOSTELA"
  },
  {
    id: 877,
    desc: "CONSOLACION"
  },
  {
    id: 878,
    desc: "CORDOVA"
  },
  {
    id: 879,
    desc: "DAANBANTAYAN"
  },
  {
    id: 880,
    desc: "DALAGUETE"
  },
  {
    id: 881,
    desc: "DANAO CITY"
  },
  {
    id: 882,
    desc: "DUMANJUG"
  },
  {
    id: 883,
    desc: "GINATILAN"
  },
  {
    id: 884,
    desc: "LAPU-LAPU CITY (OPON)"
  },
  {
    id: 885,
    desc: "LILOAN"
  },
  {
    id: 886,
    desc: "MADRIDEJOS"
  },
  {
    id: 887,
    desc: "MALABUYOC"
  },
  {
    id: 888,
    desc: "MANDAUE CITY"
  },
  {
    id: 889,
    desc: "MEDELLIN"
  },
  {
    id: 890,
    desc: "MINGLANILLA"
  },
  {
    id: 891,
    desc: "MOALBOAL"
  },
  {
    id: 893,
    desc: "OSLOB"
  },
  {
    id: 895,
    desc: "PINAMUNGAHAN"
  },
  {
    id: 896,
    desc: "PORO"
  },
  {
    id: 897,
    desc: "RONDA"
  },
  {
    id: 898,
    desc: "SAMBOAN"
  },
  {
    id: 900,
    desc: "SAN FRANCISCO"
  },
  {
    id: 903,
    desc: "SANTANDER"
  },
  {
    id: 904,
    desc: "SIBONGA"
  },
  {
    id: 905,
    desc: "SOGOD"
  },
  {
    id: 906,
    desc: "TABOGON"
  },
  {
    id: 907,
    desc: "TABUELAN"
  },
  {
    id: 909,
    desc: "TOLEDO CITY"
  },
  {
    id: 910,
    desc: "TUBURAN"
  },
  {
    id: 911,
    desc: "TUDELA"
  },
  {
    id: 912,
    desc: "AMLAN (AYUQUITAN)"
  },
  {
    id: 913,
    desc: "AYUNGON"
  },
  {
    id: 914,
    desc: "BACONG"
  },
  {
    id: 915,
    desc: "BAIS CITY"
  },
  {
    id: 916,
    desc: "BASAY"
  },
  {
    id: 917,
    desc: "BAYAWAN CITY (TULONG)"
  },
  {
    id: 918,
    desc: "BINDOY (PAYABON)"
  },
  {
    id: 919,
    desc: "CANLAON CITY"
  },
  {
    id: 920,
    desc: "DAUIN"
  },
  {
    id: 921,
    desc: "DUMAGUETE CITY (Capital)"
  },
  {
    id: 922,
    desc: "GUIHULNGAN CITY"
  },
  {
    id: 923,
    desc: "JIMALALUD"
  },
  {
    id: 924,
    desc: "LA LIBERTAD"
  },
  {
    id: 925,
    desc: "MABINAY"
  },
  {
    id: 926,
    desc: "MANJUYOD"
  },
  {
    id: 930,
    desc: "SIATON"
  },
  {
    id: 931,
    desc: "SIBULAN"
  },
  {
    id: 932,
    desc: "TANJAY CITY"
  },
  {
    id: 933,
    desc: "TAYASAN"
  },
  {
    id: 934,
    desc: "VALENCIA (LUZURRIAGA)"
  },
  {
    id: 935,
    desc: "VALLEHERMOSO"
  },
  {
    id: 936,
    desc: "ZAMBOANGUITA"
  },
  {
    id: 937,
    desc: "ENRIQUE VILLANUEVA"
  },
  {
    id: 938,
    desc: "LARENA"
  },
  {
    id: 939,
    desc: "LAZI"
  },
  {
    id: 940,
    desc: "MARIA"
  },
  {
    id: 942,
    desc: "SIQUIJOR (Capital)"
  },
  {
    id: 943,
    desc: "ARTECHE"
  },
  {
    id: 944,
    desc: "BALANGIGA"
  },
  {
    id: 945,
    desc: "BALANGKAYAN"
  },
  {
    id: 946,
    desc: "BORONGAN CITY (Capital)"
  },
  {
    id: 947,
    desc: "CAN-AVID"
  },
  {
    id: 949,
    desc: "GENERAL MACARTHUR"
  },
  {
    id: 950,
    desc: "GIPORLOS"
  },
  {
    id: 951,
    desc: "GUIUAN"
  },
  {
    id: 952,
    desc: "HERNANI"
  },
  {
    id: 953,
    desc: "JIPAPAD"
  },
  {
    id: 954,
    desc: "LAWAAN"
  },
  {
    id: 955,
    desc: "LLORENTE"
  },
  {
    id: 956,
    desc: "MASLOG"
  },
  {
    id: 957,
    desc: "MAYDOLONG"
  },
  {
    id: 959,
    desc: "ORAS"
  },
  {
    id: 960,
    desc: "QUINAPONDAN"
  },
  {
    id: 961,
    desc: "SALCEDO"
  },
  {
    id: 962,
    desc: "SAN JULIAN"
  },
  {
    id: 963,
    desc: "SAN POLICARPO"
  },
  {
    id: 964,
    desc: "SULAT"
  },
  {
    id: 965,
    desc: "TAFT"
  },
  {
    id: 966,
    desc: "ABUYOG"
  },
  {
    id: 967,
    desc: "ALANGALANG"
  },
  {
    id: 968,
    desc: "ALBUERA"
  },
  {
    id: 969,
    desc: "BABATNGON"
  },
  {
    id: 970,
    desc: "BARUGO"
  },
  {
    id: 972,
    desc: "BAYBAY CITY"
  },
  {
    id: 973,
    desc: "BURAUEN"
  },
  {
    id: 974,
    desc: "CALUBIAN"
  },
  {
    id: 975,
    desc: "CAPOOCAN"
  },
  {
    id: 976,
    desc: "CARIGARA"
  },
  {
    id: 977,
    desc: "DAGAMI"
  },
  {
    id: 978,
    desc: "DULAG"
  },
  {
    id: 979,
    desc: "HILONGOS"
  },
  {
    id: 980,
    desc: "HINDANG"
  },
  {
    id: 981,
    desc: "INOPACAN"
  },
  {
    id: 982,
    desc: "ISABEL"
  },
  {
    id: 983,
    desc: "JARO"
  },
  {
    id: 984,
    desc: "JAVIER (BUGHO)"
  },
  {
    id: 985,
    desc: "JULITA"
  },
  {
    id: 986,
    desc: "KANANGA"
  },
  {
    id: 988,
    desc: "LEYTE"
  },
  {
    id: 989,
    desc: "MACARTHUR"
  },
  {
    id: 990,
    desc: "MAHAPLAG"
  },
  {
    id: 991,
    desc: "MATAG-OB"
  },
  {
    id: 992,
    desc: "MATALOM"
  },
  {
    id: 993,
    desc: "MAYORGA"
  },
  {
    id: 994,
    desc: "MERIDA"
  },
  {
    id: 995,
    desc: "ORMOC CITY"
  },
  {
    id: 996,
    desc: "PALO"
  },
  {
    id: 997,
    desc: "PALOMPON"
  },
  {
    id: 998,
    desc: "PASTRANA"
  },
  {
    id: 1002,
    desc: "TABANGO"
  },
  {
    id: 1003,
    desc: "TABONTABON"
  },
  {
    id: 1004,
    desc: "TACLOBAN CITY (Capital)"
  },
  {
    id: 1005,
    desc: "TANAUAN"
  },
  {
    id: 1006,
    desc: "TOLOSA"
  },
  {
    id: 1007,
    desc: "TUNGA"
  },
  {
    id: 1008,
    desc: "VILLABA"
  },
  {
    id: 1009,
    desc: "ALLEN"
  },
  {
    id: 1010,
    desc: "BIRI"
  },
  {
    id: 1011,
    desc: "BOBON"
  },
  {
    id: 1012,
    desc: "CAPUL"
  },
  {
    id: 1013,
    desc: "CATARMAN (Capital)"
  },
  {
    id: 1014,
    desc: "CATUBIG"
  },
  {
    id: 1015,
    desc: "GAMAY"
  },
  {
    id: 1016,
    desc: "LAOANG"
  },
  {
    id: 1017,
    desc: "LAPINIG"
  },
  {
    id: 1018,
    desc: "LAS NAVAS"
  },
  {
    id: 1019,
    desc: "LAVEZARES"
  },
  {
    id: 1020,
    desc: "MAPANAS"
  },
  {
    id: 1021,
    desc: "MONDRAGON"
  },
  {
    id: 1022,
    desc: "PALAPAG"
  },
  {
    id: 1023,
    desc: "PAMBUJAN"
  },
  {
    id: 1028,
    desc: "SAN ROQUE"
  },
  {
    id: 1030,
    desc: "SILVINO LOBOS"
  },
  {
    id: 1032,
    desc: "LOPE DE VEGA"
  },
  {
    id: 1033,
    desc: "ALMAGRO"
  },
  {
    id: 1034,
    desc: "BASEY"
  },
  {
    id: 1035,
    desc: "CALBAYOG CITY"
  },
  {
    id: 1036,
    desc: "CALBIGA"
  },
  {
    id: 1037,
    desc: "CATBALOGAN CITY (Capital)"
  },
  {
    id: 1038,
    desc: "DARAM"
  },
  {
    id: 1039,
    desc: "GANDARA"
  },
  {
    id: 1040,
    desc: "HINABANGAN"
  },
  {
    id: 1041,
    desc: "JIABONG"
  },
  {
    id: 1042,
    desc: "MARABUT"
  },
  {
    id: 1043,
    desc: "MATUGUINAO"
  },
  {
    id: 1044,
    desc: "MOTIONG"
  },
  {
    id: 1045,
    desc: "PINABACDAO"
  },
  {
    id: 1046,
    desc: "SAN JOSE DE BUAN"
  },
  {
    id: 1047,
    desc: "SAN SEBASTIAN"
  },
  {
    id: 1048,
    desc: "SANTA MARGARITA"
  },
  {
    id: 1050,
    desc: "SANTO NIÑO"
  },
  {
    id: 1051,
    desc: "TALALORA"
  },
  {
    id: 1052,
    desc: "TARANGNAN"
  },
  {
    id: 1053,
    desc: "VILLAREAL"
  },
  {
    id: 1054,
    desc: "PARANAS (WRIGHT)"
  },
  {
    id: 1055,
    desc: "ZUMARRAGA"
  },
  {
    id: 1056,
    desc: "TAGAPUL-AN"
  },
  {
    id: 1057,
    desc: "SAN JORGE"
  },
  {
    id: 1058,
    desc: "PAGSANGHAN"
  },
  {
    id: 1059,
    desc: "ANAHAWAN"
  },
  {
    id: 1060,
    desc: "BONTOC"
  },
  {
    id: 1061,
    desc: "HINUNANGAN"
  },
  {
    id: 1062,
    desc: "HINUNDAYAN"
  },
  {
    id: 1063,
    desc: "LIBAGON"
  },
  {
    id: 1065,
    desc: "MAASIN CITY (Capital)"
  },
  {
    id: 1066,
    desc: "MACROHON"
  },
  {
    id: 1067,
    desc: "MALITBOG"
  },
  {
    id: 1069,
    desc: "PINTUYAN"
  },
  {
    id: 1070,
    desc: "SAINT BERNARD"
  },
  {
    id: 1072,
    desc: "SAN JUAN (CABALIAN)"
  },
  {
    id: 1073,
    desc: "SAN RICARDO"
  },
  {
    id: 1074,
    desc: "SILAGO"
  },
  {
    id: 1076,
    desc: "TOMAS OPPUS"
  },
  {
    id: 1077,
    desc: "LIMASAWA"
  },
  {
    id: 1078,
    desc: "ALMERIA"
  },
  {
    id: 1079,
    desc: "BILIRAN"
  },
  {
    id: 1080,
    desc: "CABUCGAYAN"
  },
  {
    id: 1081,
    desc: "CAIBIRAN"
  },
  {
    id: 1082,
    desc: "CULABA"
  },
  {
    id: 1083,
    desc: "KAWAYAN"
  },
  {
    id: 1084,
    desc: "MARIPIPI"
  },
  {
    id: 1085,
    desc: "NAVAL (Capital)"
  },
  {
    id: 1086,
    desc: "DAPITAN CITY"
  },
  {
    id: 1087,
    desc: "DIPOLOG CITY (Capital)"
  },
  {
    id: 1088,
    desc: "KATIPUNAN"
  },
  {
    id: 1090,
    desc: "LABASON"
  },
  {
    id: 1091,
    desc: "LILOY"
  },
  {
    id: 1092,
    desc: "MANUKAN"
  },
  {
    id: 1093,
    desc: "MUTIA"
  },
  {
    id: 1094,
    desc: "PIÑAN (NEW PIÑAN)"
  },
  {
    id: 1095,
    desc: "POLANCO"
  },
  {
    id: 1096,
    desc: "PRES. MANUEL A. ROXAS"
  },
  {
    id: 1098,
    desc: "SALUG"
  },
  {
    id: 1099,
    desc: "SERGIO OSMEÑA SR."
  },
  {
    id: 1100,
    desc: "SIAYAN"
  },
  {
    id: 1101,
    desc: "SIBUCO"
  },
  {
    id: 1102,
    desc: "SIBUTAD"
  },
  {
    id: 1103,
    desc: "SINDANGAN"
  },
  {
    id: 1104,
    desc: "SIOCON"
  },
  {
    id: 1105,
    desc: "SIRAWAI"
  },
  {
    id: 1106,
    desc: "TAMPILISAN"
  },
  {
    id: 1107,
    desc: "JOSE DALMAN (PONOT)"
  },
  {
    id: 1108,
    desc: "GUTALAC"
  },
  {
    id: 1109,
    desc: "BALIGUIAN"
  },
  {
    id: 1110,
    desc: "GODOD"
  },
  {
    id: 1111,
    desc: "BACUNGAN (Leon T. Postigo)"
  },
  {
    id: 1112,
    desc: "KALAWIT"
  },
  {
    id: 1114,
    desc: "BAYOG"
  },
  {
    id: 1115,
    desc: "DIMATALING"
  },
  {
    id: 1116,
    desc: "DINAS"
  },
  {
    id: 1117,
    desc: "DUMALINAO"
  },
  {
    id: 1118,
    desc: "DUMINGAG"
  },
  {
    id: 1119,
    desc: "KUMALARANG"
  },
  {
    id: 1120,
    desc: "LABANGAN"
  },
  {
    id: 1121,
    desc: "LAPUYAN"
  },
  {
    id: 1122,
    desc: "MAHAYAG"
  },
  {
    id: 1123,
    desc: "MARGOSATUBIG"
  },
  {
    id: 1124,
    desc: "MIDSALIP"
  },
  {
    id: 1125,
    desc: "MOLAVE"
  },
  {
    id: 1126,
    desc: "PAGADIAN CITY (Capital)"
  },
  {
    id: 1127,
    desc: "RAMON MAGSAYSAY (LIARGO)"
  },
  {
    id: 1130,
    desc: "TABINA"
  },
  {
    id: 1131,
    desc: "TAMBULIG"
  },
  {
    id: 1132,
    desc: "TUKURAN"
  },
  {
    id: 1133,
    desc: "ZAMBOANGA CITY"
  },
  {
    id: 1134,
    desc: "LAKEWOOD"
  },
  {
    id: 1135,
    desc: "JOSEFINA"
  },
  {
    id: 1137,
    desc: "SOMINOT (DON MARIANO MARCOS)"
  },
  {
    id: 1138,
    desc: "VINCENZO A. SAGUN"
  },
  {
    id: 1139,
    desc: "GUIPOS"
  },
  {
    id: 1140,
    desc: "TIGBAO"
  },
  {
    id: 1142,
    desc: "BUUG"
  },
  {
    id: 1143,
    desc: "DIPLAHAN"
  },
  {
    id: 1144,
    desc: "IMELDA"
  },
  {
    id: 1145,
    desc: "IPIL (Capital)"
  },
  {
    id: 1146,
    desc: "KABASALAN"
  },
  {
    id: 1147,
    desc: "MABUHAY"
  },
  {
    id: 1148,
    desc: "MALANGAS"
  },
  {
    id: 1149,
    desc: "NAGA"
  },
  {
    id: 1150,
    desc: "OLUTANGA"
  },
  {
    id: 1151,
    desc: "PAYAO"
  },
  {
    id: 1152,
    desc: "ROSELLER LIM"
  },
  {
    id: 1153,
    desc: "SIAY"
  },
  {
    id: 1154,
    desc: "TALUSAN"
  },
  {
    id: 1155,
    desc: "TITAY"
  },
  {
    id: 1156,
    desc: "TUNGAWAN"
  },
  {
    id: 1157,
    desc: "ISABELA CITY"
  },
  {
    id: 1158,
    desc: "BAUNGON"
  },
  {
    id: 1159,
    desc: "DAMULOG"
  },
  {
    id: 1160,
    desc: "DANGCAGAN"
  },
  {
    id: 1161,
    desc: "DON CARLOS"
  },
  {
    id: 1162,
    desc: "IMPASUG-ONG"
  },
  {
    id: 1163,
    desc: "KADINGILAN"
  },
  {
    id: 1164,
    desc: "KALILANGAN"
  },
  {
    id: 1165,
    desc: "KIBAWE"
  },
  {
    id: 1166,
    desc: "KITAOTAO"
  },
  {
    id: 1167,
    desc: "LANTAPAN"
  },
  {
    id: 1168,
    desc: "LIBONA"
  },
  {
    id: 1169,
    desc: "MALAYBALAY CITY (Capital)"
  },
  {
    id: 1171,
    desc: "MANOLO FORTICH"
  },
  {
    id: 1172,
    desc: "MARAMAG"
  },
  {
    id: 1173,
    desc: "PANGANTUCAN"
  },
  {
    id: 1176,
    desc: "SUMILAO"
  },
  {
    id: 1177,
    desc: "TALAKAG"
  },
  {
    id: 1178,
    desc: "VALENCIA CITY"
  },
  {
    id: 1179,
    desc: "CABANGLASAN"
  },
  {
    id: 1180,
    desc: "CATARMAN"
  },
  {
    id: 1181,
    desc: "GUINSILIBAN"
  },
  {
    id: 1182,
    desc: "MAHINOG"
  },
  {
    id: 1183,
    desc: "MAMBAJAO (Capital)"
  },
  {
    id: 1184,
    desc: "SAGAY"
  },
  {
    id: 1185,
    desc: "BACOLOD"
  },
  {
    id: 1186,
    desc: "BALOI"
  },
  {
    id: 1187,
    desc: "BAROY"
  },
  {
    id: 1188,
    desc: "ILIGAN CITY"
  },
  {
    id: 1189,
    desc: "KAPATAGAN"
  },
  {
    id: 1190,
    desc: "SULTAN NAGA DIMAPORO (KAROMATAN)"
  },
  {
    id: 1191,
    desc: "KAUSWAGAN"
  },
  {
    id: 1192,
    desc: "KOLAMBUGAN"
  },
  {
    id: 1193,
    desc: "LALA"
  },
  {
    id: 1194,
    desc: "LINAMON"
  },
  {
    id: 1196,
    desc: "MAIGO"
  },
  {
    id: 1197,
    desc: "MATUNGAO"
  },
  {
    id: 1198,
    desc: "MUNAI"
  },
  {
    id: 1199,
    desc: "NUNUNGAN"
  },
  {
    id: 1200,
    desc: "PANTAO RAGAT"
  },
  {
    id: 1201,
    desc: "POONA PIAGAPO"
  },
  {
    id: 1202,
    desc: "SALVADOR"
  },
  {
    id: 1203,
    desc: "SAPAD"
  },
  {
    id: 1204,
    desc: "TAGOLOAN"
  },
  {
    id: 1205,
    desc: "TANGCAL"
  },
  {
    id: 1206,
    desc: "TUBOD (Capital)"
  },
  {
    id: 1207,
    desc: "PANTAR"
  },
  {
    id: 1208,
    desc: "ALORAN"
  },
  {
    id: 1209,
    desc: "BALIANGAO"
  },
  {
    id: 1210,
    desc: "BONIFACIO"
  },
  {
    id: 1211,
    desc: "CALAMBA"
  },
  {
    id: 1214,
    desc: "JIMENEZ"
  },
  {
    id: 1215,
    desc: "LOPEZ JAENA"
  },
  {
    id: 1216,
    desc: "OROQUIETA CITY (Capital)"
  },
  {
    id: 1217,
    desc: "OZAMIS CITY"
  },
  {
    id: 1218,
    desc: "PANAON"
  },
  {
    id: 1220,
    desc: "SAPANG DALAGA"
  },
  {
    id: 1221,
    desc: "SINACABAN"
  },
  {
    id: 1222,
    desc: "TANGUB CITY"
  },
  {
    id: 1224,
    desc: "DON VICTORIANO CHIONGBIAN  (DON MARIANO MARCOS)"
  },
  {
    id: 1225,
    desc: "ALUBIJID"
  },
  {
    id: 1226,
    desc: "BALINGASAG"
  },
  {
    id: 1227,
    desc: "BALINGOAN"
  },
  {
    id: 1228,
    desc: "BINUANGAN"
  },
  {
    id: 1229,
    desc: "CAGAYAN DE ORO CITY (Capital)"
  },
  {
    id: 1231,
    desc: "EL CITY SALVADOR"
  },
  {
    id: 1232,
    desc: "GINGOOG CITY"
  },
  {
    id: 1233,
    desc: "GITAGUM"
  },
  {
    id: 1234,
    desc: "INITAO"
  },
  {
    id: 1235,
    desc: "JASAAN"
  },
  {
    id: 1236,
    desc: "KINOGUITAN"
  },
  {
    id: 1237,
    desc: "LAGONGLONG"
  },
  {
    id: 1238,
    desc: "LAGUINDINGAN"
  },
  {
    id: 1240,
    desc: "LUGAIT"
  },
  {
    id: 1241,
    desc: "MAGSAYSAY (LINUGOS)"
  },
  {
    id: 1242,
    desc: "MANTICAO"
  },
  {
    id: 1243,
    desc: "MEDINA"
  },
  {
    id: 1244,
    desc: "NAAWAN"
  },
  {
    id: 1245,
    desc: "OPOL"
  },
  {
    id: 1246,
    desc: "SALAY"
  },
  {
    id: 1247,
    desc: "SUGBONGCOGON"
  },
  {
    id: 1249,
    desc: "TALISAYAN"
  },
  {
    id: 1250,
    desc: "VILLANUEVA"
  },
  {
    id: 1251,
    desc: "ASUNCION (SAUG)"
  },
  {
    id: 1253,
    desc: "KAPALONG"
  },
  {
    id: 1254,
    desc: "NEW CORELLA"
  },
  {
    id: 1255,
    desc: "PANABO CITY"
  },
  {
    id: 1256,
    desc: "ISLAND GARDEN SAMAL CITY"
  },
  {
    id: 1258,
    desc: "TAGUM CITY (Capital)"
  },
  {
    id: 1259,
    desc: "TALAINGOD"
  },
  {
    id: 1260,
    desc: "BRAULIO E. DUJALI"
  },
  {
    id: 1262,
    desc: "BANSALAN"
  },
  {
    id: 1263,
    desc: "DAVAO CITY"
  },
  {
    id: 1264,
    desc: "DIGOS CITY (Capital)"
  },
  {
    id: 1266,
    desc: "KIBLAWAN"
  },
  {
    id: 1268,
    desc: "MALALAG"
  },
  {
    id: 1269,
    desc: "MATANAO"
  },
  {
    id: 1270,
    desc: "PADADA"
  },
  {
    id: 1272,
    desc: "SULOP"
  },
  {
    id: 1273,
    desc: "BAGANGA"
  },
  {
    id: 1274,
    desc: "BANAYBANAY"
  },
  {
    id: 1275,
    desc: "BOSTON"
  },
  {
    id: 1276,
    desc: "CARAGA"
  },
  {
    id: 1277,
    desc: "CATEEL"
  },
  {
    id: 1278,
    desc: "GOVERNOR GENEROSO"
  },
  {
    id: 1279,
    desc: "LUPON"
  },
  {
    id: 1280,
    desc: "MANAY"
  },
  {
    id: 1281,
    desc: "MATI CITY (Capital)"
  },
  {
    id: 1283,
    desc: "TARRAGONA"
  },
  {
    id: 1285,
    desc: "LAAK (SAN VICENTE)"
  },
  {
    id: 1286,
    desc: "MABINI (DOÑA ALICIA)"
  },
  {
    id: 1287,
    desc: "MACO"
  },
  {
    id: 1288,
    desc: "MARAGUSAN (SAN MARIANO)"
  },
  {
    id: 1289,
    desc: "MAWAB"
  },
  {
    id: 1290,
    desc: "MONKAYO"
  },
  {
    id: 1291,
    desc: "MONTEVISTA"
  },
  {
    id: 1292,
    desc: "NABUNTURAN (Capital)"
  },
  {
    id: 1293,
    desc: "NEW BATAAN"
  },
  {
    id: 1294,
    desc: "PANTUKAN"
  },
  {
    id: 1295,
    desc: "DON MARCELINO"
  },
  {
    id: 1296,
    desc: "JOSE ABAD SANTOS (TRINIDAD)"
  },
  {
    id: 1297,
    desc: "MALITA"
  },
  {
    id: 1299,
    desc: "SARANGANI"
  },
  {
    id: 1300,
    desc: "ALAMADA"
  },
  {
    id: 1302,
    desc: "KABACAN"
  },
  {
    id: 1303,
    desc: "KIDAPAWAN CITY (Capital)"
  },
  {
    id: 1304,
    desc: "LIBUNGAN"
  },
  {
    id: 1305,
    desc: "MAGPET"
  },
  {
    id: 1306,
    desc: "MAKILALA"
  },
  {
    id: 1307,
    desc: "MATALAM"
  },
  {
    id: 1308,
    desc: "MIDSAYAP"
  },
  {
    id: 1309,
    desc: "M'LANG"
  },
  {
    id: 1310,
    desc: "PIGKAWAYAN"
  },
  {
    id: 1311,
    desc: "PIKIT"
  },
  {
    id: 1313,
    desc: "TULUNAN"
  },
  {
    id: 1314,
    desc: "ANTIPAS"
  },
  {
    id: 1315,
    desc: "BANISILAN"
  },
  {
    id: 1316,
    desc: "ALEOSAN"
  },
  {
    id: 1317,
    desc: "ARAKAN"
  },
  {
    id: 1319,
    desc: "GENERAL SANTOS CITY (DADIANGAS)"
  },
  {
    id: 1320,
    desc: "KORONADAL CITY (Capital)"
  },
  {
    id: 1321,
    desc: "NORALA"
  },
  {
    id: 1322,
    desc: "POLOMOLOK"
  },
  {
    id: 1323,
    desc: "SURALLAH"
  },
  {
    id: 1324,
    desc: "TAMPAKAN"
  },
  {
    id: 1325,
    desc: "TANTANGAN"
  },
  {
    id: 1326,
    desc: "T'BOLI"
  },
  {
    id: 1327,
    desc: "TUPI"
  },
  {
    id: 1329,
    desc: "LAKE SEBU"
  },
  {
    id: 1330,
    desc: "BAGUMBAYAN"
  },
  {
    id: 1331,
    desc: "COLUMBIO"
  },
  {
    id: 1333,
    desc: "ISULAN (Capital)"
  },
  {
    id: 1334,
    desc: "KALAMANSIG"
  },
  {
    id: 1335,
    desc: "LEBAK"
  },
  {
    id: 1336,
    desc: "LUTAYAN"
  },
  {
    id: 1337,
    desc: "LAMBAYONG (MARIANO MARCOS)"
  },
  {
    id: 1338,
    desc: "PALIMBANG"
  },
  {
    id: 1339,
    desc: "PRESIDENT QUIRINO"
  },
  {
    id: 1340,
    desc: "TACURONG CITY"
  },
  {
    id: 1341,
    desc: "SEN. NINOY AQUINO"
  },
  {
    id: 1342,
    desc: "ALABEL (Capital)"
  },
  {
    id: 1343,
    desc: "GLAN"
  },
  {
    id: 1344,
    desc: "KIAMBA"
  },
  {
    id: 1345,
    desc: "MAASIM"
  },
  {
    id: 1346,
    desc: "MAITUM"
  },
  {
    id: 1347,
    desc: "MALAPATAN"
  },
  {
    id: 1348,
    desc: "MALUNGON"
  },
  {
    id: 1349,
    desc: "COTABATO CITY"
  },
  {
    id: 1350,
    desc: "TONDO I / II"
  },
  {
    id: 1351,
    desc: "BINONDO"
  },
  {
    id: 1352,
    desc: "QUIAPO"
  },
  {
    id: 1357,
    desc: "ERMITA"
  },
  {
    id: 1358,
    desc: "INTRAMUROS"
  },
  {
    id: 1359,
    desc: "MALATE"
  },
  {
    id: 1360,
    desc: "PACO"
  },
  {
    id: 1361,
    desc: "PANDACAN"
  },
  {
    id: 1362,
    desc: "PORT AREA"
  },
  {
    id: 1364,
    desc: "MANDALUYONG CITY"
  },
  {
    id: 1365,
    desc: "MARIKINA CITY"
  },
  {
    id: 1366,
    desc: "PASIG CITY"
  },
  {
    id: 1367,
    desc: "QUEZON CITY"
  },
  {
    id: 1368,
    desc: "SAN JUAN CITY"
  },
  {
    id: 1369,
    desc: "CALOOCAN CITY"
  },
  {
    id: 1370,
    desc: "MALABON CITY"
  },
  {
    id: 1371,
    desc: "NAVOTAS CITY"
  },
  {
    id: 1372,
    desc: "VALENZUELA CITY"
  },
  {
    id: 1373,
    desc: "LAS CITY PIÑAS"
  },
  {
    id: 1374,
    desc: "MAKATI CITY"
  },
  {
    id: 1375,
    desc: "MUNTINLUPA CITY"
  },
  {
    id: 1376,
    desc: "PARAÑAQUE CITY"
  },
  {
    id: 1377,
    desc: "PASAY CITY"
  },
  {
    id: 1378,
    desc: "PATEROS"
  },
  {
    id: 1379,
    desc: "TAGUIG CITY"
  },
  {
    id: 1380,
    desc: "BANGUED (Capital)"
  },
  {
    id: 1381,
    desc: "BOLINEY"
  },
  {
    id: 1382,
    desc: "BUCAY"
  },
  {
    id: 1383,
    desc: "BUCLOC"
  },
  {
    id: 1384,
    desc: "DAGUIOMAN"
  },
  {
    id: 1385,
    desc: "DANGLAS"
  },
  {
    id: 1388,
    desc: "LACUB"
  },
  {
    id: 1389,
    desc: "LAGANGILANG"
  },
  {
    id: 1390,
    desc: "LAGAYAN"
  },
  {
    id: 1391,
    desc: "LANGIDEN"
  },
  {
    id: 1392,
    desc: "LICUAN-BAAY (LICUAN)"
  },
  {
    id: 1393,
    desc: "LUBA"
  },
  {
    id: 1394,
    desc: "MALIBCONG"
  },
  {
    id: 1395,
    desc: "MANABO"
  },
  {
    id: 1396,
    desc: "PEÑARRUBIA"
  },
  {
    id: 1397,
    desc: "PIDIGAN"
  },
  {
    id: 1399,
    desc: "SALLAPADAN"
  },
  {
    id: 1403,
    desc: "TAYUM"
  },
  {
    id: 1404,
    desc: "TINEG"
  },
  {
    id: 1405,
    desc: "TUBO"
  },
  {
    id: 1406,
    desc: "VILLAVICIOSA"
  },
  {
    id: 1407,
    desc: "ATOK"
  },
  {
    id: 1408,
    desc: "BAGUIO CITY"
  },
  {
    id: 1409,
    desc: "BAKUN"
  },
  {
    id: 1410,
    desc: "BOKOD"
  },
  {
    id: 1411,
    desc: "BUGUIAS"
  },
  {
    id: 1412,
    desc: "ITOGON"
  },
  {
    id: 1413,
    desc: "KABAYAN"
  },
  {
    id: 1414,
    desc: "KAPANGAN"
  },
  {
    id: 1415,
    desc: "KIBUNGAN"
  },
  {
    id: 1416,
    desc: "LA TRINIDAD (Capital)"
  },
  {
    id: 1417,
    desc: "MANKAYAN"
  },
  {
    id: 1418,
    desc: "SABLAN"
  },
  {
    id: 1419,
    desc: "TUBA"
  },
  {
    id: 1420,
    desc: "TUBLAY"
  },
  {
    id: 1421,
    desc: "BANAUE"
  },
  {
    id: 1422,
    desc: "HUNGDUAN"
  },
  {
    id: 1423,
    desc: "KIANGAN"
  },
  {
    id: 1424,
    desc: "LAGAWE (Capital)"
  },
  {
    id: 1425,
    desc: "LAMUT"
  },
  {
    id: 1426,
    desc: "MAYOYAO"
  },
  {
    id: 1427,
    desc: "ALFONSO LISTA (POTIA)"
  },
  {
    id: 1428,
    desc: "AGUINALDO"
  },
  {
    id: 1429,
    desc: "HINGYON"
  },
  {
    id: 1430,
    desc: "TINOC"
  },
  {
    id: 1431,
    desc: "ASIPULO"
  },
  {
    id: 1432,
    desc: "BALBALAN"
  },
  {
    id: 1433,
    desc: "LUBUAGAN"
  },
  {
    id: 1434,
    desc: "PASIL"
  },
  {
    id: 1435,
    desc: "PINUKPUK"
  },
  {
    id: 1436,
    desc: "RIZAL (LIWAN)"
  },
  {
    id: 1437,
    desc: "TABUK CITY (Capital)"
  },
  {
    id: 1438,
    desc: "TANUDAN"
  },
  {
    id: 1439,
    desc: "TINGLAYAN"
  },
  {
    id: 1440,
    desc: "BARLIG"
  },
  {
    id: 1441,
    desc: "BAUKO"
  },
  {
    id: 1442,
    desc: "BESAO"
  },
  {
    id: 1443,
    desc: "BONTOC (Capital)"
  },
  {
    id: 1444,
    desc: "NATONIN"
  },
  {
    id: 1445,
    desc: "PARACELIS"
  },
  {
    id: 1446,
    desc: "SABANGAN"
  },
  {
    id: 1447,
    desc: "SADANGA"
  },
  {
    id: 1448,
    desc: "SAGADA"
  },
  {
    id: 1449,
    desc: "TADIAN"
  },
  {
    id: 1450,
    desc: "CALANASAN (BAYAG)"
  },
  {
    id: 1451,
    desc: "CONNER"
  },
  {
    id: 1452,
    desc: "FLORA"
  },
  {
    id: 1453,
    desc: "KABUGAO (Capital)"
  },
  {
    id: 1455,
    desc: "PUDTOL"
  },
  {
    id: 1456,
    desc: "SANTA MARCELA"
  },
  {
    id: 1457,
    desc: "LAMITAN CITY"
  },
  {
    id: 1458,
    desc: "LANTAWAN"
  },
  {
    id: 1459,
    desc: "MALUSO"
  },
  {
    id: 1460,
    desc: "SUMISIP"
  },
  {
    id: 1461,
    desc: "TIPO-TIPO"
  },
  {
    id: 1463,
    desc: "AKBAR"
  },
  {
    id: 1464,
    desc: "AL-BARKA"
  },
  {
    id: 1465,
    desc: "HADJI MOHAMMAD AJUL"
  },
  {
    id: 1466,
    desc: "UNGKAYA PUKAN"
  },
  {
    id: 1467,
    desc: "HADJI MUHTAMAD"
  },
  {
    id: 1468,
    desc: "TABUAN-LASA"
  },
  {
    id: 1469,
    desc: "BACOLOD-KALAWI (BACOLOD GRANDE)"
  },
  {
    id: 1470,
    desc: "BALABAGAN"
  },
  {
    id: 1471,
    desc: "BALINDONG (WATU)"
  },
  {
    id: 1472,
    desc: "BAYANG"
  },
  {
    id: 1473,
    desc: "BINIDAYAN"
  },
  {
    id: 1474,
    desc: "BUBONG"
  },
  {
    id: 1475,
    desc: "BUTIG"
  },
  {
    id: 1476,
    desc: "GANASSI"
  },
  {
    id: 1477,
    desc: "KAPAI"
  },
  {
    id: 1478,
    desc: "LUMBA-BAYABAO (MAGUING)"
  },
  {
    id: 1479,
    desc: "LUMBATAN"
  },
  {
    id: 1480,
    desc: "MADALUM"
  },
  {
    id: 1481,
    desc: "MADAMBA"
  },
  {
    id: 1482,
    desc: "MALABANG"
  },
  {
    id: 1483,
    desc: "MARANTAO"
  },
  {
    id: 1484,
    desc: "MARAWI CITY (Capital)"
  },
  {
    id: 1485,
    desc: "MASIU"
  },
  {
    id: 1486,
    desc: "MULONDO"
  },
  {
    id: 1487,
    desc: "PAGAYAWAN (TATARIKAN)"
  },
  {
    id: 1488,
    desc: "PIAGAPO"
  },
  {
    id: 1489,
    desc: "POONA BAYABAO (GATA)"
  },
  {
    id: 1490,
    desc: "PUALAS"
  },
  {
    id: 1491,
    desc: "DITSAAN-RAMAIN"
  },
  {
    id: 1492,
    desc: "SAGUIARAN"
  },
  {
    id: 1493,
    desc: "TAMPARAN"
  },
  {
    id: 1494,
    desc: "TARAKA"
  },
  {
    id: 1495,
    desc: "TUBARAN"
  },
  {
    id: 1496,
    desc: "TUGAYA"
  },
  {
    id: 1497,
    desc: "WAO"
  },
  {
    id: 1498,
    desc: "MAROGONG"
  },
  {
    id: 1499,
    desc: "CALANOGAS"
  },
  {
    id: 1500,
    desc: "BUADIPOSO-BUNTONG"
  },
  {
    id: 1501,
    desc: "MAGUING"
  },
  {
    id: 1502,
    desc: "PICONG (SULTAN GUMANDER)"
  },
  {
    id: 1503,
    desc: "LUMBAYANAGUE"
  },
  {
    id: 1504,
    desc: "BUMBARAN"
  },
  {
    id: 1505,
    desc: "TAGOLOAN II"
  },
  {
    id: 1507,
    desc: "SULTAN DUMALONDONG"
  },
  {
    id: 1508,
    desc: "LUMBACA-UNAYAN"
  },
  {
    id: 1509,
    desc: "AMPATUAN"
  },
  {
    id: 1510,
    desc: "BULDON"
  },
  {
    id: 1511,
    desc: "BULUAN"
  },
  {
    id: 1512,
    desc: "DATU PAGLAS"
  },
  {
    id: 1513,
    desc: "DATU PIANG"
  },
  {
    id: 1514,
    desc: "DATU ODIN SINSUAT (DINAIG)"
  },
  {
    id: 1515,
    desc: "SHARIFF AGUAK (MAGANOY) (Capital)"
  },
  {
    id: 1516,
    desc: "MATANOG"
  },
  {
    id: 1517,
    desc: "PAGALUNGAN"
  },
  {
    id: 1518,
    desc: "PARANG"
  },
  {
    id: 1519,
    desc: "SULTAN KUDARAT (NULING)"
  },
  {
    id: 1520,
    desc: "SULTAN SA BARONGIS (LAMBAYONG)"
  },
  {
    id: 1521,
    desc: "KABUNTALAN (TUMBAO)"
  },
  {
    id: 1522,
    desc: "UPI"
  },
  {
    id: 1523,
    desc: "TALAYAN"
  },
  {
    id: 1524,
    desc: "SOUTH UPI"
  },
  {
    id: 1525,
    desc: "BARIRA"
  },
  {
    id: 1526,
    desc: "GEN. S. K. PENDATUN"
  },
  {
    id: 1527,
    desc: "MAMASAPANO"
  },
  {
    id: 1528,
    desc: "TALITAY"
  },
  {
    id: 1529,
    desc: "PAGAGAWAN"
  },
  {
    id: 1530,
    desc: "PAGLAT"
  },
  {
    id: 1531,
    desc: "SULTAN MASTURA"
  },
  {
    id: 1532,
    desc: "GUINDULUNGAN"
  },
  {
    id: 1533,
    desc: "DATU SAUDI-AMPATUAN"
  },
  {
    id: 1534,
    desc: "DATU UNSAY"
  },
  {
    id: 1535,
    desc: "DATU ABDULLAH SANGKI"
  },
  {
    id: 1536,
    desc: "RAJAH BUAYAN"
  },
  {
    id: 1537,
    desc: "DATU BLAH T. SINSUAT"
  },
  {
    id: 1538,
    desc: "DATU ANGGAL MIDTIMBANG"
  },
  {
    id: 1539,
    desc: "MANGUDADATU"
  },
  {
    id: 1540,
    desc: "PANDAG"
  },
  {
    id: 1541,
    desc: "NORTHERN KABUNTALAN"
  },
  {
    id: 1542,
    desc: "DATU HOFFER AMPATUAN"
  },
  {
    id: 1543,
    desc: "DATU SALIBO"
  },
  {
    id: 1544,
    desc: "SHARIFF SAYDONA MUSTAPHA"
  },
  {
    id: 1545,
    desc: "INDANAN"
  },
  {
    id: 1546,
    desc: "JOLO (Capital)"
  },
  {
    id: 1547,
    desc: "KALINGALAN CALUANG"
  },
  {
    id: 1548,
    desc: "LUUK"
  },
  {
    id: 1549,
    desc: "MAIMBUNG"
  },
  {
    id: 1550,
    desc: "HADJI PANGLIMA TAHIL (MARUNGGAS)"
  },
  {
    id: 1551,
    desc: "OLD PANAMAO"
  },
  {
    id: 1552,
    desc: "PANGUTARAN"
  },
  {
    id: 1554,
    desc: "PATA"
  },
  {
    id: 1555,
    desc: "PATIKUL"
  },
  {
    id: 1556,
    desc: "SIASI"
  },
  {
    id: 1557,
    desc: "TALIPAO"
  },
  {
    id: 1558,
    desc: "TAPUL"
  },
  {
    id: 1559,
    desc: "TONGKIL"
  },
  {
    id: 1560,
    desc: "PANGLIMA ESTINO (NEW PANAMAO)"
  },
  {
    id: 1561,
    desc: "LUGUS"
  },
  {
    id: 1562,
    desc: "PANDAMI"
  },
  {
    id: 1563,
    desc: "OMAR"
  },
  {
    id: 1564,
    desc: "PANGLIMA SUGALA (BALIMBING)"
  },
  {
    id: 1565,
    desc: "BONGAO (Capital)"
  },
  {
    id: 1566,
    desc: "MAPUN (CAGAYAN DE TAWI-TAWI)"
  },
  {
    id: 1567,
    desc: "SIMUNUL"
  },
  {
    id: 1568,
    desc: "SITANGKAI"
  },
  {
    id: 1569,
    desc: "SOUTH UBIAN"
  },
  {
    id: 1570,
    desc: "TANDUBAS"
  },
  {
    id: 1571,
    desc: "TURTLE ISLANDS"
  },
  {
    id: 1572,
    desc: "LANGUYAN"
  },
  {
    id: 1573,
    desc: "SAPA-SAPA"
  },
  {
    id: 1574,
    desc: "SIBUTU"
  },
  {
    id: 1576,
    desc: "BUTUAN CITY (Capital)"
  },
  {
    id: 1577,
    desc: "CABADBARAN CITY"
  },
  {
    id: 1579,
    desc: "JABONGA"
  },
  {
    id: 1580,
    desc: "KITCHARAO"
  },
  {
    id: 1581,
    desc: "LAS NIEVES"
  },
  {
    id: 1583,
    desc: "NASIPIT"
  },
  {
    id: 1585,
    desc: "TUBAY"
  },
  {
    id: 1586,
    desc: "REMEDIOS T. ROMUALDEZ"
  },
  {
    id: 1587,
    desc: "BAYUGAN CITY"
  },
  {
    id: 1588,
    desc: "BUNAWAN"
  },
  {
    id: 1591,
    desc: "LORETO"
  },
  {
    id: 1592,
    desc: "PROSPERIDAD (Capital)"
  },
  {
    id: 1596,
    desc: "SANTA JOSEFA"
  },
  {
    id: 1597,
    desc: "TALACOGON"
  },
  {
    id: 1598,
    desc: "TRENTO"
  },
  {
    id: 1599,
    desc: "VERUELA"
  },
  {
    id: 1600,
    desc: "SIBAGAT"
  },
  {
    id: 1602,
    desc: "BACUAG"
  },
  {
    id: 1604,
    desc: "CLAVER"
  },
  {
    id: 1605,
    desc: "DAPA"
  },
  {
    id: 1606,
    desc: "DEL CARMEN"
  },
  {
    id: 1608,
    desc: "GIGAQUIT"
  },
  {
    id: 1609,
    desc: "MAINIT"
  },
  {
    id: 1610,
    desc: "MALIMONO"
  },
  {
    id: 1613,
    desc: "SAN BENITO"
  },
  {
    id: 1614,
    desc: "SAN FRANCISCO (ANAO-AON)"
  },
  {
    id: 1616,
    desc: "SANTA MONICA (SAPAO)"
  },
  {
    id: 1619,
    desc: "SURIGAO CITY (Capital)"
  },
  {
    id: 1620,
    desc: "TAGANA-AN"
  },
  {
    id: 1621,
    desc: "TUBOD"
  },
  {
    id: 1622,
    desc: "BAROBO"
  },
  {
    id: 1623,
    desc: "BAYABAS"
  },
  {
    id: 1624,
    desc: "BISLIG CITY"
  },
  {
    id: 1625,
    desc: "CAGWAIT"
  },
  {
    id: 1626,
    desc: "CANTILAN"
  },
  {
    id: 1628,
    desc: "CARRASCAL"
  },
  {
    id: 1630,
    desc: "HINATUAN"
  },
  {
    id: 1631,
    desc: "LANUZA"
  },
  {
    id: 1632,
    desc: "LIANGA"
  },
  {
    id: 1633,
    desc: "LINGIG"
  },
  {
    id: 1634,
    desc: "MADRID"
  },
  {
    id: 1635,
    desc: "MARIHATAG"
  },
  {
    id: 1638,
    desc: "TAGBINA"
  },
  {
    id: 1639,
    desc: "TAGO"
  },
  {
    id: 1640,
    desc: "TANDAG CITY (Capital)"
  },
  {
    id: 1641,
    desc: "BASILISA (RIZAL)"
  },
  {
    id: 1642,
    desc: "CAGDIANAO"
  },
  {
    id: 1643,
    desc: "DINAGAT"
  },
  {
    id: 1644,
    desc: "LIBJO (ALBOR)"
  },
  {
    id: 1647,
    desc: "TUBAJON"
  }
];

export default cities;
