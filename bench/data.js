window.BENCHMARK_DATA = {
  "lastUpdate": 1683149621985,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ianmcook@gmail.com",
            "name": "Ian Cook",
            "username": "ianmcook"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "6e7c6a23048c24b7598147f759bbf30a62069e37",
          "message": "docs: link to Ibis for dplyr users",
          "timestamp": "2023-05-03T16:26:03-05:00",
          "tree_id": "799149a2c3352d798d79e09d3498acdf516d1875",
          "url": "https://github.com/ibis-project/ibis/commit/6e7c6a23048c24b7598147f759bbf30a62069e37"
        },
        "date": 1683149526934,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.552066104691,
            "unit": "iter/sec",
            "range": "stddev: 0.0008709192563632076",
            "extra": "mean: 6.9661136000000905 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 243.50097664267253,
            "unit": "iter/sec",
            "range": "stddev: 0.00035921523393187536",
            "extra": "mean: 4.106759709089209 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.95719682943505,
            "unit": "iter/sec",
            "range": "stddev: 0.0008481422471576535",
            "extra": "mean: 11.499910720000344 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6879.821674985008,
            "unit": "iter/sec",
            "range": "stddev: 0.000038108695460283405",
            "extra": "mean: 145.3526046519482 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 75.2928408379655,
            "unit": "iter/sec",
            "range": "stddev: 0.0016881276618050903",
            "extra": "mean: 13.281475222220093 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 69.33062674319409,
            "unit": "iter/sec",
            "range": "stddev: 0.015587172157770003",
            "extra": "mean: 14.423639983871427 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6990354154582988,
            "unit": "iter/sec",
            "range": "stddev: 0.015909068091052338",
            "extra": "mean: 1.4305426848000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.98452968013729,
            "unit": "iter/sec",
            "range": "stddev: 0.0009005805618149893",
            "extra": "mean: 11.36563443181935 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.33787058538417,
            "unit": "iter/sec",
            "range": "stddev: 0.0008785348576601647",
            "extra": "mean: 11.19346133333518 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.7888223137074,
            "unit": "iter/sec",
            "range": "stddev: 0.0003477991602545088",
            "extra": "mean: 7.102836599995044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147721.0869363143,
            "unit": "iter/sec",
            "range": "stddev: 0.000001496836546120037",
            "extra": "mean: 6.769514229414798 usec\nrounds: 30395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 137.48341940916748,
            "unit": "iter/sec",
            "range": "stddev: 0.013145792999979452",
            "extra": "mean: 7.273604368421167 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.02444765563685,
            "unit": "iter/sec",
            "range": "stddev: 0.0008122490417731012",
            "extra": "mean: 10.986059523076637 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.58260406948921,
            "unit": "iter/sec",
            "range": "stddev: 0.028489838044096487",
            "extra": "mean: 30.691223999999853 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.2047831120505,
            "unit": "iter/sec",
            "range": "stddev: 0.0007802862856484163",
            "extra": "mean: 23.693996894737637 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.89990744209034,
            "unit": "iter/sec",
            "range": "stddev: 0.0014697146762548713",
            "extra": "mean: 59.1719217058807 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 65.3383373606542,
            "unit": "iter/sec",
            "range": "stddev: 0.05826556664069689",
            "extra": "mean: 15.304950208331832 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.581160495908474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009701628361966669",
            "extra": "mean: 37.62062984999943 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.31851684759998,
            "unit": "iter/sec",
            "range": "stddev: 0.000879927569619956",
            "extra": "mean: 11.584999795183624 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 244.0744945343691,
            "unit": "iter/sec",
            "range": "stddev: 0.00033654591415133254",
            "extra": "mean: 4.097109785714156 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10775.695946977792,
            "unit": "iter/sec",
            "range": "stddev: 0.00001977907989086944",
            "extra": "mean: 92.80143063803366 usec\nrounds: 5046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.260399594805674,
            "unit": "iter/sec",
            "range": "stddev: 0.005754204023102861",
            "extra": "mean: 442.39965459999553 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 239.0422016219025,
            "unit": "iter/sec",
            "range": "stddev: 0.00047149418820348663",
            "extra": "mean: 4.183361737864675 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.825395258457,
            "unit": "iter/sec",
            "range": "stddev: 0.0003307617975219064",
            "extra": "mean: 4.018882393259304 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3779.020387276276,
            "unit": "iter/sec",
            "range": "stddev: 0.00004035787950301983",
            "extra": "mean: 264.61884232404174 usec\nrounds: 1687"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 670.5517882817442,
            "unit": "iter/sec",
            "range": "stddev: 0.00009360071098720627",
            "extra": "mean: 1.4913091240311962 msec\nrounds: 516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1857.7513575320281,
            "unit": "iter/sec",
            "range": "stddev: 0.00010117304010093198",
            "extra": "mean: 538.2851671433967 usec\nrounds: 1047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2156528909461457,
            "unit": "iter/sec",
            "range": "stddev: 0.003053137453603059",
            "extra": "mean: 822.6032343999918 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5106740.281659046,
            "unit": "iter/sec",
            "range": "stddev: 4.6406753053815594e-8",
            "extra": "mean: 195.81963147665138 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12579.953649082754,
            "unit": "iter/sec",
            "range": "stddev: 0.00000788024310663251",
            "extra": "mean: 79.49154884786982 usec\nrounds: 5036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1823.4753734262908,
            "unit": "iter/sec",
            "range": "stddev: 0.00014978330644883542",
            "extra": "mean: 548.4033481192623 usec\nrounds: 1037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.3557204330295,
            "unit": "iter/sec",
            "range": "stddev: 0.00106809500037037",
            "extra": "mean: 11.996777123454054 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4543707.760393984,
            "unit": "iter/sec",
            "range": "stddev: 5.084788439463757e-8",
            "extra": "mean: 220.08457689953127 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.35114162419083,
            "unit": "iter/sec",
            "range": "stddev: 0.0006440779899714014",
            "extra": "mean: 21.11881499999819 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.30599459345146,
            "unit": "iter/sec",
            "range": "stddev: 0.021989164317769542",
            "extra": "mean: 13.830111951610816 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1655176.4924196275,
            "unit": "iter/sec",
            "range": "stddev: 2.4637874460748463e-7",
            "extra": "mean: 604.1651779008445 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 175.45173367618156,
            "unit": "iter/sec",
            "range": "stddev: 0.00027869102234365353",
            "extra": "mean: 5.699573204820118 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.84771656211656,
            "unit": "iter/sec",
            "range": "stddev: 0.0009594535747438374",
            "extra": "mean: 11.514407512197106 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2183926.020707253,
            "unit": "iter/sec",
            "range": "stddev: 6.26383677994692e-8",
            "extra": "mean: 457.89096815478086 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 368.17044027752877,
            "unit": "iter/sec",
            "range": "stddev: 0.00025708413097330315",
            "extra": "mean: 2.7161333192479953 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.804374002686746,
            "unit": "iter/sec",
            "range": "stddev: 0.018089159089023213",
            "extra": "mean: 1.243202784599987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1556.3987869961686,
            "unit": "iter/sec",
            "range": "stddev: 0.00004124094573505518",
            "extra": "mean: 642.5088533575564 usec\nrounds: 1132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.92295530832889,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652194113730242",
            "extra": "mean: 18.20732322916996 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 457.95253745003083,
            "unit": "iter/sec",
            "range": "stddev: 0.00007191960366512344",
            "extra": "mean: 2.183632403410614 msec\nrounds: 352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 591.0798957639729,
            "unit": "iter/sec",
            "range": "stddev: 0.0000923134282671686",
            "extra": "mean: 1.6918186647297422 msec\nrounds: 516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.7657555753786,
            "unit": "iter/sec",
            "range": "stddev: 0.0010252725095138613",
            "extra": "mean: 11.525284294115782 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.28169529807087,
            "unit": "iter/sec",
            "range": "stddev: 0.0044834894267089245",
            "extra": "mean: 5.486014371134627 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 256.03762284372016,
            "unit": "iter/sec",
            "range": "stddev: 0.0006538526461026113",
            "extra": "mean: 3.9056760053204305 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 234.7151499829863,
            "unit": "iter/sec",
            "range": "stddev: 0.0005873739921256546",
            "extra": "mean: 4.260483399015728 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.24475994151169,
            "unit": "iter/sec",
            "range": "stddev: 0.0012408950396535798",
            "extra": "mean: 29.201547965526675 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.82195717240202,
            "unit": "iter/sec",
            "range": "stddev: 0.0011202002875768014",
            "extra": "mean: 27.157709062501922 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6082964.789867471,
            "unit": "iter/sec",
            "range": "stddev: 2.0541910959382587e-8",
            "extra": "mean: 164.39352101226018 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.43537465923148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941940180558029",
            "extra": "mean: 46.65185544444562 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.27829254746122,
            "unit": "iter/sec",
            "range": "stddev: 0.0010341058000883426",
            "extra": "mean: 11.20093106023942 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.47218606902732,
            "unit": "iter/sec",
            "range": "stddev: 0.0010605267308232407",
            "extra": "mean: 11.564412159092864 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 240.94373327520475,
            "unit": "iter/sec",
            "range": "stddev: 0.000372343108997051",
            "extra": "mean: 4.150346582609829 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.22044353573081,
            "unit": "iter/sec",
            "range": "stddev: 0.0005037577994839234",
            "extra": "mean: 11.208193552630368 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.59075860416128,
            "unit": "iter/sec",
            "range": "stddev: 0.00021761844384957335",
            "extra": "mean: 8.961315547170315 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 66.2971002259686,
            "unit": "iter/sec",
            "range": "stddev: 0.025623241960969184",
            "extra": "mean: 15.083615974025657 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.14234515467507,
            "unit": "iter/sec",
            "range": "stddev: 0.0009271795067057186",
            "extra": "mean: 10.97184846739382 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1778.8510048711623,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317933173859133",
            "extra": "mean: 562.160629114875 usec\nrounds: 1367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 110.71904696940594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002771051931272857",
            "extra": "mean: 9.031869650000885 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.582864931867778,
            "unit": "iter/sec",
            "range": "stddev: 0.0016906244092385172",
            "extra": "mean: 131.8762774999982 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1910.6128346889045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001007759164333058",
            "extra": "mean: 523.3922759462803 usec\nrounds: 1243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 98.18451984559103,
            "unit": "iter/sec",
            "range": "stddev: 0.0003069134991670674",
            "extra": "mean: 10.18490492770796 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1452589.1294998028,
            "unit": "iter/sec",
            "range": "stddev: 3.440586163340144e-7",
            "extra": "mean: 688.4259145904174 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.212733214588255,
            "unit": "iter/sec",
            "range": "stddev: 0.0004543757575885529",
            "extra": "mean: 22.617918578941055 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1645017.312869211,
            "unit": "iter/sec",
            "range": "stddev: 3.6389153833796544e-7",
            "extra": "mean: 607.8963377326511 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14719486972116388,
            "unit": "iter/sec",
            "range": "stddev: 0.058666381574548274",
            "extra": "mean: 6.7937150384 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1015.8032815971279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000903703935094044",
            "extra": "mean: 984.44257674352 usec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.90121468405601,
            "unit": "iter/sec",
            "range": "stddev: 0.0004950316661944481",
            "extra": "mean: 4.506509806283867 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9982073.701560877,
            "unit": "iter/sec",
            "range": "stddev: 1.7318117109605002e-8",
            "extra": "mean: 100.17958491363378 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3834093.8988843765,
            "unit": "iter/sec",
            "range": "stddev: 5.903508506632978e-8",
            "extra": "mean: 260.8178167703512 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9515.841440000157,
            "unit": "iter/sec",
            "range": "stddev: 0.000007826824117415856",
            "extra": "mean: 105.08792168356932 usec\nrounds: 3754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4553133053639946,
            "unit": "iter/sec",
            "range": "stddev: 0.005116285497206165",
            "extra": "mean: 687.1372620000102 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 93.88863231137772,
            "unit": "iter/sec",
            "range": "stddev: 0.0009857996795734115",
            "extra": "mean: 10.650916680557684 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5361953.910829964,
            "unit": "iter/sec",
            "range": "stddev: 4.717850850964141e-8",
            "extra": "mean: 186.49917858871711 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 98.73197074441795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006447717055152268",
            "extra": "mean: 10.12843147422475 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1859.4857340809262,
            "unit": "iter/sec",
            "range": "stddev: 0.00010708146479441093",
            "extra": "mean: 537.7830986663968 usec\nrounds: 1125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.823781483102997,
            "unit": "iter/sec",
            "range": "stddev: 0.010306249041587343",
            "extra": "mean: 1.2139141513999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.49957313453639,
            "unit": "iter/sec",
            "range": "stddev: 0.00042824948007252265",
            "extra": "mean: 11.560750692314496 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.37094217214438,
            "unit": "iter/sec",
            "range": "stddev: 0.0008740132122016433",
            "extra": "mean: 11.189319209299837 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 881728.4603629918,
            "unit": "iter/sec",
            "range": "stddev: 5.530248428253954e-7",
            "extra": "mean: 1.134136012336857 usec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.40605510201337,
            "unit": "iter/sec",
            "range": "stddev: 0.0003799024678780594",
            "extra": "mean: 4.1596290059152725 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1789.701160643045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001109802487598518",
            "extra": "mean: 558.7525012503747 usec\nrounds: 1600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1784.8050100530088,
            "unit": "iter/sec",
            "range": "stddev: 0.00010683797595393179",
            "extra": "mean: 560.285294117535 usec\nrounds: 1530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 143.34151503998396,
            "unit": "iter/sec",
            "range": "stddev: 0.00023147835468671977",
            "extra": "mean: 6.9763459645383135 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1810.9280436148074,
            "unit": "iter/sec",
            "range": "stddev: 0.00010968672121295453",
            "extra": "mean: 552.203056066155 usec\nrounds: 1195"
          }
        ]
      }
    ]
  }
}