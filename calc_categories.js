//カテゴリー一覧:最後のデータはcsvテーブル用(選択不可)
var Categories_kokusei_2020 = [{name: "population", label: "人口・人口増減・面積", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {}
]}, {name: "house", label: "世帯数", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "HOU_INCREASE", label:"世帯増加数(世帯)", func:"sum", args:["HOU_INCREASE"], noprop:true, desc:"前回調査(5年前)からの世帯増加数。"},
  {name: "hou_increaseR", label:"世帯増加率(%)", func:"incr_rate", args:["HOU_INCREASE", "HOUSE"], prec:1, desc:"世帯増加数を前回調査時世帯数で割ったもの。"},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:2, desc:"人口を世帯数で割ったもの。"},
  {}
]}, {name: "did", label: "人口集中地区(DID)", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"], desc:"人口集中地区(DID)内に居住している人の数。"},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1, desc:"DID人口を総人口で割ったもの。"}
]}, {name: "age", label: "年齢別人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1, desc:"15歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1, desc:"15歳以上65歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1, desc:"65歳以上の人口を総人口で割ったもの。総人口には年齢不詳を含む。"}
]}, {name: "age_pie", label: "年齢別人口【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "POP_U15", label:"15歳未満人口", color:"#80acff", func:"sum", args:["POP_U15"]},
  {name: "POP_O15", label:"15歳～64歳人口", color:"#e6de73", func:"sum", args:["POP_O15"]},
  {name: "POP_O65", label:"65歳以上人口", color:"#de7571", func:"sum", args:["POP_O65"]},
  {name: "other", label:"年齢不詳", color:"#b8b8b8", func:"pie_other", args:["POPULATION", "POP_U15", "POP_O15", "POP_O65"]}
]}, {name: "foreigner", label: "外国人人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口割合(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2, desc:"総人口に占める外国人人口の割合。総人口には国籍不詳を含む。"},
  {}
]}, {name: "csv", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"]},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "HOU_INCREASE", label:"世帯増加数(世帯)", func:"sum", args:["HOU_INCREASE"]},
  {name: "hou_increaseR", label:"世帯増加率(%)", func:"incr_rate", args:["HOU_INCREASE", "HOUSE"], prec:1},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:1},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"]},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口比率(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2}
]}];

var Categories_kokusei_old = [{name: "population", label: "人口・人口増減・面積", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {}
]}, {name: "house", label: "世帯数", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "HOU_INCREASE", label:"世帯増加数(世帯)", func:"sum", args:["HOU_INCREASE"], noprop:true, desc:"前回調査(5年前)からの世帯増加数。"},
  {name: "hou_increaseR", label:"世帯増加率(%)", func:"incr_rate", args:["HOU_INCREASE", "HOUSE"], prec:1, desc:"世帯増加数を前回調査時世帯数で割ったもの。"},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:2, desc:"人口を世帯数で割ったもの。"},
  {}
]}, {name: "age", label: "年齢別人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1, desc:"15歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1, desc:"15歳以上65歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1, desc:"65歳以上の人口を総人口で割ったもの。総人口には年齢不詳を含む。"}
]}, {name: "age_pie", label: "年齢別人口【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "POP_U15", label:"15歳未満人口", color:"#80acff", func:"sum", args:["POP_U15"]},
  {name: "POP_O15", label:"15歳～64歳人口", color:"#e6de73", func:"sum", args:["POP_O15"]},
  {name: "POP_O65", label:"65歳以上人口", color:"#de7571", func:"sum", args:["POP_O65"]},
  {name: "other", label:"年齢不詳", color:"#b8b8b8", func:"pie_other", args:["POPULATION", "POP_U15", "POP_O15", "POP_O65"]}
]}, {name: "csv", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"]},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "HOU_INCREASE", label:"世帯増加数(世帯)", func:"sum", args:["HOU_INCREASE"]},
  {name: "hou_increaseR", label:"世帯増加率(%)", func:"incr_rate", args:["HOU_INCREASE", "HOUSE"], prec:1},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:1},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1},
]}];

var Categories_kokusei_2015 = [{name: "population", label: "人口・人口増減・面積", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {}
]}, {name: "house", label: "世帯数", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "HOU_INCREASE", label:"世帯増加数(世帯)", func:"sum", args:["HOU_INCREASE"], noprop:true, desc:"前回調査(5年前)からの世帯増加数。"},
  {name: "hou_increaseR", label:"世帯増加率(%)", func:"incr_rate", args:["HOU_INCREASE", "HOUSE"], prec:1, desc:"世帯増加数を前回調査時世帯数で割ったもの。"},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:2, desc:"人口を世帯数で割ったもの。"},
  {}
]}, {name: "did", label: "人口集中地区(DID)", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"], desc:"人口集中地区(DID)内に居住している人の数。"},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1, desc:"DID人口を総人口で割ったもの。"}
]}, {name: "age", label: "年齢別人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1, desc:"15歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1, desc:"15歳以上65歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1, desc:"65歳以上の人口を総人口で割ったもの。総人口には年齢不詳を含む。"}
]}, {name: "age_pie", label: "年齢別人口【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "POP_U15", label:"15歳未満人口", color:"#80acff", func:"sum", args:["POP_U15"]},
  {name: "POP_O15", label:"15歳～64歳人口", color:"#e6de73", func:"sum", args:["POP_O15"]},
  {name: "POP_O65", label:"65歳以上人口", color:"#de7571", func:"sum", args:["POP_O65"]},
  {name: "other", label:"年齢不詳", color:"#b8b8b8", func:"pie_other", args:["POPULATION", "POP_U15", "POP_O15", "POP_O65"]}
]}, {name: "foreigner", label: "外国人人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口割合(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2, desc:"総人口に占める外国人人口の割合。総人口には国籍不詳を含む。"},
  {}
]}, {name: "daytime", label: "昼夜間人口", data:[
  {name: "POPULATION", label:"夜間人口(人)", func:"sum", args:["POPULATION"], desc:"当該市区町村に居住している人の数。すなわち人口と同値。"},
  {name: "DAYTIME", label:"昼間人口(人)", func:"sum", args:["DAYTIME"], desc:"当該市区町村に通勤・通学しているものと当該市区町村に居住し通勤も通学もしていないものの合計。"},
  {name: "daytimeR", label:"昼夜間人口比率(%)", func:"rate", args:["DAYTIME", "POPULATION"], prec:1, desc:"昼間人口を夜間人口で割ったもの。"},
  {}
]}, {name: "industry", label:"産業別従業者数(三分類)", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "WORKER", label:"15歳以上の従業者数(人)", func:"sum", args:["WORKER"], desc:"当該市区町村で従業している、15歳以上の従業者の数。"},
  {name: "1ST_IND", label:"第一次産業従業者数(人)", func:"sum", args:["1ST_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第一次産業(産業大分類のうちA, B)に分類される産業の従業者数。"},
  {name: "1st_indR", label:"第一次産業従業者割合(%)", func:"rate", args:["1ST_IND", "WORKER"], prec:1, desc:"第一次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"},
  {name: "2ND_IND", label:"第二次産業従業者数(人)", func:"sum", args:["2ND_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第二次産業(産業大分類のうちC～E)に分類される産業の従業者数。"},
  {name: "2nd_indR", label:"第二次産業従業者割合(%)", func:"rate", args:["2ND_IND", "WORKER"], prec:1, desc:"第二次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"},
  {name: "3RD_IND", label:"第三次産業従業者数(人)", func:"sum", args:["3RD_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第三次産業(産業大分類のうちF～S)に分類される産業の従業者数。"},
  {name: "3rd_indR", label:"第三次産業従業者割合(%)", func:"rate", args:["3RD_IND", "WORKER"], prec:1, desc:"第三次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"}
]}, {name: "industry_pie", label:"産業別従業者数(三分類)【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "1ST_IND", label:"第一次産業従業者数", color:"#72b578", func:"sum", args:["1ST_IND"]},
  {name: "2ND_IND", label:"第二次産業従業者数", color:"#e88f89", func:"sum", args:["2ND_IND"]},
  {name: "3RD_IND", label:"第三次産業従業者数", color:"#6c9bd9", func:"sum", args:["3RD_IND"]},
  {name: "other", label:"分類不能の産業", color:"#b8b8b8", func:"pie_other", args:["WORKER", "1ST_IND", "2ND_IND", "3RD_IND"]}
]}, {name: "industry2_pie", label:"産業別従業者数(大分類)【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "IND_AGRI", label:"農林業", color:"#72b578", func:"sum", args:["IND_AGRI"]},
  {name: "IND_FISH", label:"漁業", color:"#2f3098", func:"sum", args:["IND_FISH"]},
  {name: "IND_MINI", label:"鉱業等", color:"#737373", func:"sum", args:["IND_MINI"]},
  {name: "IND_CONS", label:"建設業", color:"#785237", func:"sum", args:["IND_CONS"]},
  {name: "IND_MANU", label:"製造業", color:"#5ea3ff", func:"sum", args:["IND_MANU"]},
  {name: "IND_SUPP", label:"電気等供給業", color:"#fdff91", func:"sum", args:["IND_SUPP"]},
  {name: "IND_INFO", label:"情報通信業", color:"#ffb0fe", func:"sum", args:["IND_INFO"]},
  {name: "IND_TRAN", label:"運輸業", color:"#39613c", func:"sum", args:["IND_TRAN"]},
  {name: "IND_SALE", label:"卸・小売業", color:"#ff6363", func:"sum", args:["IND_SALE"]},
  {name: "IND_FINA", label:"金融・保険業", color:"#9a9900", func:"sum", args:["IND_FINA"]},
  {name: "IND_REAL", label:"不動産業", color:"#82ffec", func:"sum", args:["IND_REAL"]},
  {name: "IND_RESE", label:"学術研究業", color:"#6945b5", func:"sum", args:["IND_RESE"]},
  {name: "IND_ACCO", label:"宿泊・飲食業", color:"#d4d200", func:"sum", args:["IND_ACCO"]},
  {name: "IND_LIVI", label:"生活関連サービス業", color:"#bbccff", func:"sum", args:["IND_LIVI"]},
  {name: "IND_EDUC", label:"教育", color:"#b7ff7e", func:"sum", args:["IND_EDUC"]},
  {name: "IND_MEDI", label:"医療・福祉", color:"#ffd9eb", func:"sum", args:["IND_MEDI"]},
  {name: "IND_COMP", label:"郵便局・協同組合", color:"#ad2d2d", func:"sum", args:["IND_COMP"]},
  {name: "IND_OSERV", label:"その他のサービス業", color:"#93c8d1", func:"sum", args:["IND_OSERV"]},
  {name: "IND_GOVE", label:"公務", color:"#ff79cd", func:"sum", args:["IND_GOVE"]},
  {name: "IND_OTHER", label:"分類不能の産業", color:"#b8b8b8", func:"sum", args:["IND_OTHER"]}
]}, {name: "csv", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"]},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "HOU_INCREASE", label:"世帯増加数(世帯)", func:"sum", args:["HOU_INCREASE"]},
  {name: "hou_increaseR", label:"世帯増加率(%)", func:"incr_rate", args:["HOU_INCREASE", "HOUSE"], prec:1},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:1},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"]},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口比率(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2},
  {name: "DAYTIME", label:"昼間人口(人)", func:"sum", args:["DAYTIME"]},
  {name: "daytimeR", label:"昼夜間人口比率(%)", func:"rate", args:["DAYTIME", "POPULATION"], prec:1},
  {name: "WORKER", label:"15歳以上の従業者数(人)", func:"sum", args:["WORKER"]},
  {name: "1ST_IND", label:"第一次産業従業者数(人)", func:"sum", args:["1ST_IND"]},
  {name: "1st_indR", label:"第一次産業従業者割合(%)", func:"rate", args:["1ST_IND", "WORKER"], prec:1},
  {name: "2ND_IND", label:"第二次産業従業者数(人)", func:"sum", args:["2ND_IND"]},
  {name: "2nd_indR", label:"第二次産業従業者割合(%)", func:"rate", args:["2ND_IND", "WORKER"], prec:1},
  {name: "3RD_IND", label:"第三次産業従業者数(人)", func:"sum", args:["3RD_IND"]},
  {name: "3rd_indR", label:"第三次産業従業者割合(%)", func:"rate", args:["3RD_IND", "WORKER"], prec:1},
  {name: "IND_AGRI", label:"農林業(人)", func:"sum", args:["IND_AGRI"]},
  {name: "IND_FISH", label:"漁業(人)", func:"sum", args:["IND_FISH"]},
  {name: "IND_MINI", label:"鉱業等(人)", func:"sum", args:["IND_MINI"]},
  {name: "IND_CONS", label:"建設業(人)", func:"sum", args:["IND_CONS"]},
  {name: "IND_MANU", label:"製造業(人)", func:"sum", args:["IND_MANU"]},
  {name: "IND_SUPP", label:"電気等供給業(人)", func:"sum", args:["IND_SUPP"]},
  {name: "IND_INFO", label:"情報通信業(人)", func:"sum", args:["IND_INFO"]},
  {name: "IND_TRAN", label:"運輸業(人)", func:"sum", args:["IND_TRAN"]},
  {name: "IND_SALE", label:"卸・小売業(人)", func:"sum", args:["IND_SALE"]},
  {name: "IND_FINA", label:"金融・保険業(人)", func:"sum", args:["IND_FINA"]},
  {name: "IND_REAL", label:"不動産業(人)", func:"sum", args:["IND_REAL"]},
  {name: "IND_RESE", label:"学術研究業(人)", func:"sum", args:["IND_RESE"]},
  {name: "IND_ACCO", label:"宿泊・飲食業(人)", func:"sum", args:["IND_ACCO"]},
  {name: "IND_LIVI", label:"生活関連サービス業(人)", func:"sum", args:["IND_LIVI"]},
  {name: "IND_EDUC", label:"教育(人)", func:"sum", args:["IND_EDUC"]},
  {name: "IND_MEDI", label:"医療・福祉(人)", func:"sum", args:["IND_MEDI"]},
  {name: "IND_COMP", label:"郵便局・協同組合(人)", func:"sum", args:["IND_COMP"]},
  {name: "IND_OSERV", label:"その他のサービス業(人)", func:"sum", args:["IND_OSERV"]},
  {name: "IND_GOVE", label:"公務(人)", func:"sum", args:["IND_GOVE"]},
  {name: "IND_OTHER", label:"分類不能の産業(人)", func:"sum", args:["IND_OTHER"]}
]}];

var Categories_kokusei_2005 = [{name: "population", label: "人口・人口増減・面積", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {}
]}, {name: "house", label: "世帯数", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:2, desc:"人口を世帯数で割ったもの。"},
  {}
]}, {name: "did", label: "人口集中地区(DID)", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"], desc:"人口集中地区(DID)内に居住している人の数。"},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1, desc:"DID人口を総人口で割ったもの。"}
]}, {name: "age", label: "年齢別人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1, desc:"15歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1, desc:"15歳以上65歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1, desc:"65歳以上の人口を総人口で割ったもの。総人口には年齢不詳を含む。"}
]}, {name: "age_pie", label: "年齢別人口【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "POP_U15", label:"15歳未満人口", color:"#80acff", func:"sum", args:["POP_U15"]},
  {name: "POP_O15", label:"15歳～64歳人口", color:"#e6de73", func:"sum", args:["POP_O15"]},
  {name: "POP_O65", label:"65歳以上人口", color:"#de7571", func:"sum", args:["POP_O65"]},
  {name: "other", label:"年齢不詳", color:"#b8b8b8", func:"pie_other", args:["POPULATION", "POP_U15", "POP_O15", "POP_O65"]}
]}, {name: "foreigner", label: "外国人人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口割合(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2, desc:"総人口に占める外国人人口の割合。総人口には国籍不詳を含む。"},
  {}
]}, {name: "daytime", label: "昼夜間人口", data:[
  {name: "POPULATION", label:"夜間人口(人)", func:"sum", args:["POPULATION"], desc:"当該市区町村に居住している人の数。すなわち人口と同値。"},
  {name: "DAYTIME", label:"昼間人口(人)", func:"sum", args:["DAYTIME"], desc:"当該市区町村に通勤・通学しているものと当該市区町村に居住し通勤も通学もしていないものの合計。"},
  {name: "daytimeR", label:"昼夜間人口比率(%)", func:"rate", args:["DAYTIME", "POPULATION"], prec:1, desc:"昼間人口を夜間人口で割ったもの。"},
  {}
]}, {name: "industry", label:"産業別従業者数(三分類)", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "WORKER", label:"15歳以上の従業者数(人)", func:"sum", args:["WORKER"], desc:"当該市区町村で従業している、15歳以上の従業者の数。"},
  {name: "1ST_IND", label:"第一次産業従業者数(人)", func:"sum", args:["1ST_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第一次産業(産業大分類のうちA, B)に分類される産業の従業者数。"},
  {name: "1st_indR", label:"第一次産業従業者割合(%)", func:"rate", args:["1ST_IND", "WORKER"], prec:1, desc:"第一次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"},
  {name: "2ND_IND", label:"第二次産業従業者数(人)", func:"sum", args:["2ND_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第二次産業(産業大分類のうちC～E)に分類される産業の従業者数。"},
  {name: "2nd_indR", label:"第二次産業従業者割合(%)", func:"rate", args:["2ND_IND", "WORKER"], prec:1, desc:"第二次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"},
  {name: "3RD_IND", label:"第三次産業従業者数(人)", func:"sum", args:["3RD_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第三次産業(産業大分類のうちF～S)に分類される産業の従業者数。"},
  {name: "3rd_indR", label:"第三次産業従業者割合(%)", func:"rate", args:["3RD_IND", "WORKER"], prec:1, desc:"第三次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"}
]}, {name: "industry_pie", label:"産業別従業者数(三分類)【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "1ST_IND", label:"第一次産業従業者数", color:"#72b578", func:"sum", args:["1ST_IND"]},
  {name: "2ND_IND", label:"第二次産業従業者数", color:"#e88f89", func:"sum", args:["2ND_IND"]},
  {name: "3RD_IND", label:"第三次産業従業者数", color:"#6c9bd9", func:"sum", args:["3RD_IND"]},
  {name: "other", label:"分類不能の産業", color:"#b8b8b8", func:"pie_other", args:["WORKER", "1ST_IND", "2ND_IND", "3RD_IND"]}
]}, {name: "industry2_pie", label:"産業別従業者数(大分類)【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "IND_AGRI", label:"農林業", color:"#72b578", func:"sum", args:["IND_AGRI"]},
  {name: "IND_FISH", label:"漁業", color:"#2f3098", func:"sum", args:["IND_FISH"]},
  {name: "IND_MINI", label:"鉱業等", color:"#737373", func:"sum", args:["IND_MINI"]},
  {name: "IND_CONS", label:"建設業", color:"#785237", func:"sum", args:["IND_CONS"]},
  {name: "IND_MANU", label:"製造業", color:"#5ea3ff", func:"sum", args:["IND_MANU"]},
  {name: "IND_SUPP", label:"電気等供給業", color:"#fdff91", func:"sum", args:["IND_SUPP"]},
  {name: "IND_INFO", label:"情報通信業", color:"#ffb0fe", func:"sum", args:["IND_INFO"]},
  {name: "IND_TRAN", label:"運輸業", color:"#39613c", func:"sum", args:["IND_TRAN"]},
  {name: "IND_SALE", label:"卸・小売業", color:"#ff6363", func:"sum", args:["IND_SALE"]},
  {name: "IND_FINA", label:"金融・保険業", color:"#9a9900", func:"sum", args:["IND_FINA"]},
  {name: "IND_REAL", label:"不動産業", color:"#82ffec", func:"sum", args:["IND_REAL"]},
  {name: "IND_ACCO", label:"宿泊・飲食業", color:"#d4d200", func:"sum", args:["IND_ACCO"]},
  {name: "IND_MEDI", label:"医療・福祉", color:"#ffd9eb", func:"sum", args:["IND_MEDI"]},
  {name: "IND_EDUC", label:"教育", color:"#b7ff7e", func:"sum", args:["IND_EDUC"]},
  {name: "IND_COMP", label:"郵便局・協同組合", color:"#ad2d2d", func:"sum", args:["IND_COMP"]},
  {name: "IND_OSERV", label:"その他のサービス業", color:"#93c8d1", func:"sum", args:["IND_OSERV"]},
  {name: "IND_GOVE", label:"公務", color:"#ff79cd", func:"sum", args:["IND_GOVE"]},
  {name: "IND_OTHER", label:"分類不能の産業", color:"#b8b8b8", func:"sum", args:["IND_OTHER"]}
]}, {name: "csv", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"]},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:1},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"]},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口比率(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2},
  {name: "DAYTIME", label:"昼間人口(人)", func:"sum", args:["DAYTIME"]},
  {name: "daytimeR", label:"昼夜間人口比率(%)", func:"rate", args:["DAYTIME", "POPULATION"], prec:1},
  {name: "WORKER", label:"15歳以上の従業者数(人)", func:"sum", args:["WORKER"]},
  {name: "1ST_IND", label:"第一次産業従業者数(人)", func:"sum", args:["1ST_IND"]},
  {name: "1st_indR", label:"第一次産業従業者割合(%)", func:"rate", args:["1ST_IND", "WORKER"], prec:1},
  {name: "2ND_IND", label:"第二次産業従業者数(人)", func:"sum", args:["2ND_IND"]},
  {name: "2nd_indR", label:"第二次産業従業者割合(%)", func:"rate", args:["2ND_IND", "WORKER"], prec:1},
  {name: "3RD_IND", label:"第三次産業従業者数(人)", func:"sum", args:["3RD_IND"]},
  {name: "3rd_indR", label:"第三次産業従業者割合(%)", func:"rate", args:["3RD_IND", "WORKER"], prec:1},
  {name: "IND_AGRI", label:"農林業(人)", func:"sum", args:["IND_AGRI"]},
  {name: "IND_FISH", label:"漁業(人)", func:"sum", args:["IND_FISH"]},
  {name: "IND_MINI", label:"鉱業等(人)", func:"sum", args:["IND_MINI"]},
  {name: "IND_CONS", label:"建設業(人)", func:"sum", args:["IND_CONS"]},
  {name: "IND_MANU", label:"製造業(人)", func:"sum", args:["IND_MANU"]},
  {name: "IND_SUPP", label:"電気等供給業(人)", func:"sum", args:["IND_SUPP"]},
  {name: "IND_INFO", label:"情報通信業(人)", func:"sum", args:["IND_INFO"]},
  {name: "IND_TRAN", label:"運輸業(人)", func:"sum", args:["IND_TRAN"]},
  {name: "IND_SALE", label:"卸・小売業(人)", func:"sum", args:["IND_SALE"]},
  {name: "IND_FINA", label:"金融・保険業(人)", func:"sum", args:["IND_FINA"]},
  {name: "IND_REAL", label:"不動産業(人)", func:"sum", args:["IND_REAL"]},
  {name: "IND_ACCO", label:"宿泊・飲食業(人)", func:"sum", args:["IND_ACCO"]},
  {name: "IND_MEDI", label:"医療・福祉(人)", func:"sum", args:["IND_MEDI"]},
  {name: "IND_EDUC", label:"教育(人)", func:"sum", args:["IND_EDUC"]},
  {name: "IND_COMP", label:"郵便局・協同組合(人)", func:"sum", args:["IND_COMP"]},
  {name: "IND_OSERV", label:"その他のサービス業(人)", func:"sum", args:["IND_OSERV"]},
  {name: "IND_GOVE", label:"公務(人)", func:"sum", args:["IND_GOVE"]},
  {name: "IND_OTHER", label:"分類不能の産業(人)", func:"sum", args:["IND_OTHER"]}
]}];

var Categories_kokusei_2000 = [{name: "population", label: "人口・人口増減・面積", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"], noprop:true, desc:"前回調査(5年前)からの人口増加数。"},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1, desc:"人口増加数を前回調査時人口で割ったもの。"},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {}
]}, {name: "house", label: "世帯数", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:2, desc:"人口を世帯数で割ったもの。"},
  {}
]}, {name: "did", label: "人口集中地区(DID)", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"], desc:"人口集中地区(DID)内に居住している人の数。"},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1, desc:"DID人口を総人口で割ったもの。"}
]}, {name: "age", label: "年齢別人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1, desc:"15歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1, desc:"15歳以上65歳未満の人口を総人口で割ったもの。総人口には年齢不詳を含む。"},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1, desc:"65歳以上の人口を総人口で割ったもの。総人口には年齢不詳を含む。"}
]}, {name: "age_pie", label: "年齢別人口【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "POP_U15", label:"15歳未満人口", color:"#80acff", func:"sum", args:["POP_U15"]},
  {name: "POP_O15", label:"15歳～64歳人口", color:"#e6de73", func:"sum", args:["POP_O15"]},
  {name: "POP_O65", label:"65歳以上人口", color:"#de7571", func:"sum", args:["POP_O65"]},
  {name: "other", label:"年齢不詳", color:"#b8b8b8", func:"pie_other", args:["POPULATION", "POP_U15", "POP_O15", "POP_O65"]}
]}, {name: "foreigner", label: "外国人人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口比率(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2, desc:"総人口に占める外国人人口の割合。総人口には国籍不詳を含む。"},
  {}
]}, {name: "daytime", label: "昼夜間人口", data:[
  {name: "POPULATION", label:"夜間人口(人)", func:"sum", args:["POPULATION"], desc:"当該市区町村に居住している人の数。すなわち人口と同値。"},
  {name: "DAYTIME", label:"昼間人口(人)", func:"sum", args:["DAYTIME"], desc:"当該市区町村に通勤・通学しているものと当該市区町村に居住し通勤も通学もしていないものの合計。"},
  {name: "daytimeR", label:"昼夜間人口比率(%)", func:"rate", args:["DAYTIME", "POPULATION"], prec:1, desc:"昼間人口を夜間人口で割ったもの。"},
  {}
]}, {name: "industry", label:"産業別従業者数(三分類)", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "WORKER", label:"15歳以上の従業者数(人)", func:"sum", args:["WORKER"], desc:"当該市区町村で従業している、15歳以上の従業者の数。"},
  {name: "1ST_IND", label:"第一次産業従業者数(人)", func:"sum", args:["1ST_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第一次産業(産業大分類のうちA, B)に分類される産業の従業者数。"},
  {name: "1st_indR", label:"第一次産業従業者割合(%)", func:"rate", args:["1ST_IND", "WORKER"], prec:1, desc:"第一次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"},
  {name: "2ND_IND", label:"第二次産業従業者数(人)", func:"sum", args:["2ND_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第二次産業(産業大分類のうちC～E)に分類される産業の従業者数。"},
  {name: "2nd_indR", label:"第二次産業従業者割合(%)", func:"rate", args:["2ND_IND", "WORKER"], prec:1, desc:"第二次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"},
  {name: "3RD_IND", label:"第三次産業従業者数(人)", func:"sum", args:["3RD_IND"], desc:"当該市区町村で従業している15歳以上の従業者のうち、第三次産業(産業大分類のうちF～S)に分類される産業の従業者数。"},
  {name: "3rd_indR", label:"第三次産業従業者割合(%)", func:"rate", args:["3RD_IND", "WORKER"], prec:1, desc:"第三次産業従業者数を15歳以上の総従業者数で割ったもの。総従業者数には「分類不能の産業」を含む。"}
]}, {name: "industry_pie", label:"産業別従業者数(三分類)【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "1ST_IND", label:"第一次産業従業者数", color:"#72b578", func:"sum", args:["1ST_IND"]},
  {name: "2ND_IND", label:"第二次産業従業者数", color:"#e88f89", func:"sum", args:["2ND_IND"]},
  {name: "3RD_IND", label:"第三次産業従業者数", color:"#6c9bd9", func:"sum", args:["3RD_IND"]},
  {name: "other", label:"分類不能の産業", color:"#b8b8b8", func:"pie_other", args:["WORKER", "1ST_IND", "2ND_IND", "3RD_IND"]}
]}, {name: "industry2_pie", label:"産業別従業者数(大分類)【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "IND_AGRI", label:"農林業", color:"#72b578", func:"sum", args:["IND_AGRI"]},
  {name: "IND_FISH", label:"漁業", color:"#2f3098", func:"sum", args:["IND_FISH"]},
  {name: "IND_MINI", label:"鉱業等", color:"#737373", func:"sum", args:["IND_MINI"]},
  {name: "IND_CONS", label:"建設業", color:"#785237", func:"sum", args:["IND_CONS"]},
  {name: "IND_MANU", label:"製造業", color:"#5ea3ff", func:"sum", args:["IND_MANU"]},
  {name: "IND_SUPP", label:"電気等供給業", color:"#fdff91", func:"sum", args:["IND_SUPP"]},
  {name: "IND_TRAN", label:"運輸・通信業", color:"#39613c", func:"sum", args:["IND_TRAN"]},
  {name: "IND_SALE", label:"卸・小売業", color:"#ff6363", func:"sum", args:["IND_SALE"]},
  {name: "IND_FINA", label:"金融・保険業", color:"#9a9900", func:"sum", args:["IND_FINA"]},
  {name: "IND_REAL", label:"不動産業", color:"#82ffec", func:"sum", args:["IND_REAL"]},
  {name: "IND_OSERV", label:"サービス業", color:"#93c8d1", func:"sum", args:["IND_SERV"]},
  {name: "IND_GOVE", label:"公務", color:"#ff79cd", func:"sum", args:["IND_GOVE"]},
  {name: "IND_OTHER", label:"分類不能の産業", color:"#b8b8b8", func:"sum", args:["IND_OTHER"]}
]}, {name: "csv", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "AREA", label:"面積(㎢)", func:"sum", args:["AREA"], prec:2},
  {name: "POP_INCREASE", label:"人口増加数(人)", func:"sum", args:["POP_INCREASE"]},
  {name: "pop_increaseR", label:"人口増加率(%)", func:"incr_rate", args:["POP_INCREASE", "POPULATION"], prec:1},
  {name: "density" , label:"人口密度(人/㎢)", func:"div", args:["POPULATION", "AREA"], prec:1},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "HOU_INCREASE", label:"世帯増加数(世帯)", func:"sum", args:["HOU_INCREASE"]},
  {name: "hou_increaseR", label:"世帯増加率(%)", func:"incr_rate", args:["HOU_INCREASE", "HOUSE"], prec:1},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:1},
  {name: "DID_POPULATION", label:"DID人口(人)", func:"sum", args:["DID_POPULATION"]},
  {name: "did_popR", label: "DID人口割合(%)", func:"rate", args:["DID_POPULATION", "POPULATION"], prec:1},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口比率(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2},
  {name: "DAYTIME", label:"昼間人口(人)", func:"sum", args:["DAYTIME"]},
  {name: "daytimeR", label:"昼夜間人口比率(%)", func:"rate", args:["DAYTIME", "POPULATION"], prec:1},
  {name: "WORKER", label:"15歳以上の従業者数(人)", func:"sum", args:["WORKER"]},
  {name: "1ST_IND", label:"第一次産業従業者数(人)", func:"sum", args:["1ST_IND"]},
  {name: "1st_indR", label:"第一次産業従業者割合(%)", func:"rate", args:["1ST_IND", "WORKER"], prec:1},
  {name: "2ND_IND", label:"第二次産業従業者数(人)", func:"sum", args:["2ND_IND"]},
  {name: "2nd_indR", label:"第二次産業従業者割合(%)", func:"rate", args:["2ND_IND", "WORKER"], prec:1},
  {name: "3RD_IND", label:"第三次産業従業者数(人)", func:"sum", args:["3RD_IND"]},
  {name: "3rd_indR", label:"第三次産業従業者割合(%)", func:"rate", args:["3RD_IND", "WORKER"], prec:1},
  {name: "IND_AGRI", label:"農林業(人)", func:"sum", args:["IND_AGRI"]},
  {name: "IND_FISH", label:"漁業(人)", func:"sum", args:["IND_FISH"]},
  {name: "IND_MINI", label:"鉱業等(人)", func:"sum", args:["IND_MINI"]},
  {name: "IND_CONS", label:"建設業(人)", func:"sum", args:["IND_CONS"]},
  {name: "IND_MANU", label:"製造業(人)", func:"sum", args:["IND_MANU"]},
  {name: "IND_SUPP", label:"電気等供給業(人)", func:"sum", args:["IND_SUPP"]},
  {name: "IND_TRAN", label:"運輸・通信業(人)", func:"sum", args:["IND_TRAN"]},
  {name: "IND_SALE", label:"卸・小売業(人)", func:"sum", args:["IND_SALE"]},
  {name: "IND_FINA", label:"金融・保険業(人)", func:"sum", args:["IND_FINA"]},
  {name: "IND_REAL", label:"不動産業(人)", func:"sum", args:["IND_REAL"]},
  {name: "IND_OSERV", label:"サービス業(人)", func:"sum", args:["IND_SERV"]},
  {name: "IND_GOVE", label:"公務(人)", func:"sum", args:["IND_GOVE"]},
  {name: "IND_OTHER", label:"分類不能の産業(人)", func:"sum", args:["IND_OTHER"]}
]}];

let Categories_kokusei2020move = [{name: "move", label: "移動人口", data:[
  {name: "POPULATION", label: "2020年総人口(人)", func: "sum", args:["POPULATION"]},
  {name: "NOMOVE", label: "移動なし(人)", func: "sum", args:["NOMOVE"], desc:"5年前から同じ場所に住んでいる者の数。"},
  {name: "DOMESTIC", label: "市区町村内移動(人)", singleOnly: true,  func: "custom", args:"\domestic"},
  {name: "DOMESTIC", label: "グループ内移動(人)", groupOnly: true,  func: "custom", args:"\domestic", desc:"同一グループ内(同一市区町村内を含む)で移動した者の数。"},
  {name: "MOVEIN_JP", label: "転入(国内)(人)", func: "custom", args:"MOVEIN_JP,-,\domestic", desc:"国内からの転入者数。"},
  {name: "MOVEIN_ABR", label: "転入(海外・移動元不詳)(人)", func: "custom", args:"MOVEIN_ABR,+,MOVEIN_UNK", desc:"海外からの転入者および移動元の市区町村が不詳の者の合計。"},
  {name: "UNKNOWN", label: "移動状況不詳(人)", func: "sum", args:["UNKNOWN"]},
  {name: "MOVEOUT", label: "転出(人)", func: "custom", args:"MOVEOUT_JP,-,\domestic", desc: "5年前にこの市区町村に常住していた者のうち国内の別の市区町村に移動した者の数。"},
  {name: "move_dist", label: "転入超過数(国内)(人)", func: "custom", args:"MOVEIN_JP,-,MOVEOUT_JP", noprop:true, desc: "国内転入者数から国内転出者数を引いたもの。"}
]},{name: "fromto", data:[
  {name: "move", label: "A→B移動人口(人)", func: "custom", args:"\move", desc: "AからBに移動した者の数。"},
  {name: "move_dist", label: "A→B転入超過数(人)", func: "custom", args:"\move,-,\revMove", desc: "AからBの移動者数からBからAの移動者数を引いたもの。"},
  {name: "move_spRA", label: "A転出者に占めるBへの移動者割合(%)", func: "custom", prec: 2, args:"\move,/,MOVEOUT_JP,*,100", ab: "A"},
  {name: "move_spRB", label: "B転入者に占めるAからの移動者割合(%)", func: "custom", prec: 2, args:"\move,/,MOVEIN_JP,*,100", ab: "B"}
]},{name: "csv", data:[
  {name: "POPULATION", label: "2020年総人口", func: "sum", args:["POPULATION"]},
  {name: "NOMOVE", label: "移動なし", func: "sum", args:["NOMOVE"]},
  {name: "DOMESTIC", label: "グループ内移動", func: "custom", args:"\domestic"},
  {name: "MOVEIN_JP", label: "転入(国内)", func: "custom", args:"MOVEIN_JP,-,\domestic"},
  {name: "MOVEIN_ABR", label: "転入(海外・移動元不詳)", func: "custom", args:"MOVEIN_ABR,+,MOVEIN_UNK"},
  {name: "UNKNOWN", label: "移動状況不詳", func: "sum", args:["UNKNOWN"]},
  {name: "MOVEOUT", label: "転出", func: "custom", args:"MOVEOUT_JP,-,\domestic"},
  {name: "move_dist", label: "転入超過数(国内)", func: "custom", args:"MOVEIN_JP,-,MOVEOUT_JP"}
]}];

let Categories_kokusei2020work = [{name: "work", label: "通勤・通学者人口", data:[
  {name: "POPULATION", label: "夜間人口(人)", func: "sum", args:["POPULATION"]},
  {name: "POP_DAY", label: "昼間人口(人)", func: "sum", args:["POP_DAY"]},
  {name: "NOCOMMUTE", label: "通勤なし(人)", func: "sum", args:["NOCOMMUTE"], desc:"従業も通学もしていない者の数。"},
  {name: "DOMESTIC", label: "市区町村内で従業(人)", singleOnly: true, func: "custom", args:"\domestic"},
  {name: "DOMESTIC", label: "グループ内で従業(人)", groupOnly: true, func: "custom", args:"\domestic", desc:"同一グループ内で従業・就学している物の数。(自宅で従業する者を含む)"},
  {name: "WORKOUT", label: "市区町村外への通勤者数(人)", singleOnly: true, func: "custom", args:"COMMUTE_JP,-,\domestic"},
  {name: "WORKOUT", label: "グループ外への通勤者数(人)", groupOnly: true, func: "custom", args:"COMMUTE_JP,-,\domestic", desc: "従業地が海外および不詳の者を除く。"},
  {name: "WORKIN", label: "市区町村外からの通勤者数(人)", singleOnly: true, func: "custom", args:"WORKER,-,\domestic"},
  {name: "WORKIN", label: "グループ外からの通勤者数(人)", groupOnly: true, func: "custom", args:"WORKER,-,\domestic"},
  {name: "UNKNOWN", label: "従業状況不詳(人)", func: "sum", args:["UNKNOWN"]},
  {name: "move_dist", label: "移入超過数(人)", func: "custom", args:"WORKER,-,COMMUTE_JP", noprop:true, desc:"昼間人口から夜間人口を引いたもの。"}
]},{name: "fromto", data:[
  {name: "move", label: "A→B通勤人口(人)", func: "custom", args:"\move", desc:"AからBに通勤・通学している者の数。"},
  {name: "move_dist", label: "A→B通勤超過数(人)", func: "custom", args:"\move,-,\revMove", desc:"AからBへの通勤者数からBからAへの通勤者数を引いたもの。"},
  {name: "move_popRA", label: "A夜間人口に占めるBへの通勤者割合(%)", func: "custom", prec: 2, args:"\move,/,POPULATION,*,100", ab: "A"},
  {name: "move_spRA", label: "A常住労働者に占めるBへの通勤者割合(%)", func: "custom", prec: 2, args:"\move,/,COMMUTE_JP,*,100", ab: "A"},
  {name: "move_popRB", label: "B昼間人口に占めるAからの通勤者割合(%)", func: "custom", prec: 2, args:"\move,/,POP_DAY,*,100", ab: "B"},
  {name: "move_spRB", label: "B従業労働者に占めるAからの通勤者割合(%)", func: "custom", prec: 2, args:"\move,/,WORKER,*,100", ab: "B"}
]},{name: "csv", data:[
  {name: "POPULATION", label: "夜間人口", func: "sum", args:["POPULATION"]},
  {name: "POP_DAY", label: "昼間人口", func: "sum", args:["POP_DAY"]},
  {name: "NOCOMMUTE", label: "通勤なし", func: "sum", args:["NOCOMMUTE"]},
  {name: "DOMESTIC", label: "グループ内で従業", func: "custom", args:"\domestic"},
  {name: "WORKOUT", label: "グループ外への通勤者数", func: "custom", args:"COMMUTE_JP,-,\domestic"},
  {name: "WORKIN", label: "グループ外からの通勤者数", func: "custom", args:"WORKER,-,\domestic"}
]}];

var Categories_juki = [{name: "population", label: "人口・世帯数", data:[
  {name: "POPULATION", label: "人口(人)", func: "sum", args:["POPULATION"], desc:"住民基本台帳による調査年元日の人口。"},
  {name: "AREA", label: "面積(㎢)", func: "sum", args:["AREA"], prec:2, desc:"全国都道府県市区町村別面積調(2021年1月)による。"},
  {name: "density", label: "人口密度(人/㎢)", func: "div", args:["POPULATION", "AREA"], prec:1},
  {},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:2, desc:"人口を世帯数で割ったもの。"}
]}, {name: "incr1", label: "1年間の人口変化", data:[
  {name: "POPULATION", label: "人口(人)", func: "sum", args:["POPULATION"], desc:"住民基本台帳による調査年元日の人口。"},
  {name: "pop_prev1", label: "1年前の人口(人)", func: "custom", args:["POPULATION", "-", "INCR1"]},
  {name: "INCR1", label: "人口増加数(人)", func: "sum", args:["INCR1"], noprop:true},
  {name: "incr1R", label: "人口増加率(%)", func: "incr_rate", args:["INCR1", "POPULATION"], prec:1, desc:"人口増加数を1年前の人口で割ったもの。"},
  {name: "SOC_INCR1", label: "社会増加数(人)", func: "sum", args:["SOC_INCR1"], noprop:true, desc:"転入者数から転出者数を引いたもの(国外を含む)。"},
  {name: "NAT_INCR1", label: "自然増加数(人)", func: "sum", args:["NAT_INCR1"], noprop:true, desc:"出生数から死亡数を引いたもの。"},
  {name: "BIRTH1", label: "出生数(人)", func: "sum", args:["BIRTH1"]},
  {name: "DEATH1", label: "死亡数(人)", func: "sum", args:["DEATH1"]}
]}, {name: "incr5", label: "5年間の人口変化", data:[
  {name: "POPULATION", label: "人口(人)", func: "sum", args:["POPULATION"], desc:"住民基本台帳による調査年元日の人口。"},
  {name: "pop_prev5", label: "5年前の人口(人)", func: "custom", args:["POPULATION", "-", "INCR5"]},
  {name: "INCR5", label: "人口増加数(人)", func: "sum", args:["INCR5"], noprop:true},
  {name: "incr5R", label: "人口増加率(%)", func: "incr_rate", args:["INCR5", "POPULATION"], prec:1, desc:"人口増加数を5年前の人口で割ったもの。"},
  {name: "SOC_INCR5", label: "社会増加数(人)", func: "sum", args:["SOC_INCR5"], noprop:true, desc:"転入者数から転出者数を引いたもの(国外を含む)。"},
  {name: "NAT_INCR5", label: "自然増加数(人)", func: "sum", args:["NAT_INCR5"], noprop:true, desc:"出生数から死亡数を引いたもの。"},
  {name: "BIRTH5", label: "出生数(人)", func: "sum", args:["BIRTH5"]},
  {name: "DEATH5", label: "死亡数(人)", func: "sum", args:["DEATH5"]}
]}, {name: "incr10", label: "10年間の人口変化", data:[
  {name: "POPULATION", label: "人口(人)", func: "sum", args:["POPULATION"], desc:"住民基本台帳による調査年元日の人口。"},
  {name: "pop_prev10", label: "10年前の人口(人)", func: "custom", args:["POPULATION", "-", "INCR10"]},
  {name: "INCR10", label: "人口増加数(人)", func: "sum", args:["INCR10"], noprop:true},
  {name: "incr10R", label: "人口増加率(%)", func: "incr_rate", args:["INCR10", "POPULATION"], prec:1, desc:"人口増加数を10年前の人口で割ったもの。"},
  {name: "SOC_INCR10", label: "社会増加数(人)", func: "sum", args:["SOC_INCR10"], noprop:true, desc:"転入者数から転出者数を引いたもの(国外を含む)。"},
  {name: "NAT_INCR10", label: "自然増加数(人)", func: "sum", args:["NAT_INCR10"], noprop:true, desc:"出生数から死亡数を引いたもの。"},
  {name: "BIRTH10", label: "出生数(人)", func: "sum", args:["BIRTH10"]},
  {name: "DEATH10", label: "死亡数(人)", func: "sum", args:["DEATH10"]}
]},{name: "age", label: "年齢別人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1, desc:"15歳未満の人口を総人口で割ったもの。"},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1, desc:"15歳以上65歳未満の人口を総人口で割ったもの。"},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1, desc:"65歳以上の人口を総人口で割ったもの。"}
]}, {name: "age_pie", label: "年齢別人口【円グラフ表示】", pie: true, unit: "人", data:[
  {name: "POP_U15", label:"15歳未満人口", color:"#80acff", func:"sum", args:["POP_U15"]},
  {name: "POP_O15", label:"15歳～64歳人口", color:"#e6de73", func:"sum", args:["POP_O15"]},
  {name: "POP_O65", label:"65歳以上人口", color:"#de7571", func:"sum", args:["POP_O65"]}
]}, {name: "foreigner", label: "外国人人口", data:[
  {name: "POPULATION", label:"人口(人)", func:"sum", args:["POPULATION"]},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口割合(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2, desc:"総人口に占める外国人人口の割合。"},
  {}
]}, {name: "csv", data: [
  {name: "POPULATION", label: "住基人口(人)", func: "sum", args:["POPULATION"]},
  {name: "AREA", label: "面積(㎢)", func: "sum", args:["AREA"], prec:2},
  {name: "density", label: "人口密度(人/㎢)", func: "div", args:["POPULATION", "AREA"], prec:1},
  {name: "HOUSE", label:"世帯数(世帯)", func:"sum", args:["HOUSE"]},
  {name: "pop/house", label:"一世帯当たりの人員数(人)", func:"div", args:["POPULATION", "HOUSE"], prec:1},
  {name: "pop_prev1", label: "1年前の人口(人)", func: "custom", args:["POPULATION", "-", "INCR1"]},
  {name: "INCR1", label: "1年間の人口増加数(人)", func: "sum", args:["INCR1"], noprop:true},
  {name: "incr1R", label: "1年間の人口増加率(%)", func: "incr_rate", args:["INCR1", "POPULATION"], prec:1},
  {name: "SOC_INCR1", label: "1年間の社会増加数(人)", func: "sum", args:["SOC_INCR1"], noprop:true},
  {name: "NAT_INCR1", label: "1年間の自然増加数(人)", func: "sum", args:["NAT_INCR1"], noprop:true},
  {name: "BIRTH1", label: "1年間の出生数(人)", func: "sum", args:["BIRTH1"]},
  {name: "DEATH1", label: "1年間の死亡数(人)", func: "sum", args:["DEATH1"]},
  {name: "pop_prev5", label: "5年前の人口(人)", func: "custom", args:["POPULATION", "-", "INCR5"]},
  {name: "INCR5", label: "5年間の人口増加数(人)", func: "sum", args:["INCR5"], noprop:true},
  {name: "incr5R", label: "5年間の人口増加率(%)", func: "incr_rate", args:["INCR5", "POPULATION"], prec:1},
  {name: "SOC_INCR5", label: "5年間の社会増加数(人)", func: "sum", args:["SOC_INCR5"], noprop:true},
  {name: "NAT_INCR5", label: "5年間の自然増加数(人)", func: "sum", args:["NAT_INCR5"], noprop:true},
  {name: "BIRTH5", label: "5年間の出生数(人)", func: "sum", args:["BIRTH5"]},
  {name: "DEATH5", label: "5年間の死亡数(人)", func: "sum", args:["DEATH5"]},
  {name: "pop_prev10", label: "10年前の人口(人)", func: "custom", args:["POPULATION", "-", "INCR10"]},
  {name: "INCR10", label: "10年間の人口増加数(人)", func: "sum", args:["INCR10"], noprop:true},
  {name: "incr10R", label: "10年間の人口増加率(%)", func: "incr_rate", args:["INCR10", "POPULATION"], prec:1},
  {name: "SOC_INCR10", label: "10年間の社会増加数(人)", func: "sum", args:["SOC_INCR10"], noprop:true},
  {name: "NAT_INCR10", label: "10年間の自然増加数(人)", func: "sum", args:["NAT_INCR10"], noprop:true},
  {name: "BIRTH10", label: "10年間の出生数(人)", func: "sum", args:["BIRTH10"]},
  {name: "DEATH10", label: "10年間の死亡数(人)", func: "sum", args:["DEATH10"]},
  {name: "POP_U15", label:"15歳未満人口(人)", func:"sum", args:["POP_U15"]},
  {name: "pop_u15R", label:"15歳未満人口割合(%)", func:"rate", args:["POP_U15", "POPULATION"], prec:1},
  {name: "POP_O15", label:"15歳～64歳人口(人)", func:"sum", args:["POP_O15"]},
  {name: "pop_o15R", label:"15歳～64歳人口割合(%)", func:"rate", args:["POP_O15", "POPULATION"], prec:1},
  {name: "POP_O65", label:"65歳以上人口(人)", func:"sum", args:["POP_O65"]},
  {name: "pop_o65R", label:"65歳以上人口割合(%)", func:"rate", args:["POP_O65", "POPULATION"], prec:1},
  {name: "FOREIGNER", label:"外国人人口(人)", func:"sum", args:["FOREIGNER"]},
  {name: "foreignerR", label:"外国人人口割合(%)", func:"rate", args:["FOREIGNER", "POPULATION"], prec:2}
]}];

var Categories_shorai = [{name: "2020", label: "2020年推計人口", data:[
  {name: "POPULATION", label: "2015年人口(人)", func: "sum", args: ["POPULATION"], desc:"2015年国勢調査による実測人口。"},
  {name: "AREA", label: "面積(2015年)(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"2015年国勢調査による面積。"},
  {name: "EST2020", label: "2020年推計人口(人)", func: "sum", args: ["EST2020"]},
  {name: "2020dens", label: "2020年人口密度(人/㎢)", func: "div", args: ["EST2020", "AREA"], prec: 1},
  {name: "2020incr", label: "2020年推計人口増加数(人)", func: "custom", args: ["EST2020", "-", "POPULATION"], noprop:true, desc:"2015年人口と2020年推計人口を比較した人口増加数。"},
  {name: "2020incrR", label: "2020年推計人口増加率(%)", func: "custom", args: ["(", "EST2020", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true, desc:"人口増加数を2015年人口で割ったもの。"}
]}, {name: "2025", label: "2025年推計人口", data:[
  {name: "POPULATION", label: "2015年人口(人)", func: "sum", args: ["POPULATION"], desc:"2015年国勢調査による実測人口。"},
  {name: "AREA", label: "面積(2015年)(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"2015年国勢調査による面積。"},
  {name: "EST2025", label: "2025年推計人口(人)", func: "sum", args: ["EST2025"]},
  {name: "2025dens", label: "2025年人口密度(人/㎢)", func: "div", args: ["EST2025", "AREA"], prec: 1},
  {name: "2025incr", label: "2025年推計人口増加数(人)", func: "custom", args: ["EST2025", "-", "POPULATION"], noprop:true, desc:"2015年人口と2025年推計人口を比較した人口増加数。"},
  {name: "2025incrR", label: "2025年推計人口増加率(%)", func: "custom", args: ["(", "EST2025", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true, desc:"人口増加数を2015年人口で割ったもの。"}
]}, {name: "2030", label: "2030年推計人口", data:[
  {name: "POPULATION", label: "2015年人口(人)", func: "sum", args: ["POPULATION"], desc:"2015年国勢調査による実測人口。"},
  {name: "AREA", label: "面積(2015年)(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"2015年国勢調査による面積。"},
  {name: "EST2030", label: "2030年推計人口(人)", func: "sum", args: ["EST2030"]},
  {name: "2030dens", label: "2030年人口密度(人/㎢)", func: "div", args: ["EST2030", "AREA"], prec: 1},
  {name: "2030incr", label: "2030年推計人口増加数(人)", func: "custom", args: ["EST2030", "-", "POPULATION"], noprop:true, desc:"2015年人口と2030年推計人口を比較した人口増加数。"},
  {name: "2030incrR", label: "2030年推計人口増加率(%)", func: "custom", args: ["(", "EST2030", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true, desc:"人口増加数を2015年人口で割ったもの。"}
]}, {name: "2035", label: "2035年推計人口", data:[
  {name: "POPULATION", label: "2015年人口(人)", func: "sum", args: ["POPULATION"], desc:"2015年国勢調査による実測人口。"},
  {name: "AREA", label: "面積(2015年)(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"2015年国勢調査による面積。"},
  {name: "EST2035", label: "2035年推計人口(人)", func: "sum", args: ["EST2035"]},
  {name: "2035dens", label: "2035年人口密度(人/㎢)", func: "div", args: ["EST2035", "AREA"], prec: 1},
  {name: "2035incr", label: "2035年推計人口増加数(人)", func: "custom", args: ["EST2035", "-", "POPULATION"], noprop:true, desc:"2015年人口と2035年推計人口を比較した人口増加数。"},
  {name: "2035incrR", label: "2035年推計人口増加率(%)", func: "custom", args: ["(", "EST2035", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true, desc:"人口増加数を2015年人口で割ったもの。"}
]}, {name: "2040", label: "2040年推計人口", data:[
  {name: "POPULATION", label: "2015年人口(人)", func: "sum", args: ["POPULATION"], desc:"2015年国勢調査による実測人口。"},
  {name: "AREA", label: "面積(2015年)(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"2015年国勢調査による面積。"},
  {name: "EST2040", label: "2040年推計人口(人)", func: "sum", args: ["EST2040"]},
  {name: "2040dens", label: "2040年人口密度(人/㎢)", func: "div", args: ["EST2040", "AREA"], prec: 1},
  {name: "2040incr", label: "2040年推計人口増加数(人)", func: "custom", args: ["EST2040", "-", "POPULATION"], noprop:true, desc:"2015年人口と2040年推計人口を比較した人口増加数。"},
  {name: "2040incrR", label: "2040年推計人口増加率(%)", func: "custom", args: ["(", "EST2040", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true, desc:"人口増加数を2015年人口で割ったもの。"}
]}, {name: "2045", label: "2045年推計人口", data:[
  {name: "POPULATION", label: "2015年人口(人)", func: "sum", args: ["POPULATION"], desc:"2015年国勢調査による実測人口。"},
  {name: "AREA", label: "面積(2015年)(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"2015年国勢調査による面積。"},
  {name: "EST2045", label: "2045年推計人口(人)", func: "sum", args: ["EST2045"]},
  {name: "2045dens", label: "2045年人口密度(人/㎢)", func: "div", args: ["EST2045", "AREA"], prec: 1},
  {name: "2045incr", label: "2045年推計人口増加数(人)", func: "custom", args: ["EST2045", "-", "POPULATION"], noprop:true, desc:"2015年人口と2045年推計人口を比較した人口増加数。"},
  {name: "2045incrR", label: "2045年推計人口増加率(%)", func: "custom", args: ["(", "EST2045", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true, desc:"人口増加数を2015年人口で割ったもの。"}
]}, {name: "2020compare", label: "2020年人口比較", data:[
  {name: "EST2020", label: "2020年推計人口(人)", func: "sum", args: ["EST2020"]},
  {name: "POP2020", label: "2020年実測人口(人)", func: "sum", args: ["POP2020"], desc: "2020年国勢調査による実測人口。"},
  {name: "compare", label: "推計人口との差(人)", func: "custom", args: ["POP2020", "-", "EST2020"], noprop:true, desc: "2020年国勢調査人口から2020年推計人口を引いたもの。"},
  {name: "compareR", label: "推計人口との比(%)", func: "rate", args: ["POP2020", "EST2020"], prec:1, desc: "2020年国勢調査人口を2020年推計人口で割ったもの。"}
]}, {name: "csv", data: [
  {name: "POPULATION", label: "2015年人口(人)", func: "sum", args: ["POPULATION"]},
  {name: "AREA", label: "面積(2015年)(㎢)", func: "sum", args: ["AREA"], prec: 2},
  {name: "EST2020", label: "2020年推計人口(人)", func: "sum", args: ["EST2020"]},
  {name: "EST2025", label: "2025年推計人口(人)", func: "sum", args: ["EST2025"]},
  {name: "EST2030", label: "2030年推計人口(人)", func: "sum", args: ["EST2030"]},
  {name: "EST2035", label: "2035年推計人口(人)", func: "sum", args: ["EST2035"]},
  {name: "EST2040", label: "2040年推計人口(人)", func: "sum", args: ["EST2040"]},
  {name: "EST2045", label: "2045年推計人口(人)", func: "sum", args: ["EST2045"]},
  {name: "2020dens", label: "2020年人口密度(人/㎢)", func: "div", args: ["EST2020", "AREA"], prec: 1},
  {name: "2025dens", label: "2025年人口密度(人/㎢)", func: "div", args: ["EST2025", "AREA"], prec: 1},
  {name: "2030dens", label: "2030年人口密度(人/㎢)", func: "div", args: ["EST2030", "AREA"], prec: 1},
  {name: "2035dens", label: "2035年人口密度(人/㎢)", func: "div", args: ["EST2035", "AREA"], prec: 1},
  {name: "2040dens", label: "2040年人口密度(人/㎢)", func: "div", args: ["EST2040", "AREA"], prec: 1},
  {name: "2045dens", label: "2045年人口密度(人/㎢)", func: "div", args: ["EST2045", "AREA"], prec: 1},
  {name: "2020incr", label: "2020年推計人口増加数(人)", func: "custom", args: ["EST2020", "-", "POPULATION"], noprop:true},
  {name: "2025incr", label: "2025年推計人口増加数(人)", func: "custom", args: ["EST2025", "-", "POPULATION"], noprop:true},
  {name: "2030incr", label: "2030年推計人口増加数(人)", func: "custom", args: ["EST2030", "-", "POPULATION"], noprop:true},
  {name: "2035incr", label: "2035年推計人口増加数(人)", func: "custom", args: ["EST2035", "-", "POPULATION"], noprop:true},
  {name: "2040incr", label: "2040年推計人口増加数(人)", func: "custom", args: ["EST2040", "-", "POPULATION"], noprop:true},
  {name: "2045incr", label: "2045年推計人口増加数(人)", func: "custom", args: ["EST2045", "-", "POPULATION"], noprop:true},
  {name: "2020incrR", label: "2020年推計人口増加率(%)", func: "custom", args: ["(", "EST2020", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true},
  {name: "2025incrR", label: "2025年推計人口増加率(%)", func: "custom", args: ["(", "EST2025", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true},
  {name: "2030incrR", label: "2030年推計人口増加率(%)", func: "custom", args: ["(", "EST2030", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true},
  {name: "2035incrR", label: "2035年推計人口増加率(%)", func: "custom", args: ["(", "EST2035", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true},
  {name: "2040incrR", label: "2040年推計人口増加率(%)", func: "custom", args: ["(", "EST2040", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true},
  {name: "2045incrR", label: "2045年推計人口増加率(%)", func: "custom", args: ["(", "EST2045", "-", "POPULATION", ")", "/", "POPULATION", "*", 100], prec:2, noprop:true},
  {name: "POP2020", label: "2020年実測人口(人)", func: "sum", args: ["POP2020"]},
  {name: "compare", label: "推計人口との差(人)", func: "custom", args: ["POP2020", "-", "EST2020"], noprop:true},
  {name: "compareR", label: "推計人口との比(%)", func: "rate", args: ["POP2020", "EST2020"], prec:1}
]}];

var Categories_habitable = [{name: "habitable", label: "可住地面積", data:[
  {name: "AREA", label:"総面積(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"平成27年面積調による面積。"},
  {name: "HABIT_AREA", label:"可住地面積(㎢)", func: "sum", args: ["HABIT_AREA"], prec: 2, desc:"総面積から主要湖沼面積・林野面積を引いたもの。"},
  {name: "LAKE_AREA", label:"主要湖沼面積(㎢)", func: "sum", args: ["LAKE_AREA"], prec: 2, desc:"平成27年面積調による、1㎢以上の湖沼の面積。"},
  {name: "FF_AREA", label:"林野面積(㎢)", func: "sum", args: ["FF_AREA"], prec: 2, desc:"平成27年農林業センサスによる、森林及び草生地の面積。"},
  {name: "habitR", label:"総面積に占める可住地割合(%)", func: "rate", args: ["HABIT_AREA", "AREA"], prec: 1},
  {}
]},{name: "density", label: "可住地人口密度", data:[
  {name: "POPULATION", label: "人口(人)", func: "sum", args: ["POPULATION"], desc:"平成27年国勢調査による人口。"},
  {},
  {name: "AREA", label:"総面積(㎢)", func: "sum", args: ["AREA"], prec: 2},
  {name: "HABIT_AREA", label:"可住地面積(㎢)", func: "sum", args: ["HABIT_AREA"], prec: 2},
  {name: "density_gross", label:"総人口密度(人/㎢)", func: "div", args: ["POPULATION", "AREA"], prec: 1},
  {name: "density_habit", label:"可住地人口密度(人/㎢)", func: "div", args: ["POPULATION", "HABIT_AREA"], prec: 1}
]},{name: "csv", data:[
  {name: "AREA", label:"総面積(㎢)", func: "sum", args: ["AREA"], prec: 2},
  {name: "HABIT_AREA", label:"可住地面積(㎢)", func: "sum", args: ["HABIT_AREA"], prec: 2},
  {name: "LAKE_AREA", label:"主要湖沼面積(㎢)", func: "sum", args: ["LAKE_AREA"], prec: 2},
  {name: "FF_AREA", label:"林野面積(㎢)", func: "sum", args: ["FF_AREA"], prec: 2},
  {name: "habitR", label:"総面積に占める可住地割合(%)", func: "rate", args: ["HABIT_AREA", "AREA"], prec: 1},
  {name: "POPULATION", label: "人口(人)", func: "sum", args: ["POPULATION"]},
  {name: "density_gross", label:"総人口密度(人/㎢)", func: "div", args: ["POPULATION", "AREA"], prec: 1},
  {name: "density_habit", label:"可住地人口密度(人/㎢)", func: "div", args: ["POPULATION", "HABIT_AREA"], prec: 1}
]}];

var Categories_keizai = [{name: "office", label: "事業所・従業者数", data:[
  {name: "POPULATION", label: "人口(国調2015)(人)", func: "sum", args: ["POPULATION"], desc:"平成27年国勢調査による人口。"},
  {name: "AREA", label: "面積(国調2015)(㎢)", func: "sum", args: ["AREA"], prec: 2, desc:"平成27年国勢調査による面積。"},
  {name: "OFFICE", label: "民営事業所数(所)", func: "sum", args: ["OFFICE"], desc:"事業所の数(公務を除く)。"},
  {name: "WORKER", label: "従業者数(人)", func: "sum", args: ["WORKER"]}
]}, {name: "ind_office", label: "産業別事業所数", data:[
  {name: "OFFICE", label: "民営事業所数(所)", func: "sum", args: ["OFFICE"], desc:"事業所の数(公務を除く・事業内容不詳を含む)。"},
  {},
  {name: "O_1ST", label: "第一次産業(所)", func: "sum", args: ["O_1ST"], desc:"事業所のうち、農林業・漁業に分類されるものの数。"},
  {name: "o_1stR", label: "第一次産業割合(%)", func: "rate", args: ["O_1ST", "OFFICE"], prec: 1, desc:"第一次産業事業所数を民営事業所数で割ったもの。"},
  {name: "O_2ND", label: "第二次産業(所)", func: "sum", args: ["O_2ND"], desc:"事業所のうち、鉱業・建設業・製造業等に分類されるものの数。"},
  {name: "o_2ndR", label: "第二次産業割合(%)", func: "rate", args: ["O_2ND", "OFFICE"], prec: 1, desc:"第二次産業事業所数を民営事業所数で割ったもの。"},
  {name: "O_3RD", label: "第三次産業(所)", func: "sum", args: ["O_3RD"], desc:"事業所のうち、第三次産業(産業大分類のうちF～R)に分類されるものの数。"},
  {name: "o_3rdR", label: "第三次産業割合(%)", func: "rate", args: ["O_3RD", "OFFICE"], prec: 1, desc:"第三次産業事業所数を民営事業所数で割ったもの。"}
]}, {name: "ind_worker", label: "産業別従業者数", data:[
  {name: "WORKER", label: "従業者数(人)", func: "sum", args: ["WORKER"], desc:"民営事業所(事業内容不詳を含む)の従業者の数。"},
  {},
  {name: "W_1ST", label: "第一次産業(人)", func: "sum", args: ["W_1ST"], desc:"事業所のうち、農林業・漁業に分類されるものに従事している従業者の数。"},
  {name: "w_1stR", label: "第一次産業割合(%)", func: "rate", args: ["W_1ST", "WORKER"], prec: 1, desc:"第一次産業従業者数を民営事業所従業者数で割ったもの。"},
  {name: "W_2ND", label: "第二次産業(人)", func: "sum", args: ["W_2ND"], desc:"事業所のうち、鉱業・建設業・製造業等に分類されるものに従事している従業者の数。"},
  {name: "w_2ndR", label: "第二次産業割合(%)", func: "rate", args: ["W_2ND", "WORKER"], prec: 1, desc:"第二次産業従業者数を民営事業所従業者数で割ったもの。"},
  {name: "W_3RD", label: "第三次産業(人)", func: "sum", args: ["W_3RD"], desc:"事業所のうち、第三次産業(産業大分類のうちF～R)に分類されるものに従事している従業者の数。"},
  {name: "w_3rdR", label: "第三次産業割合(%)", func: "rate", args: ["W_3RD", "WORKER"], prec: 1, desc:"第三次産業従業者数を民営事業所従業者数で割ったもの。"}
]}, {name: "sales_all", label: "売上・付加価値額(全産業)", data:[
  {name: "SALES_EST", label: "売上金額試算値(百万円)", func: "sum", args: ["SALES_EST"], desc: "1年間(調査年前年)の売上利益。一部の産業は事業所別の売上高を算出することが困難であるため、推計値を用いる。"},
  {name: "ADD_VALUE", label: "付加価値額(百万円)", func: "sum", args: ["ADD_VALUE"], desc: "生産活動によって新たに生み出された価値。売上高から費用等を引いたもの。"},
  {name: "productivity", label: "労働生産性(百万円/人)", func: "div", args: ["ADD_VALUE", "WORKER"], prec: 2, desc: "付加価値額を民営事業所従業者数で割ったもの。"},
  {}
]}, {name: "sales_pie", label:"産業別売上金額【円グラフ表示】", pie: true, unit: "百万円", data:[
  {name: "SALES_AGRI", label:"農林漁業", color:"#72b578", func:"sum", args:["SALES_AGRI"]},
  {name: "SALES_MINI", label:"鉱業等", color:"#737373", func:"sum", args:["SALES_MINI"]},
  {name: "SALES_CONS", label:"建設業", color:"#785237", func:"sum", args:["SALES_CONS"]},
  {name: "SALES_MANU", label:"製造業", color:"#5ea3ff", func:"sum", args:["SALES_MANU"]},
  {name: "SALES_SUPP", label:"電気等供給業", color:"#fdff91", func:"sum", args:["SALES_SUPP"]},
  {name: "SALES_INFO", label:"情報通信業", color:"#ffb0fe", func:"sum", args:["SALES_INFO"]},
  {name: "SALES_TRAN", label:"運輸業", color:"#39613c", func:"sum", args:["SALES_TRAN"]},
  {name: "SALES_SALE", label:"卸・小売業", color:"#ff6363", func:"sum", args:["SALES_SALE"]},
  {name: "SALES_FINA", label:"金融・保険業", color:"#9a9900", func:"sum", args:["SALES_FINA"]},
  {name: "SALES_REAL", label:"不動産業", color:"#82ffec", func:"sum", args:["SALES_REAL"]},
  {name: "SALES_RESE", label:"学術研究業", color:"#6945b5", func:"sum", args:["SALES_RESE"]},
  {name: "SALES_ACCO", label:"宿泊・飲食業", color:"#d4d200", func:"sum", args:["SALES_ACCO"]},
  {name: "SALES_LIVI", label:"生活関連サービス業", color:"#bbccff", func:"sum", args:["SALES_LIVI"]},
  {name: "SALES_EDUC", label:"教育", color:"#b7ff7e", func:"sum", args:["SALES_EDUC"]},
  {name: "SALES_MEDI", label:"医療・福祉", color:"#ffd9eb", func:"sum", args:["SALES_MEDI"]},
  {name: "SALES_COMP", label:"郵便局・協同組合", color:"#ad2d2d", func:"sum", args:["SALES_COMP"]},
  {name: "SALES_OSERV", label:"その他のサービス業", color:"#93c8d1", func:"sum", args:["SALES_OSERV"]},
  {name: "SALES_CONF", label:"秘匿項目", color:"#b8b8b8", func:"pie_other", args:["SALES_EST", "SALES_AGRI", "SALES_MINI", "SALES_CONS", "SALES_MANU", "SALES_SUPP", "SALES_INFO", "SALES_TRAN", "SALES_SALE", "SALES_FINA", "SALES_REAL", "SALES_RESE", "SALES_ACCO", "SALES_LIVI", "SALES_EDUC", "SALES_MEDI", "SALES_COMP", "SALES_OSERV"]}
]}, {name: "manufacture", label: "製造業に関する指標", data:[
  {name: "MANU_OFFICE", label: "事業所数(所)", func: "sum", args: ["MANU_OFFICE"], desc:"従業員数4人以上の製造業事業所の数。"},
  {name: "MANU_WORKER", label: "従業者数(人)", func: "sum", args: ["MANU_WORKER"]},
  {name: "MANU_SHIP", label: "製造品出荷額等(万円)", func: "sum", args: ["MANU_SHIP"], desc:"1年間(調査年前年)に製造された製品の出荷額。"},
  {name: "MANU_ADD", label: "粗付加価値額(万円)", func: "sum", args: ["MANU_ADD"], desc:"製造品出荷額等から原材料費・燃料費・諸税等を差し引いたもの。"},
  {name: "manu_shipPW", label: "従業員あたり出荷額(万円/人)", func: "div", args: ["MANU_SHIP", "MANU_WORKER"], prec: 1},
  {name: "manu_shipPO", label: "事業所あたり出荷額(万円/所)", func: "div", args: ["MANU_SHIP", "MANU_OFFICE"], prec: 1},
  {name: "manu_shipPC", label: "人口あたり出荷額(万円/人)", func: "div", args: ["MANU_SHIP", "POPULATION"], prec: 1},
  {}
]}, {name: "manufacture_pie", label: "産業別製造品出荷額【円グラフ表示】", pie: true, unit: "万円", data:[
  {name: "SHIP_FOOD", label:"食料品製造業", color:"#ff6161", func:"sum", args:["SHIP_FOOD"]},
  {name: "SHIP_TEXT", label:"繊維工業", color:"#6a8baf", func:"sum", args:["SHIP_TEXT"]},
  {name: "SHIP_WOOD", label:"木製品・家具等製造業", color:"#786340", func:"sum", args:["SHIP_WOOD"]},
  {name: "SHIP_PAPE", label:"製紙・印刷業", color:"#d6ffda", func:"sum", args:["SHIP_PAPE"]},
  {name: "SHIP_CHEM", label:"化学工業", color:"#d495ff", func:"sum", args:["SHIP_CHEM"]},
  {name: "SHIP_PETR", label:"石油・プラ・ゴム製品製造業", color:"#512f99", func:"sum", args:["SHIP_PETR"]},
  {name: "SHIP_LEAT", label:"皮革・土石製品製造業", color:"#6e2037", func:"sum", args:["SHIP_LEAT"]},
  {name: "SHIP_META", label:"金属加工業", color:"#ffec8b", func:"sum", args:["SHIP_META"]},
  {name: "SHIP_MACH", label:"一般機械工業", color:"#267d2e", func:"sum", args:["SHIP_MACH"]},
  {name: "SHIP_ELEC", label:"電気・電子機械工業", color:"#9fcd4a", func:"sum", args:["SHIP_ELEC"]},
  {name: "SHIP_VEHI", label:"輸送用機械工業", color:"#0084d9", func:"sum", args:["SHIP_VEHI"]},
  {name: "SHIP_OMANU", label:"その他の製造業", color:"#93c8d1", func:"sum", args:["SHIP_OMANU"]},
  {name: "SHIP_CONF", label:"秘匿項目", color:"#b8b8b8", func:"pie_other", args:["MANU_SHIP", "SHIP_FOOD", "SHIP_TEXT", "SHIP_WOOD", "SHIP_PAPE", "SHIP_CHEM", "SHIP_PETR", "SHIP_LEAT", "SHIP_META", "SHIP_MACH", "SHIP_ELEC", "SHIP_VEHI", "SHIP_OMANU"]}
]}, {name: "sales", label: "卸・小売業に関する指標", data:[
  {name: "SL_OFFICE", label: "事業所数(所)", func: "sum", args: ["SL_OFFICE"], desc:"卸売業・小売業に分類される事業所の数(販売額等の数値が得られたもののみ)。"},
  {name: "SL_WORKER", label: "従業者数(人)", func: "sum", args: ["SL_WORKER"]},
  {name: "SL_SALES", label: "年間商品販売額(百万円)", func: "sum", args: ["SL_SALES"], desc:"1年間(調査年前年)に販売された有体商品の売上高。"},
  {name: "sl_salesPO", label: "事業所あたり商品販売額(百万円/所)", func: "div", args: ["SL_SALES", "SL_OFFICE"], prec: 1},
  {name: "sl_salesPW", label: "従業員あたり商品販売額(百万円/人)", func: "div", args: ["SL_SALES", "SL_WORKER"], prec: 1},
  {name: "sl_salesPC", label: "人口あたり商品販売額(百万円/人)", func: "div", args: ["SL_SALES", "POPULATION"], prec: 2}
]}, {name: "wholesale", label: "卸売業に関する指標", data:[
  {name: "WH_OFFICE", label: "事業所数(所)", func: "sum", args: ["WH_OFFICE"], desc:"卸売業に分類される事業所の数(販売額等の数値が得られたもののみ)。"},
  {name: "WH_WORKER", label: "従業者数(人)", func: "sum", args: ["WH_WORKER"]},
  {name: "WH_SALES", label: "年間商品販売額(百万円)", func: "sum", args: ["WH_SALES"], desc:"1年間(調査年前年)に販売された有体商品の売上高。"},
  {name: "wh_salesPO", label: "事業所あたり商品販売額(百万円/所)", func: "div", args: ["WH_SALES", "WH_OFFICE"], prec: 1},
  {name: "wh_salesPW", label: "従業員あたり商品販売額(百万円/人)", func: "div", args: ["WH_SALES", "WH_WORKER"], prec: 1},
  {name: "wh_salesPC", label: "人口あたり商品販売額(百万円/人)", func: "div", args: ["WH_SALES", "POPULATION"], prec: 2}
]}, {name: "retail", label: "小売業に関する指標", data:[
  {name: "RE_OFFICE", label: "事業所数(所)", func: "sum", args: ["RE_OFFICE"], desc:"小売業に分類される事業所の数(販売額等の数値が得られたもののみ)。"},
  {name: "RE_WORKER", label: "従業者数(人)", func: "sum", args: ["RE_WORKER"]},
  {name: "RE_SALES", label: "年間商品販売額(百万円)", func: "sum", args: ["RE_SALES"], desc:"1年間(調査年前年)に販売された有体商品の売上高。"},
  {name: "re_salesPO", label: "事業所あたり商品販売額(百万円/所)", func: "div", args: ["RE_SALES", "RE_OFFICE"], prec: 1},
  {name: "re_salesPW", label: "従業員あたり商品販売額(百万円/人)", func: "div", args: ["RE_SALES", "RE_WORKER"], prec: 1},
  {name: "re_salesPC", label: "人口あたり商品販売額(百万円/人)", func: "div", args: ["RE_SALES", "POPULATION"], prec: 2},
  {name: "RE_AREA", label: "売場面積(㎡)", func: "sum", args: ["RE_AREA"]},
  {}
]}, {name: "csv", data: [
  {name: "POPULATION", label: "人口(国調2015)(人)", func: "sum", args: ["POPULATION"]},
  {name: "AREA", label: "面積(国調2015)(㎢)", func: "sum", args: ["AREA"], prec: 2},
  {name: "OFFICE", label: "事業所数(所)", func: "sum", args: ["OFFICE"]},
  {name: "WORKER", label: "従業者数(人)", func: "sum", args: ["WORKER"]},
  {name: "O_1ST", label: "【事】第一次産業(所)", func: "sum", args: ["O_1ST"]},
  {name: "o_1stR", label: "【事】第一次産業割合(%)", func: "rate", args: ["O_1ST", "OFFICE"], prec: 1},
  {name: "O_2ND", label: "【事】第二次産業(所)", func: "sum", args: ["O_2ND"]},
  {name: "o_2ndR", label: "【事】第二次産業割合(%)", func: "rate", args: ["O_2ND", "OFFICE"], prec: 1},
  {name: "O_3RD", label: "【事】第三次産業(所)", func: "sum", args: ["O_3RD"]},
  {name: "o_3rdR", label: "【事】第三次産業割合(%)", func: "rate", args: ["O_3RD", "OFFICE"], prec: 1},
  {name: "W_1ST", label: "【従】第一次産業(人)", func: "sum", args: ["W_1ST"]},
  {name: "w_1stR", label: "【従】第一次産業割合(%)", func: "rate", args: ["W_1ST", "WORKER"], prec: 1},
  {name: "W_2ND", label: "【従】第二次産業(人)", func: "sum", args: ["W_2ND"]},
  {name: "w_2ndR", label: "【従】第二次産業割合(%)", func: "rate", args: ["W_2ND", "WORKER"], prec: 1},
  {name: "W_3RD", label: "【従】第三次産業(人)", func: "sum", args: ["W_3RD"]},
  {name: "w_3rdR", label: "【従】第三次産業割合(%)", func: "rate", args: ["W_3RD", "WORKER"], prec: 1},
  {name: "SALES_EST", label: "売上金額試算値(百万円)", func: "sum", args: ["SALES_EST"]},
  {name: "ADD_VALUE", label: "付加価値額(百万円)", func: "sum", args: ["ADD_VALUE"]},
  {name: "productivity", label: "労働生産性(百万円/人)", func: "div", args: ["ADD_VALUE", "W_PRIVATE"], prec: 2},
  {name: "SALES_AGRI", label:"農林漁業売上高(百万円)", func:"sum", args:["SALES_AGRI"]},
  {name: "SALES_MINI", label:"鉱業等売上高(百万円)", func:"sum", args:["SALES_MINI"]},
  {name: "SALES_CONS", label:"建設業売上高(百万円)", func:"sum", args:["SALES_CONS"]},
  {name: "SALES_MANU", label:"製造業売上高(百万円)", func:"sum", args:["SALES_MANU"]},
  {name: "SALES_SUPP", label:"電気等供給業売上高(百万円)", func:"sum", args:["SALES_SUPP"]},
  {name: "SALES_INFO", label:"情報通信業売上高(百万円)", func:"sum", args:["SALES_INFO"]},
  {name: "SALES_TRAN", label:"運輸業売上高(百万円)", func:"sum", args:["SALES_TRAN"]},
  {name: "SALES_SALE", label:"卸・小売業売上高(百万円)", func:"sum", args:["SALES_SALE"]},
  {name: "SALES_FINA", label:"金融・保険業売上高(百万円)", func:"sum", args:["SALES_FINA"]},
  {name: "SALES_REAL", label:"不動産業売上高(百万円)", func:"sum", args:["SALES_REAL"]},
  {name: "SALES_RESE", label:"学術研究業売上高(百万円)", func:"sum", args:["SALES_RESE"]},
  {name: "SALES_ACCO", label:"宿泊・飲食業売上高(百万円)", func:"sum", args:["SALES_ACCO"]},
  {name: "SALES_LIVI", label:"生活関連サービス業売上高(百万円)", func:"sum", args:["SALES_LIVI"]},
  {name: "SALES_EDUC", label:"教育売上高(百万円)", func:"sum", args:["SALES_EDUC"]},
  {name: "SALES_MEDI", label:"医療・福祉売上高(百万円)", func:"sum", args:["SALES_MEDI"]},
  {name: "SALES_COMP", label:"郵便局・協同組合売上高(百万円)", func:"sum", args:["SALES_COMP"]},
  {name: "SALES_OSERV", label:"その他のサービス業売上高(百万円)", func:"sum", args:["SALES_OSERV"]},
  {name: "MANU_OFFICE", label: "【製】事業所数(所)", func: "sum", args: ["MANU_OFFICE"]},
  {name: "MANU_WORKER", label: "【製】従業者数(人)", func: "sum", args: ["MANU_WORKER"]},
  {name: "MANU_SHIP", label: "【製】製造品出荷額等(万円)", func: "sum", args: ["MANU_SHIP"]},
  {name: "MANU_ADD", label: "【製】粗付加価値額(万円)", func: "sum", args: ["MANU_ADD"]},
  {name: "manu_shipPW", label: "【製】従業員あたり出荷額(万円/人)", func: "div", args: ["MANU_SHIP", "MANU_WORKER"], prec: 1},
  {name: "manu_shipPO", label: "【製】事業所あたり出荷額(万円/所)", func: "div", args: ["MANU_SHIP", "MANU_OFFICE"], prec: 1},
  {name: "manu_shipPC", label: "【製】人口あたり出荷額(万円/人)", func: "div", args: ["MANU_SHIP", "POPULATION"], prec: 1},
  {name: "SHIP_FOOD", label:"【製】食料品製造業出荷額(万円)", func:"sum", args:["SHIP_FOOD"]},
  {name: "SHIP_TEXT", label:"【製】繊維工業出荷額(万円)", func:"sum", args:["SHIP_TEXT"]},
  {name: "SHIP_WOOD", label:"【製】木製品・家具等製造業出荷額(万円)", func:"sum", args:["SHIP_WOOD"]},
  {name: "SHIP_PAPE", label:"【製】製紙・印刷業出荷額(万円)", func:"sum", args:["SHIP_PAPE"]},
  {name: "SHIP_CHEM", label:"【製】化学工業出荷額(万円)", func:"sum", args:["SHIP_CHEM"]},
  {name: "SHIP_PETR", label:"【製】石油・プラ・ゴム製品製造業出荷額(万円)", func:"sum", args:["SHIP_PETR"]},
  {name: "SHIP_LEAT", label:"【製】皮革・土石製品製造業出荷額(万円)", func:"sum", args:["SHIP_LEAT"]},
  {name: "SHIP_META", label:"【製】金属加工業出荷額(万円)", func:"sum", args:["SHIP_META"]},
  {name: "SHIP_MACH", label:"【製】一般機械工業出荷額(万円)", func:"sum", args:["SHIP_MACH"]},
  {name: "SHIP_ELEC", label:"【製】電気・電子機械工業出荷額(万円)", func:"sum", args:["SHIP_ELEC"]},
  {name: "SHIP_VEHI", label:"【製】輸送用機械工業出荷額(万円)", func:"sum", args:["SHIP_VEHI"]},
  {name: "SHIP_OMANU", label:"【製】その他の製造業出荷額(万円)", func:"sum", args:["SHIP_OMANU"]},
  {name: "SL_OFFICE", label: "【卸・小】事業所数(所)", func: "sum", args: ["SL_OFFICE"]},
  {name: "SL_WORKER", label: "【卸・小】従業者数(人)", func: "sum", args: ["SL_WORKER"]},
  {name: "SL_SALES", label: "【卸・小】年間商品販売額(百万円)", func: "sum", args: ["SL_SALES"]},
  {name: "sl_salesPO", label: "【卸・小】事業所あたり商品販売額(百万円/所)", func: "div", args: ["SL_SALES", "SL_OFFICE"], prec: 1},
  {name: "sl_salesPW", label: "【卸・小】従業員あたり商品販売額(百万円/人)", func: "div", args: ["SL_SALES", "SL_WORKER"], prec: 1},
  {name: "sl_salesPC", label: "【卸・小】人口あたり商品販売額(百万円/人)", func: "div", args: ["SL_SALES", "POPULATION"], prec: 2},
  {name: "WH_OFFICE", label: "【卸】事業所数(所)", func: "sum", args: ["WH_OFFICE"]},
  {name: "WH_WORKER", label: "【卸】従業者数(人)", func: "sum", args: ["WH_WORKER"]},
  {name: "WH_SALES", label: "【卸】年間商品販売額(百万円)", func: "sum", args: ["WH_SALES"]},
  {name: "wh_salesPO", label: "【卸】事業所あたり商品販売額(百万円/所)", func: "div", args: ["WH_SALES", "WH_OFFICE"], prec: 1},
  {name: "wh_salesPW", label: "【卸】従業員あたり商品販売額(百万円/人)", func: "div", args: ["WH_SALES", "WH_WORKER"], prec: 1},
  {name: "wh_salesPC", label: "【卸】人口あたり商品販売額(百万円/人)", func: "div", args: ["WH_SALES", "POPULATION"], prec: 2},
  {name: "RE_OFFICE", label: "【小】事業所数(所)", func: "sum", args: ["RE_OFFICE"]},
  {name: "RE_WORKER", label: "【小】従業者数(人)", func: "sum", args: ["RE_WORKER"]},
  {name: "RE_SALES", label: "【小】年間商品販売額(百万円)", func: "sum", args: ["RE_SALES"]},
  {name: "re_salesPO", label: "【小】事業所あたり商品販売額(百万円/所)", func: "div", args: ["RE_SALES", "RE_OFFICE"], prec: 1},
  {name: "re_salesPW", label: "【小】従業員あたり商品販売額(百万円/人)", func: "div", args: ["RE_SALES", "RE_WORKER"], prec: 1},
  {name: "re_salesPC", label: "【小】人口あたり商品販売額(百万円/人)", func: "div", args: ["RE_SALES", "POPULATION"], prec: 2},
  {name: "RE_AREA", label: "【小】売場面積(㎡)", func: "sum", args: ["RE_AREA"]}
]}];

var Categories_senkyo = [{name: "shosenkyo", label: "小選挙区制", data:[
  {name: "S_DIST", label: "小選挙区", func: "nonsum", args:["S_DIST"]},
  {name: "ELECTOR", label: "選挙当日有権者数", func: "sum", args:["ELECTOR"], desc: "選挙当日の有権者の数(在外を含む)。"},
  {name: "S_VOTE", label: "投票者数", func: "sum", args:["S_VOTE"]},
  {name: "s_voteR", label: "投票率(%)", func: "rate", args:["S_VOTE", "ELECTOR"], prec: 1, desc: "投票者数を有権者数で割ったもの。"},
  {name: "S_VALID_VOTE", label: "有効投票数", func: "sum", args:["S_VALID_VOTE"]},
  {name: "s_valid_voteR", label: "有効投票率(%)", func: "rate", args:["S_VALID_VOTE", "S_VOTE"], prec: 1, desc: "有効投票数を投票者数で割ったもの。"}
]}, {name: "hirei", label: "比例代表制", data:[
  {name: "H_DIST", label: "比例ブロック", func: "nonsum", args:["H_DIST"]},
  {name: "ELECTOR", label: "選挙当日有権者数", func: "sum", args:["ELECTOR"], desc: "選挙当日の有権者の数(在外を含む)。"},
  {name: "H_VOTE", label: "投票者数", func: "sum", args:["H_VOTE"]},
  {name: "h_voteR", label: "投票率(%)", func: "rate", args:["H_VOTE", "ELECTOR"], prec: 1, desc: "投票者数を有権者数で割ったもの。"},
  {name: "H_VALID_VOTE", label: "有効投票数", func: "sum", args:["H_VALID_VOTE"]},
  {name: "h_valid_voteR", label: "有効投票率(%)", func: "rate", args:["H_VALID_VOTE", "H_VOTE"], prec: 1, desc: "有効投票数を投票者数で割ったもの。"}
]}, {name: "party", label: "比例：政党別得票数", data:[
  {name: "H_VALID_VOTE", label: "有効投票数", func: "sum", args:["H_VALID_VOTE"]},
  {name: "ruling", label: "与党", func: "custom", args:["(", "H_JIMIN", "+", "H_KOMEI", ")"], desc: "自由民主党および公明党の得票数。"},
  {name: "H_JIMIN", label: "自民党", func: "sum", args:["H_JIMIN"], desc: "自由民主党の得票数。"},
  {name: "H_KOMEI", label: "公明党", func: "sum", args:["H_KOMEI"], desc: "公明党の得票数。"},
  {name: "H_RIKKEN", label: "立憲民主党", func: "sum", args:["H_RIKKEN"], prec: "floor", desc: "立憲民主党の得票数。按分により生じる端数は切り捨て。"},
  {name: "H_ISHIN", label: "日本維新の会", func: "sum", args:["H_ISHIN"], desc: "日本維新の会の得票数。"},
  {name: "H_KYOSAN", label: "共産党", func: "sum", args:["H_KYOSAN"], desc: "日本共産党の得票数。"},
  {name: "H_KOKUMIN", label: "国民民主党", func: "sum", args:["H_KOKUMIN"], prec: "floor", desc: "国民民主党の得票数。按分により生じる端数は切り捨て。"},
  {name: "H_REIWA", label: "れいわ新選組", func: "sum", args:["H_REIWA"], desc: "れいわ新選組の得票数。"},
  {name: "H_SHAMIN", label: "社民党", func: "sum", args:["H_SHAMIN"], desc: "社会民主党の得票数。"},
  {name: "H_NHK", label: "NHK党", func: "sum", args:["H_NHK"], desc: "ＮＨＫと裁判してる党弁護士法７２条違反での得票数。"},
  {name: "H_OTHER", label: "その他", func: "sum", args:["H_OTHER"], desc: "上記以外の党の得票数の合計。"}
]}, {name: "party_rate", label: "比例：政党別得票率", data:[
  {name: "H_VALID_VOTE", label: "有効投票数", func: "sum", args:["H_VALID_VOTE"]},
  {name: "rulingR", label: "与党(%)", func: "custom", args:["(", "H_JIMIN", "+", "H_KOMEI", ")", "/", "H_VALID_VOTE", "*", "100"], prec: 1, noprop:true, desc: "自由民主党および公明党の得票数。"},
  {name: "h_jiminR", label: "自民党(%)", func: "rate", args:["H_JIMIN", "H_VALID_VOTE"], prec: 1, desc: "自由民主党の得票率。"},
  {name: "h_komeiR", label: "公明党(%)", func: "rate", args:["H_KOMEI", "H_VALID_VOTE"], prec: 1, desc: "公明党の得票率。"},
  {name: "h_rikkenR", label: "立憲民主党(%)", func: "rate", args:["H_RIKKEN", "H_VALID_VOTE"], prec: 1, desc: "立憲民主党の得票率。"},
  {name: "h_ishinR", label: "日本維新の会(%)", func: "rate", args:["H_ISHIN", "H_VALID_VOTE"], prec: 1, desc: "日本維新の会の得票率。"},
  {name: "h_kyosanR", label: "共産党(%)", func: "rate", args:["H_KYOSAN", "H_VALID_VOTE"], prec: 1, desc: "日本共産党の得票率。"},
  {name: "h_kokuminR", label: "国民民主党(%)", func: "rate", args:["H_KOKUMIN", "H_VALID_VOTE"], prec: 1, desc: "国民民主党の得票率。"},
  {name: "h_reiwaR", label: "れいわ新選組(%)", func: "rate", args:["H_REIWA", "H_VALID_VOTE"], prec: 1, desc: "れいわ新選組の得票率。"},
  {name: "h_shaminR", label: "社民党(%)", func: "rate", args:["H_SHAMIN", "H_VALID_VOTE"], prec: 1, desc: "社会民主党の得票率。"},
  {name: "h_nhkR", label: "NHK党(%)", func: "rate", args:["H_NHK", "H_VALID_VOTE"], prec: 1, desc: "ＮＨＫと裁判してる党弁護士法７２条違反での得票率。"},
  {name: "h_otherR", label: "その他(%)", func: "rate", args:["H_OTHER", "H_VALID_VOTE"], prec: 1, desc: "上記以外の党の合計得票率。"}
]}, {name: "party_pie", label: "比例：政党別得票数【円グラフ表示】", pie: true, unit: "票", data:[
  {name: "H_JIMIN", label: "自民党", color:"#0b008a", func: "sum", args:["H_JIMIN"]},
  {name: "H_KOMEI", label: "公明党", color:"#5b92db", func: "sum", args:["H_KOMEI"]},
  {name: "H_RIKKEN", label: "立憲民主党", color:"#fff063", func: "sum", args:["H_RIKKEN"]},
  {name: "H_ISHIN", label: "日本維新の会", color:"#fcbd00", func: "sum", args:["H_ISHIN"]},
  {name: "H_KYOSAN", label: "共産党", color:"#ff4949", func: "sum", args:["H_KYOSAN"]},
  {name: "H_KOKUMIN", label: "国民民主党", color:"#5e985b", func: "sum", args:["H_KOKUMIN"]},
  {name: "H_REIWA", label: "れいわ新選組", color:"#eb6fff", func: "sum", args:["H_REIWA"]},
  {name: "H_SHAMIN", label: "社民党", color:"#b8fe9c", func: "sum", args:["H_SHAMIN"]},
  {name: "H_NHK", label: "NHK党", color:"#cebaff", func: "sum", args:["H_NHK"]},
  {name: "H_OTHER", label: "その他", color:"#b8b8b8", func: "sum", args:["H_OTHER"]}
]}, {name: "csv", data:[
  {name: "H_DIST", label: "比例ブロック", func: "nonsum", args:["H_DIST"]},
  {name: "S_DIST", label: "小選挙区", func: "nonsum", args:["S_DIST"]},
  {name: "ELECTOR", label: "選挙当日有権者数", func: "sum", args:["ELECTOR"]},
  {name: "S_VOTE", label: "【小】投票者数", func: "sum", args:["S_VOTE"]},
  {name: "s_voteR", label: "【小】投票率(%)", func: "rate", args:["S_VOTE", "ELECTOR"], prec: 1},
  {name: "S_VALID_VOTE", label: "【小】有効投票数", func: "sum", args:["S_VALID_VOTE"]},
  {name: "s_valid_voteR", label: "【小】有効投票率(%)", func: "rate", args:["S_VALID_VOTE", "S_VOTE"], prec: 1},
  {name: "H_VOTE", label: "【比】投票者数", func: "sum", args:["H_VOTE"]},
  {name: "h_voteR", label: "【比】投票率(%)", func: "rate", args:["H_VOTE", "ELECTOR"], prec: 1},
  {name: "H_VALID_VOTE", label: "【比】有効投票数", func: "sum", args:["H_VALID_VOTE"]},
  {name: "h_valid_voteR", label: "【比】有効投票率(%)", func: "rate", args:["H_VALID_VOTE", "H_VOTE"], prec: 1},
  {name: "ruling", label: "与党得票数", func: "custom", args:["(", "H_JIMIN", "+", "H_KOMEI", ")"]},
  {name: "H_JIMIN", label: "自民党得票数", func: "sum", args:["H_JIMIN"]},
  {name: "H_KOMEI", label: "公明党得票数", func: "sum", args:["H_KOMEI"]},
  {name: "H_RIKKEN", label: "立憲民主党得票数", func: "sum", args:["H_RIKKEN"], prec: "floor"},
  {name: "H_ISHIN", label: "日本維新の会得票数", func: "sum", args:["H_ISHIN"]},
  {name: "H_KYOSAN", label: "共産党得票数", func: "sum", args:["H_KYOSAN"]},
  {name: "H_KOKUMIN", label: "国民民主党得票数", func: "sum", args:["H_KOKUMIN"], prec: "floor"},
  {name: "H_REIWA", label: "れいわ新選組得票数", func: "sum", args:["H_REIWA"]},
  {name: "H_SHAMIN", label: "社民党得票数", func: "sum", args:["H_SHAMIN"]},
  {name: "H_NHK", label: "NHK党得票数", func: "sum", args:["H_NHK"]},
  {name: "H_OTHER", label: "その他得票数", func: "sum", args:["H_OTHER"]},
  {name: "rulingR", label: "与党得票率(%)", func: "custom", args:["(", "H_JIMIN", "+", "H_KOMEI", ")", "/", "H_VALID_VOTE", "*", "100"], prec: 1, noprop:true},
  {name: "h_jiminR", label: "自民党得票率(%)", func: "rate", args:["H_JIMIN", "H_VALID_VOTE"], prec: 1},
  {name: "h_komeiR", label: "公明党得票率(%)", func: "rate", args:["H_KOMEI", "H_VALID_VOTE"], prec: 1},
  {name: "h_rikkenR", label: "立憲民主党得票率(%)", func: "rate", args:["H_RIKKEN", "H_VALID_VOTE"], prec: 1},
  {name: "h_ishinR", label: "日本維新の会得票率(%)", func: "rate", args:["H_ISHIN", "H_VALID_VOTE"], prec: 1},
  {name: "h_kyosanR", label: "共産党得票率(%)", func: "rate", args:["H_KYOSAN", "H_VALID_VOTE"], prec: 1},
  {name: "h_kokuminR", label: "国民民主党得票率(%)", func: "rate", args:["H_KOKUMIN", "H_VALID_VOTE"], prec: 1},
  {name: "h_reiwaR", label: "れいわ新選組得票率(%)", func: "rate", args:["H_REIWA", "H_VALID_VOTE"], prec: 1},
  {name: "h_shaminR", label: "社民党得票率(%)", func: "rate", args:["H_SHAMIN", "H_VALID_VOTE"], prec: 1},
  {name: "h_nhkR", label: "NHK党得票率(%)", func: "rate", args:["H_NHK", "H_VALID_VOTE"], prec: 1},
  {name: "h_otherR", label: "その他得票率(%)", func: "rate", args:["H_OTHER", "H_VALID_VOTE"], prec: 1}
]}];

var Senkyo_estimate = ["H_VOTE", "H_VALID_VOTE", "H_JIMIN", "H_KOMEI", "H_RIKKEN", "H_ISHIN", "H_KYOSAN", "H_KOKUMIN", "H_REIWA", "H_SHAMIN", "H_NHK", "H_OTHER"];

var Dataset = [
  {name: "kokusei2020", label: "2020年国勢調査", date: "2020-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2020", lineFile: "line.geojson", lineObj: "line2020", csvFile: "2020kokusei.csv", csvObj: "kokusei2020", category: Categories_kokusei_2015, attr: [{label: "令和2年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2020/index.html"}]},
  {name: "kokusei2020old", label: "2020年国勢調査[旧市町村単位]", polygonFile: "2020kokusei_old.geojson", polygonObj: "polygon2020Old", lineFile: "2020kokusei_old_l.geojson", lineObj: "line2020Old", csvFile: "2020kokusei_old.csv", csvObj: "kokusei2020Old", category: Categories_kokusei_old, attr: [{label: "令和2年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2020/index.html"}]},
  {name: "kokusei2015", label: "2015年国勢調査", date: "2015-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2015", lineFile: "line.geojson", lineObj: "line2015", csvFile: "2015kokusei.csv", csvObj: "kokusei2015", category: Categories_kokusei_2015, attr: [{label: "平成27年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2015/index.html"}]},
  {name: "kokusei2010", label: "2010年国勢調査", date: "2010-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2010", lineFile: "line.geojson", lineObj: "line2010", csvFile: "2010kokusei.csv", csvObj: "kokusei2010", category: Categories_kokusei_2015, attr: [{label: "平成22年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2010/index.html"}]},
  {name: "kokusei2005", label: "2005年国勢調査", date: "2005-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2005", lineFile: "line.geojson", lineObj: "line2005", csvFile: "2005kokusei.csv", csvObj: "kokusei2005", category: Categories_kokusei_2005, attr: [{label: "平成17年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2005/index.html"}]},
  {name: "kokusei2000", label: "2000年国勢調査", date: "2000-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2000", lineFile: "line.geojson", lineObj: "line2000", csvFile: "2000kokusei.csv", csvObj: "kokusei2000", category: Categories_kokusei_2000, attr: [{label: "平成12年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2000/index.html"}]},
  {name: "kokusei2020move", label: "2020年国勢調査：5年間の人口移動", date: "2020-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2020", lineFile: "line.geojson", lineObj: "line2020", csvFile: "2020kokusei_move.csv", csvObj: "kokusei2020move", fromtoFile: "2020kokusei_move_fromto.csv", fromtoObj: "kokusei2020move_fromto", category: Categories_kokusei2020move, fromto: true, attr: [{label: "令和2年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2020/index.html"}]},
  {name: "kokusei2020work", label: "2020年国勢調査：通勤および通学", date: "2020-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2020", lineFile: "line.geojson", lineObj: "line2020", csvFile: "2020kokusei_work.csv", csvObj: "kokusei2020work", fromtoFile: "2020kokusei_work_fromto.csv", fromtoObj: "kokusei2020work_fromto", category: Categories_kokusei2020work, fromto: true, attr: [{label: "令和2年国勢調査", link: "https://www.stat.go.jp/data/kokusei/2020/index.html"}]},
  {name: "juki2021", label: "2021年住民基本台帳人口", date: "2021-01-01", polygonFile: "polygon.geojson", polygonObj: "polygon2020", lineFile: "line.geojson", lineObj: "line2020", csvFile: "2021juki.csv", csvObj: "juki2021", category: Categories_juki, attr: [{label: "住民基本台帳に基づく人口、人口動態及び世帯数調査", link: "https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00200241&bunya_l=02&tstat=000001039591&cycle=7&year=20210&month=0&tclass1=000001039601&result_back=1&tclass2val=0"}]},
  {name: "shorai2015", label: "将来推計人口", polygonFile: "2015shorai.geojson", polygonObj: "shorai2015", lineFile: "2015shorai_l.geojson", lineObj: "shoraiLine2015", csvFile: "2015shorai.csv", csvObj: "shorai2015", category: Categories_shorai, attr: [{label: "国立社会保障・人口問題研究所", link: "https://www.ipss.go.jp/syoushika/tohkei/Mainmenu.asp"}]},
  {name: "habitable2015", label: "2015年可住地面積", date: "2015-10-01", polygonFile: "polygon.geojson", polygonObj: "polygon2015", lineFile: "line.geojson", lineObj: "line2015", csvFile: "2015habitable.csv", csvObj: "habitable2015", category: Categories_habitable, attr: [{label: "社会・人口統計体系", link: "https://www.e-stat.go.jp/regional-statistics/ssdsview"}]},
  {name: "keizaicensus2016", label: "2016年経済センサス", date: "2016-06-01", polygonFile: "polygon.geojson", polygonObj: "polygon2016", lineFile: "line.geojson", lineObj: "line2016", csvFile: "2016keizai.csv", csvObj: "keizai2016", category: Categories_keizai, attr: [{label: "平成28年経済センサス-活動調査", link: "https://www.stat.go.jp/data/e-census/2016/index.html"}]},
  {name: "senkyo2021", label: "2021年衆院選", polygonFile: "2021shosenkyoku.geojson", polygonObj: "senkyo2021", lineFile: "2021shosenkyoku_l.geojson", lineObj: "senkyoLine2021", csvFile: "2021election.csv", csvObj: "election2021", category: Categories_senkyo, estimate: Senkyo_estimate, attr: [{label: "総務省：選挙関連資料", link: "https://www.soumu.go.jp/senkyo/senkyo_s/data/shugiin49/index.html"}, {label: "各都道府県選管資料"}]}
];
