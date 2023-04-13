window.BENCHMARK_DATA = {
  "lastUpdate": 1681426879023,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "anja@voltrondata.com",
            "name": "anjakefala",
            "username": "anjakefala"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a5ec9862a87cdefe9fe99bf6a72007e180f5ff63",
          "message": "docs: update notany/notall docstrings with  arg\n\nRelated to #5993",
          "timestamp": "2023-04-13T18:53:12-04:00",
          "tree_id": "15c94943ace8d50f7b56c5f01023938f6e212994",
          "url": "https://github.com/ibis-project/ibis/commit/a5ec9862a87cdefe9fe99bf6a72007e180f5ff63"
        },
        "date": 1681426800250,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.82543819061983,
            "unit": "iter/sec",
            "range": "stddev: 0.00007688529729236185",
            "extra": "mean: 63.18940353845794 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2127.7482615858567,
            "unit": "iter/sec",
            "range": "stddev: 0.00009329229632058821",
            "extra": "mean: 469.9804098322602 usec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 104.57196341457541,
            "unit": "iter/sec",
            "range": "stddev: 0.00006530328215412174",
            "extra": "mean: 9.562792620001801 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.82449657436328,
            "unit": "iter/sec",
            "range": "stddev: 0.006445229208615106",
            "extra": "mean: 4.169715830884383 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.88623606472727,
            "unit": "iter/sec",
            "range": "stddev: 0.000509663775980891",
            "extra": "mean: 11.002766131582575 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.50276064088402,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459989816491045",
            "extra": "mean: 6.430753999984518 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2184.9982464347986,
            "unit": "iter/sec",
            "range": "stddev: 0.00007520290687592173",
            "extra": "mean: 457.66627118885447 usec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9312774580313569,
            "unit": "iter/sec",
            "range": "stddev: 0.008491231494009738",
            "extra": "mean: 1.0737938424000049 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8625701436067589,
            "unit": "iter/sec",
            "range": "stddev: 0.003809983824011217",
            "extra": "mean: 1.1593260065999857 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6375131298041343,
            "unit": "iter/sec",
            "range": "stddev: 0.0026860735855622716",
            "extra": "mean: 379.1450319999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.4050974030999,
            "unit": "iter/sec",
            "range": "stddev: 0.0007336336931441001",
            "extra": "mean: 9.76513889795616 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.5733029195487,
            "unit": "iter/sec",
            "range": "stddev: 0.0006577831581866519",
            "extra": "mean: 10.248705025641303 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.4839206737884,
            "unit": "iter/sec",
            "range": "stddev: 0.000765487464251879",
            "extra": "mean: 10.364421273685533 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.00539879906424,
            "unit": "iter/sec",
            "range": "stddev: 0.000047078362756232895",
            "extra": "mean: 6.097360253519323 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2260.3835201670704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007587407992249761",
            "extra": "mean: 442.4028007097166 usec\nrounds: 1410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 273.842406008382,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948448393041405",
            "extra": "mean: 3.6517353706328124 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.90618162285968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006539118813856147",
            "extra": "mean: 9.812947400000308 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 297.7920022495298,
            "unit": "iter/sec",
            "range": "stddev: 0.00022209474449334747",
            "extra": "mean: 3.358048545447728 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.453355524147284,
            "unit": "iter/sec",
            "range": "stddev: 0.026652245246073854",
            "extra": "mean: 26.69987738095377 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.1002035209824,
            "unit": "iter/sec",
            "range": "stddev: 0.0007861378987943837",
            "extra": "mean: 10.40580522580955 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.47285955516107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007738378209969736",
            "extra": "mean: 9.854851872548204 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.03007545997525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002673351575446915",
            "extra": "mean: 3.5967331891903846 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.30077421204126,
            "unit": "iter/sec",
            "range": "stddev: 0.003684233557218454",
            "extra": "mean: 6.086398586956337 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.93114203507564,
            "unit": "iter/sec",
            "range": "stddev: 0.022809676544902364",
            "extra": "mean: 12.510768325581745 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13862.592440195407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015133977866759162",
            "extra": "mean: 72.13657938182189 usec\nrounds: 6897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1924970.8706570636,
            "unit": "iter/sec",
            "range": "stddev: 8.593862538195884e-8",
            "extra": "mean: 519.4883804442522 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2188.071708509603,
            "unit": "iter/sec",
            "range": "stddev: 0.00009350290972843168",
            "extra": "mean: 457.0234129489048 usec\nrounds: 1143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1956374.0856849384,
            "unit": "iter/sec",
            "range": "stddev: 8.242706482509482e-8",
            "extra": "mean: 511.14968620630344 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.21409742085153,
            "unit": "iter/sec",
            "range": "stddev: 0.00041456322098361846",
            "extra": "mean: 15.572904395838805 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.0553726625357,
            "unit": "iter/sec",
            "range": "stddev: 0.0003069285131689549",
            "extra": "mean: 3.8014809957250484 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493922.8059436899,
            "unit": "iter/sec",
            "range": "stddev: 3.185449718910024e-7",
            "extra": "mean: 2.024607869825727 usec\nrounds: 2160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.65353796319954,
            "unit": "iter/sec",
            "range": "stddev: 0.00006794093387248592",
            "extra": "mean: 6.036695698115141 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.39913063909455,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125482320352267",
            "extra": "mean: 10.267032091953961 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.24645468206563,
            "unit": "iter/sec",
            "range": "stddev: 0.0002587825028185702",
            "extra": "mean: 3.55560037594233 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2183.782917521781,
            "unit": "iter/sec",
            "range": "stddev: 0.00008759953624699864",
            "extra": "mean: 457.92097372701693 usec\nrounds: 1218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 746351.5770436102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012362178524742185",
            "extra": "mean: 1.339851124802499 usec\nrounds: 24450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.6570257268975,
            "unit": "iter/sec",
            "range": "stddev: 0.000022485142388692077",
            "extra": "mean: 1.853028779997885 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7177233.430433904,
            "unit": "iter/sec",
            "range": "stddev: 3.735625494312449e-9",
            "extra": "mean: 139.3294518971355 nsec\nrounds: 58821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4450.059333783037,
            "unit": "iter/sec",
            "range": "stddev: 0.00005035960230955686",
            "extra": "mean: 224.71610488615457 usec\nrounds: 839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.38962928564276,
            "unit": "iter/sec",
            "range": "stddev: 0.015570724036667233",
            "extra": "mean: 11.443005402064223 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.22703516441217,
            "unit": "iter/sec",
            "range": "stddev: 0.0008321337665829627",
            "extra": "mean: 9.97734791176455 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.600796701366356,
            "unit": "iter/sec",
            "range": "stddev: 0.0009364263506824503",
            "extra": "mean: 23.47373939999405 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.33347442333327,
            "unit": "iter/sec",
            "range": "stddev: 0.000708071626078151",
            "extra": "mean: 9.868407312497496 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.35406462013621,
            "unit": "iter/sec",
            "range": "stddev: 0.0007986329549166537",
            "extra": "mean: 21.573081199994704 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1773.2851878188712,
            "unit": "iter/sec",
            "range": "stddev: 0.000021516430373262163",
            "extra": "mean: 563.9250848477415 usec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.1047545466304,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722075259097073",
            "extra": "mean: 10.405312460527602 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.1641723098458,
            "unit": "iter/sec",
            "range": "stddev: 0.00029278109201900303",
            "extra": "mean: 3.674252902257642 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17090169537698868,
            "unit": "iter/sec",
            "range": "stddev: 0.09539269196736634",
            "extra": "mean: 5.851317026399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.78231995791893,
            "unit": "iter/sec",
            "range": "stddev: 0.000024305380799759786",
            "extra": "mean: 7.5882713274384805 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5508075.957205758,
            "unit": "iter/sec",
            "range": "stddev: 8.629243743575662e-9",
            "extra": "mean: 181.5515994640036 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.9553356985685,
            "unit": "iter/sec",
            "range": "stddev: 0.000013437096545031549",
            "extra": "mean: 1.322829475204263 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.0704464750525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001547686244244632",
            "extra": "mean: 9.894089072287146 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.22393858164997,
            "unit": "iter/sec",
            "range": "stddev: 0.00028171573329288636",
            "extra": "mean: 8.3178110099999 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10271.522109072892,
            "unit": "iter/sec",
            "range": "stddev: 0.000001664487921342732",
            "extra": "mean: 97.35655430432209 usec\nrounds: 6215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.1265174989667,
            "unit": "iter/sec",
            "range": "stddev: 0.000033969357231924895",
            "extra": "mean: 5.072884220182309 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12072.228234809996,
            "unit": "iter/sec",
            "range": "stddev: 0.000012794475372251169",
            "extra": "mean: 82.8347493560901 usec\nrounds: 4656"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1950087.0275849826,
            "unit": "iter/sec",
            "range": "stddev: 6.673655071375718e-8",
            "extra": "mean: 512.7976269030491 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2141.4441465278983,
            "unit": "iter/sec",
            "range": "stddev: 0.00009607869285678494",
            "extra": "mean: 466.9745889106579 usec\nrounds: 1046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.95614530093191,
            "unit": "iter/sec",
            "range": "stddev: 0.00011269485511125759",
            "extra": "mean: 13.341134285724365 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.3173546764651,
            "unit": "iter/sec",
            "range": "stddev: 0.000013230839972913216",
            "extra": "mean: 860.350227049955 usec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.9005356091749,
            "unit": "iter/sec",
            "range": "stddev: 0.0003099502395553159",
            "extra": "mean: 10.881329400001505 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.53353280250465,
            "unit": "iter/sec",
            "range": "stddev: 0.0003986030620124752",
            "extra": "mean: 4.0236019209313 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2113.219175998813,
            "unit": "iter/sec",
            "range": "stddev: 0.00010023948441073914",
            "extra": "mean: 473.2116816644682 usec\nrounds: 1778"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.718108575958876,
            "unit": "iter/sec",
            "range": "stddev: 0.003418610543647498",
            "extra": "mean: 1.392547079199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.4104762226966,
            "unit": "iter/sec",
            "range": "stddev: 0.003845019395451931",
            "extra": "mean: 4.159552510821874 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.928149819645043,
            "unit": "iter/sec",
            "range": "stddev: 0.004107310169940238",
            "extra": "mean: 1.0774122656000031 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.78979231197142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006782610032846882",
            "extra": "mean: 9.82416780000042 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73772.62507256161,
            "unit": "iter/sec",
            "range": "stddev: 5.49863151800944e-7",
            "extra": "mean: 13.555163572075896 usec\nrounds: 14165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2075.3747054844926,
            "unit": "iter/sec",
            "range": "stddev: 0.0001037019452820997",
            "extra": "mean: 481.84069958901796 usec\nrounds: 1215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8122178317032906,
            "unit": "iter/sec",
            "range": "stddev: 0.0008816415318838804",
            "extra": "mean: 551.8100431999983 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1589632.2482406285,
            "unit": "iter/sec",
            "range": "stddev: 9.358475556587627e-8",
            "extra": "mean: 629.0763169322835 nsec\nrounds: 128189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11618291.778600097,
            "unit": "iter/sec",
            "range": "stddev: 2.768943092145638e-9",
            "extra": "mean: 86.071172858811 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.85825893868329,
            "unit": "iter/sec",
            "range": "stddev: 0.0008083720534007642",
            "extra": "mean: 10.324364808509062 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.0090007899455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005265342310376231",
            "extra": "mean: 12.819033571429735 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.29778418451524,
            "unit": "iter/sec",
            "range": "stddev: 0.0006149523591144854",
            "extra": "mean: 10.173169296704545 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.726619447745,
            "unit": "iter/sec",
            "range": "stddev: 0.000056989063583510194",
            "extra": "mean: 1.4647151165848729 msec\nrounds: 609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 151301.32459197656,
            "unit": "iter/sec",
            "range": "stddev: 2.8591312111138535e-7",
            "extra": "mean: 6.60932746422915 usec\nrounds: 37314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.366417917693553,
            "unit": "iter/sec",
            "range": "stddev: 0.00022686038415530577",
            "extra": "mean: 87.97846491666898 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.98650162846604,
            "unit": "iter/sec",
            "range": "stddev: 0.0005370749197443833",
            "extra": "mean: 17.24539283999661 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.8739244412365785,
            "unit": "iter/sec",
            "range": "stddev: 0.00012040764501758797",
            "extra": "mean: 170.2439331666786 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8452.669544213684,
            "unit": "iter/sec",
            "range": "stddev: 0.000012274274489726895",
            "extra": "mean: 118.30581980867272 usec\nrounds: 4079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.17966423638453,
            "unit": "iter/sec",
            "range": "stddev: 0.00024530897131568583",
            "extra": "mean: 9.076085019233258 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 230.02676457620862,
            "unit": "iter/sec",
            "range": "stddev: 0.012898703955340571",
            "extra": "mean: 4.347320199205327 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6160851.5851293625,
            "unit": "iter/sec",
            "range": "stddev: 6.721350714096008e-9",
            "extra": "mean: 162.31522317668183 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.02788445561805,
            "unit": "iter/sec",
            "range": "stddev: 0.0008622422062699825",
            "extra": "mean: 38.420333458340394 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.27507370073959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007703195147558614",
            "extra": "mean: 23.10799068570759 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.7127763808231,
            "unit": "iter/sec",
            "range": "stddev: 0.00003283613400528933",
            "extra": "mean: 3.4398212987035586 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.74042918488603,
            "unit": "iter/sec",
            "range": "stddev: 0.00004326894705132418",
            "extra": "mean: 9.196211634402776 msec\nrounds: 93"
          }
        ]
      }
    ]
  }
}