window.BENCHMARK_DATA = {
  "lastUpdate": 1683111935836,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "petridish@gmail.com",
            "name": "Bryce Mecum",
            "username": "amoeba"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "1aa172e543cd76d83810db66a139681fc7cbf2b2",
          "message": "docs(guides): update ibis-for-dplyr-users.ipynb with latest\n\nFixes #6125",
          "timestamp": "2023-05-03T03:58:32-07:00",
          "tree_id": "77b4ddf71bb248df4788f187ee84c52c61d7fd6a",
          "url": "https://github.com/ibis-project/ibis/commit/1aa172e543cd76d83810db66a139681fc7cbf2b2"
        },
        "date": 1683111834749,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7910821445280614,
            "unit": "iter/sec",
            "range": "stddev: 0.014943873241293221",
            "extra": "mean: 1.2640912286000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2282868.3016905673,
            "unit": "iter/sec",
            "range": "stddev: 4.846814560060477e-8",
            "extra": "mean: 438.0454182396213 nsec\nrounds: 98030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1160.7559835375732,
            "unit": "iter/sec",
            "range": "stddev: 0.004994187237237604",
            "extra": "mean: 861.5075125026314 usec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 141.79159453264444,
            "unit": "iter/sec",
            "range": "stddev: 0.00015256315481567415",
            "extra": "mean: 7.052604234377036 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1741.973185098449,
            "unit": "iter/sec",
            "range": "stddev: 0.00011240763971072594",
            "extra": "mean: 574.0616494871499 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5004540.389251736,
            "unit": "iter/sec",
            "range": "stddev: 2.611266803112346e-8",
            "extra": "mean: 199.81854920163187 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1749.2088537506297,
            "unit": "iter/sec",
            "range": "stddev: 0.00021632895742830009",
            "extra": "mean: 571.6870217388928 usec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 893790.4873222256,
            "unit": "iter/sec",
            "range": "stddev: 3.9564731845065227e-7",
            "extra": "mean: 1.1188304353025458 usec\nrounds: 97078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.27512661091106,
            "unit": "iter/sec",
            "range": "stddev: 0.00011384377977152072",
            "extra": "mean: 7.392341999991459 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1882007317599483,
            "unit": "iter/sec",
            "range": "stddev: 0.002801806735738925",
            "extra": "mean: 456.9964654000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.72575405303698,
            "unit": "iter/sec",
            "range": "stddev: 0.015104599462796494",
            "extra": "mean: 13.033433328120125 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.64123822853168,
            "unit": "iter/sec",
            "range": "stddev: 0.0009527300892042015",
            "extra": "mean: 11.28143085526215 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 242.35110682171825,
            "unit": "iter/sec",
            "range": "stddev: 0.0003502123820159222",
            "extra": "mean: 4.126244823530491 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 275.24600782526386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000689109137152667",
            "extra": "mean: 3.6331135477715493 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1422816034226981,
            "unit": "iter/sec",
            "range": "stddev: 0.06401268977346067",
            "extra": "mean: 875.4408694000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.37107578982878,
            "unit": "iter/sec",
            "range": "stddev: 0.0009099192286580426",
            "extra": "mean: 29.094230454547592 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.5321267199796,
            "unit": "iter/sec",
            "range": "stddev: 0.0049051066243086",
            "extra": "mean: 5.478487639242205 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.03774178294941,
            "unit": "iter/sec",
            "range": "stddev: 0.000897277733900239",
            "extra": "mean: 26.99948625000559 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10741.074234997359,
            "unit": "iter/sec",
            "range": "stddev: 0.000015962714602921613",
            "extra": "mean: 93.10055755333357 usec\nrounds: 4005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3935.5796104571486,
            "unit": "iter/sec",
            "range": "stddev: 0.000029330368653176998",
            "extra": "mean: 254.09217929245298 usec\nrounds: 1980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 112.86337948396968,
            "unit": "iter/sec",
            "range": "stddev: 0.00007174785578814417",
            "extra": "mean: 8.860269864079633 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1793.7992871451368,
            "unit": "iter/sec",
            "range": "stddev: 0.00011791984261595063",
            "extra": "mean: 557.4759713454439 usec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 151.34107368681933,
            "unit": "iter/sec",
            "range": "stddev: 0.0001305664854438453",
            "extra": "mean: 6.607591552240273 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.57264174688497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005530868928111897",
            "extra": "mean: 60.34041013334293 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1796.2796981752501,
            "unit": "iter/sec",
            "range": "stddev: 0.00011689261929975199",
            "extra": "mean: 556.7061749992774 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4520524.341091938,
            "unit": "iter/sec",
            "range": "stddev: 7.604875875956361e-7",
            "extra": "mean: 221.21327628089279 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 598.4239010509777,
            "unit": "iter/sec",
            "range": "stddev: 0.0002862027224818447",
            "extra": "mean: 1.6710562499989672 msec\nrounds: 476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 20.9733838949542,
            "unit": "iter/sec",
            "range": "stddev: 0.03736647897200629",
            "extra": "mean: 47.67947819047841 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.157226329422137,
            "unit": "iter/sec",
            "range": "stddev: 0.028776761165391924",
            "extra": "mean: 32.09528311111853 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12032.799273920815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032474257796703254",
            "extra": "mean: 83.10618146579918 usec\nrounds: 5417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.826075526687866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005430686868233592",
            "extra": "mean: 22.308444097557352 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3789700.94972166,
            "unit": "iter/sec",
            "range": "stddev: 3.733252462981018e-8",
            "extra": "mean: 263.87306367075473 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.18621255954743,
            "unit": "iter/sec",
            "range": "stddev: 0.0008783195165221125",
            "extra": "mean: 11.088169373336617 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.98052331368399,
            "unit": "iter/sec",
            "range": "stddev: 0.0009612017808798474",
            "extra": "mean: 11.366151988373836 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.51877463731503,
            "unit": "iter/sec",
            "range": "stddev: 0.004183585157066485",
            "extra": "mean: 7.489583414140516 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 374.0759718869754,
            "unit": "iter/sec",
            "range": "stddev: 0.00007046620201138242",
            "extra": "mean: 2.6732537643506897 msec\nrounds: 331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1516.6985024471526,
            "unit": "iter/sec",
            "range": "stddev: 0.00001959377780830874",
            "extra": "mean: 659.3268196589677 usec\nrounds: 1170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.117094599982973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006150023475438529",
            "extra": "mean: 47.35499929998923 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 458.49270730840914,
            "unit": "iter/sec",
            "range": "stddev: 0.00008740796792292542",
            "extra": "mean: 2.181059772729038 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1641687.5001975629,
            "unit": "iter/sec",
            "range": "stddev: 2.7263155135429084e-7",
            "extra": "mean: 609.1293256966741 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 164.55914111079423,
            "unit": "iter/sec",
            "range": "stddev: 0.0001045296276525963",
            "extra": "mean: 6.076842606553962 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.79231847183672,
            "unit": "iter/sec",
            "range": "stddev: 0.000058477501503248417",
            "extra": "mean: 5.855064261364295 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5120748.029938216,
            "unit": "iter/sec",
            "range": "stddev: 2.8772198499226702e-8",
            "extra": "mean: 195.28396909069525 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.8726137252435,
            "unit": "iter/sec",
            "range": "stddev: 0.0011538451120833531",
            "extra": "mean: 12.066712452383939 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 241.765446038121,
            "unit": "iter/sec",
            "range": "stddev: 0.000401529381230005",
            "extra": "mean: 4.136240378380301 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.43972554387312,
            "unit": "iter/sec",
            "range": "stddev: 0.00007789691167575694",
            "extra": "mean: 10.369170944447289 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7911618667342449,
            "unit": "iter/sec",
            "range": "stddev: 0.0063788505287217055",
            "extra": "mean: 1.2639638512000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 234.38724274321675,
            "unit": "iter/sec",
            "range": "stddev: 0.00031653298503818086",
            "extra": "mean: 4.266443805969216 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5796266.876719796,
            "unit": "iter/sec",
            "range": "stddev: 2.194041239381918e-8",
            "extra": "mean: 172.5248373253214 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.87476012637819,
            "unit": "iter/sec",
            "range": "stddev: 0.0003393887360046337",
            "extra": "mean: 12.213776241377015 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 234.96746066171949,
            "unit": "iter/sec",
            "range": "stddev: 0.0005132173769030871",
            "extra": "mean: 4.255908444444956 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.40581497101415,
            "unit": "iter/sec",
            "range": "stddev: 0.0010870694289821607",
            "extra": "mean: 11.847524964286057 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.00880608685125,
            "unit": "iter/sec",
            "range": "stddev: 0.020090555028833685",
            "extra": "mean: 13.156370313952214 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.3825813933404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001679620134354982",
            "extra": "mean: 10.484094531643906 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.26561991001898,
            "unit": "iter/sec",
            "range": "stddev: 0.0005492605272244837",
            "extra": "mean: 4.5194549447251005 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.356269868302462,
            "unit": "iter/sec",
            "range": "stddev: 0.0009787140214463747",
            "extra": "mean: 135.93846037499446 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.40202901225322,
            "unit": "iter/sec",
            "range": "stddev: 0.0003907258048507447",
            "extra": "mean: 22.025447358974137 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.97636864072757,
            "unit": "iter/sec",
            "range": "stddev: 0.00020881239212336634",
            "extra": "mean: 9.092862515462889 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.5295234428211,
            "unit": "iter/sec",
            "range": "stddev: 0.0009866216397125976",
            "extra": "mean: 11.55674919047488 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 243.65057067327547,
            "unit": "iter/sec",
            "range": "stddev: 0.0003258919959470951",
            "extra": "mean: 4.1042382836892894 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.61544773031308,
            "unit": "iter/sec",
            "range": "stddev: 0.0008665284099400594",
            "extra": "mean: 11.413512410255269 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.430806716174994,
            "unit": "iter/sec",
            "range": "stddev: 0.005385813256948682",
            "extra": "mean: 698.9064202000122 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1910.8171074514742,
            "unit": "iter/sec",
            "range": "stddev: 0.00011944210530834477",
            "extra": "mean: 523.3363235551811 usec\nrounds: 1159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1840.6225201183258,
            "unit": "iter/sec",
            "range": "stddev: 0.00010393252378333475",
            "extra": "mean: 543.2944501492432 usec\nrounds: 1675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9763160.178346345,
            "unit": "iter/sec",
            "range": "stddev: 1.0255265608689592e-8",
            "extra": "mean: 102.42585205329841 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.36345613127222,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118530201506144",
            "extra": "mean: 24.774885399995128 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7375.102755700495,
            "unit": "iter/sec",
            "range": "stddev: 0.000014104736280546507",
            "extra": "mean: 135.59133114817448 usec\nrounds: 3355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.471385874549725,
            "unit": "iter/sec",
            "range": "stddev: 0.000812741236576783",
            "extra": "mean: 19.428270348835795 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150720.59927513587,
            "unit": "iter/sec",
            "range": "stddev: 9.166228163021422e-7",
            "extra": "mean: 6.634793152424576 usec\nrounds: 36099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.92151448790113,
            "unit": "iter/sec",
            "range": "stddev: 0.00035323935546646224",
            "extra": "mean: 4.1165559259256375 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 583.622797039295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007022218388806196",
            "extra": "mean: 1.713435467348049 msec\nrounds: 490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.74372270922281,
            "unit": "iter/sec",
            "range": "stddev: 0.00033202895187037506",
            "extra": "mean: 11.941193532466029 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.71041989157933,
            "unit": "iter/sec",
            "range": "stddev: 0.0010753090962039298",
            "extra": "mean: 12.389973950616653 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.46580633593537,
            "unit": "iter/sec",
            "range": "stddev: 0.001012267663922868",
            "extra": "mean: 11.700585800002393 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 90.40489459331238,
            "unit": "iter/sec",
            "range": "stddev: 0.00017505714493468166",
            "extra": "mean: 11.06134800000059 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1640790.621875763,
            "unit": "iter/sec",
            "range": "stddev: 2.2079661085174034e-7",
            "extra": "mean: 609.4622840157347 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9321.78846938621,
            "unit": "iter/sec",
            "range": "stddev: 0.000005543522697482897",
            "extra": "mean: 107.27555160515722 usec\nrounds: 4360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.33758422990373,
            "unit": "iter/sec",
            "range": "stddev: 0.0009220590971675994",
            "extra": "mean: 11.449824366193168 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1006.639560957672,
            "unit": "iter/sec",
            "range": "stddev: 0.00003864332463252762",
            "extra": "mean: 993.4042320457231 usec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6796128288285063,
            "unit": "iter/sec",
            "range": "stddev: 0.01492775316351668",
            "extra": "mean: 1.4714260202000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.43312690107373,
            "unit": "iter/sec",
            "range": "stddev: 0.0002994515898756173",
            "extra": "mean: 4.025228086422633 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.6051940163508,
            "unit": "iter/sec",
            "range": "stddev: 0.02205702708330237",
            "extra": "mean: 13.773119313954297 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14800738869224392,
            "unit": "iter/sec",
            "range": "stddev: 0.09435929743067246",
            "extra": "mean: 6.756419451999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1456211.7069779285,
            "unit": "iter/sec",
            "range": "stddev: 1.6446774709524096e-7",
            "extra": "mean: 686.7133365349031 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.5209763645457,
            "unit": "iter/sec",
            "range": "stddev: 0.0009860584866849729",
            "extra": "mean: 12.419124123292564 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1862.4736832716796,
            "unit": "iter/sec",
            "range": "stddev: 0.00011419206553288802",
            "extra": "mean: 536.9203382478772 usec\nrounds: 1153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.45026537688321,
            "unit": "iter/sec",
            "range": "stddev: 0.0010811654901345706",
            "extra": "mean: 11.983185379743714 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.41597799504926,
            "unit": "iter/sec",
            "range": "stddev: 0.001121552960273605",
            "extra": "mean: 12.59192451249973 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}