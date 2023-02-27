window.BENCHMARK_DATA = {
  "lastUpdate": 1677528430320,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "bf9a7cc390991e29cc0552197b4b5f9a4973ee1a",
          "message": "feat(examples): add wowah_data data to examples",
          "timestamp": "2023-02-27T20:58:59+01:00",
          "tree_id": "876ba67b2d4d6a43981f68bd31d7a0847bdf287a",
          "url": "https://github.com/ibis-project/ibis/commit/bf9a7cc390991e29cc0552197b4b5f9a4973ee1a"
        },
        "date": 1677528343473,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.36290991821518,
            "unit": "iter/sec",
            "range": "stddev: 0.00009007745575516898",
            "extra": "mean: 8.308207243240341 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11700.923001742562,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738236933662958",
            "extra": "mean: 85.46334334915927 usec\nrounds: 6390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13274.885520151103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032527365110269443",
            "extra": "mean: 75.33021648149155 usec\nrounds: 1723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.11490956875747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287195699087995",
            "extra": "mean: 5.073182958040933 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.40410949944943,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940363124001973",
            "extra": "mean: 36.49087739997867 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.3561307799572,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012940687331993",
            "extra": "mean: 9.228827135132178 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.7873801614403,
            "unit": "iter/sec",
            "range": "stddev: 0.00018813192931750532",
            "extra": "mean: 3.186871312305519 msec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.803889773337156,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718723967055611",
            "extra": "mean: 554.3575969999665 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9302568303142197,
            "unit": "iter/sec",
            "range": "stddev: 0.001987740511711637",
            "extra": "mean: 1.0749719511999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5716068.302487982,
            "unit": "iter/sec",
            "range": "stddev: 1.087759593355659e-8",
            "extra": "mean: 174.94542526122962 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.5677274093869,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024222930140152",
            "extra": "mean: 94.62772469998981 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.49840330310129,
            "unit": "iter/sec",
            "range": "stddev: 0.00016895338066055384",
            "extra": "mean: 20.202671869566057 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1902540.761195638,
            "unit": "iter/sec",
            "range": "stddev: 9.165958709197821e-8",
            "extra": "mean: 525.6129174186824 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.608827896508522,
            "unit": "iter/sec",
            "range": "stddev: 0.00013637515624271478",
            "extra": "mean: 178.2903698333295 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5233.786017909284,
            "unit": "iter/sec",
            "range": "stddev: 0.000036025325620698755",
            "extra": "mean: 191.06627526959255 usec\nrounds: 1395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 692.8972620821659,
            "unit": "iter/sec",
            "range": "stddev: 0.000020280689228333195",
            "extra": "mean: 1.4432154010754583 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493634.19943677797,
            "unit": "iter/sec",
            "range": "stddev: 5.118483278674228e-7",
            "extra": "mean: 2.025791570237578 usec\nrounds: 2159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.0694896233051,
            "unit": "iter/sec",
            "range": "stddev: 0.0005388667103397541",
            "extra": "mean: 7.038808984613682 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5518.200274079615,
            "unit": "iter/sec",
            "range": "stddev: 0.00008713048264445209",
            "extra": "mean: 181.21850428250193 usec\nrounds: 700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9209985748521188,
            "unit": "iter/sec",
            "range": "stddev: 0.002168698896044299",
            "extra": "mean: 1.0857780102000334 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5824.72627898569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004816445118054976",
            "extra": "mean: 171.681887200052 usec\nrounds: 2633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.39536808606707,
            "unit": "iter/sec",
            "range": "stddev: 0.0005468314234813376",
            "extra": "mean: 6.973725953266439 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1190.3036210955775,
            "unit": "iter/sec",
            "range": "stddev: 0.000012520404958124776",
            "extra": "mean: 840.121782608358 usec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5586.430005895329,
            "unit": "iter/sec",
            "range": "stddev: 0.00004526142510003984",
            "extra": "mean: 179.00519633195182 usec\nrounds: 2236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6421203.817407487,
            "unit": "iter/sec",
            "range": "stddev: 9.887420110455893e-9",
            "extra": "mean: 155.73403810811595 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.4457410033121,
            "unit": "iter/sec",
            "range": "stddev: 0.0006230844248406051",
            "extra": "mean: 7.020216911762552 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.9750876195805,
            "unit": "iter/sec",
            "range": "stddev: 0.000025196087737556587",
            "extra": "mean: 3.0677190925921924 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.3230084284639,
            "unit": "iter/sec",
            "range": "stddev: 0.00009703341987476255",
            "extra": "mean: 1.8304189729745586 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1884344.3539695656,
            "unit": "iter/sec",
            "range": "stddev: 1.0843780673554948e-7",
            "extra": "mean: 530.6885643769924 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18037298417793104,
            "unit": "iter/sec",
            "range": "stddev: 0.10262259361284089",
            "extra": "mean: 5.544067502999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.86064532666296,
            "unit": "iter/sec",
            "range": "stddev: 0.000020172457514981784",
            "extra": "mean: 5.105670913787536 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.3781956883729,
            "unit": "iter/sec",
            "range": "stddev: 0.00001690509389415814",
            "extra": "mean: 1.3344396804625571 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.34235560823632,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996894951894474",
            "extra": "mean: 9.492857780007853 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11931851.052703287,
            "unit": "iter/sec",
            "range": "stddev: 3.908418471450051e-9",
            "extra": "mean: 83.80929292382855 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.96070765239175,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712282933589279",
            "extra": "mean: 9.807699681815052 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 141.8091995284529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005897929683977555",
            "extra": "mean: 7.051728684212464 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6798596.502087074,
            "unit": "iter/sec",
            "range": "stddev: 4.806587746037035e-7",
            "extra": "mean: 147.08918225871005 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 359.045552164918,
            "unit": "iter/sec",
            "range": "stddev: 0.000036106012198912375",
            "extra": "mean: 2.785161921573329 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8548410552095946,
            "unit": "iter/sec",
            "range": "stddev: 0.0015510528240766845",
            "extra": "mean: 1.1698081110000202 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5889.858066621397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004167222635231172",
            "extra": "mean: 169.7833782561132 usec\nrounds: 2226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.59323703176585,
            "unit": "iter/sec",
            "range": "stddev: 0.02240424274796876",
            "extra": "mean: 28.095224918922973 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.93590912065457,
            "unit": "iter/sec",
            "range": "stddev: 0.00022309410594221262",
            "extra": "mean: 3.1853635437915813 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.00310313397188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004712016717559603",
            "extra": "mean: 7.299104743796389 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1809363.6836228617,
            "unit": "iter/sec",
            "range": "stddev: 9.198561727276778e-8",
            "extra": "mean: 552.6804859914703 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6712714802753802,
            "unit": "iter/sec",
            "range": "stddev: 0.05871412559283706",
            "extra": "mean: 1.4897102429999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.18927822420207,
            "unit": "iter/sec",
            "range": "stddev: 0.00008490090774152538",
            "extra": "mean: 13.29976857894771 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.1246555672295,
            "unit": "iter/sec",
            "range": "stddev: 0.0001796638632502996",
            "extra": "mean: 3.3430878444429863 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.29057368606453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002171118140960533",
            "extra": "mean: 3.3637124366277034 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.03065524509134,
            "unit": "iter/sec",
            "range": "stddev: 0.00025451086953832334",
            "extra": "mean: 3.520746727627324 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.38844035945206,
            "unit": "iter/sec",
            "range": "stddev: 0.00006811163952553709",
            "extra": "mean: 6.15807379999751 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5115716772088716,
            "unit": "iter/sec",
            "range": "stddev: 0.0021702852075166897",
            "extra": "mean: 398.15706200004115 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1661016.3669487976,
            "unit": "iter/sec",
            "range": "stddev: 8.683732045094767e-8",
            "extra": "mean: 602.0410273481826 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.68212969672242,
            "unit": "iter/sec",
            "range": "stddev: 0.00048048055737591174",
            "extra": "mean: 22.380311923076334 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.047398039822006,
            "unit": "iter/sec",
            "range": "stddev: 0.024631940308306673",
            "extra": "mean: 31.20378131033923 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.7033192415342,
            "unit": "iter/sec",
            "range": "stddev: 0.000044357580022336905",
            "extra": "mean: 569.8969102265376 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70408.34001020425,
            "unit": "iter/sec",
            "range": "stddev: 7.109309609237572e-7",
            "extra": "mean: 14.202862897421959 usec\nrounds: 13158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.92698070947142,
            "unit": "iter/sec",
            "range": "stddev: 0.00016386173480877192",
            "extra": "mean: 14.099007035082522 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.10593160963829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000617215078345034",
            "extra": "mean: 10.090213408606388 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.4899508972495,
            "unit": "iter/sec",
            "range": "stddev: 0.00007920469051004679",
            "extra": "mean: 6.515084500023249 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.28043516296015,
            "unit": "iter/sec",
            "range": "stddev: 0.00008814836577854075",
            "extra": "mean: 10.279559279569849 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.2012835343901,
            "unit": "iter/sec",
            "range": "stddev: 0.0006114801050823137",
            "extra": "mean: 7.451493559998198 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.97114863479604,
            "unit": "iter/sec",
            "range": "stddev: 0.00010813432055291363",
            "extra": "mean: 9.261733459763605 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140726.14258666133,
            "unit": "iter/sec",
            "range": "stddev: 4.472195168254811e-7",
            "extra": "mean: 7.1060002187168925 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11566.01129951173,
            "unit": "iter/sec",
            "range": "stddev: 0.000022894458659992468",
            "extra": "mean: 86.46023024741605 usec\nrounds: 4278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.240168407404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006571564516809172",
            "extra": "mean: 7.394252844965053 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.52461646699217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250513255281407",
            "extra": "mean: 9.753755092777649 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.14762114686503,
            "unit": "iter/sec",
            "range": "stddev: 0.0005922589409597318",
            "extra": "mean: 10.621617283776674 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5480.435474180111,
            "unit": "iter/sec",
            "range": "stddev: 0.00004601092850172769",
            "extra": "mean: 182.46725186552862 usec\nrounds: 3351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5833.79024891552,
            "unit": "iter/sec",
            "range": "stddev: 0.000045488115311359666",
            "extra": "mean: 171.4151447570293 usec\nrounds: 3385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8097.573290776641,
            "unit": "iter/sec",
            "range": "stddev: 0.000012873524872828699",
            "extra": "mean: 123.49378808821989 usec\nrounds: 4483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.75216586492877,
            "unit": "iter/sec",
            "range": "stddev: 0.013638339672268747",
            "extra": "mean: 8.791041404762497 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 305.5362266135491,
            "unit": "iter/sec",
            "range": "stddev: 0.000037040076704945514",
            "extra": "mean: 3.272934313170099 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.67469107577896,
            "unit": "iter/sec",
            "range": "stddev: 0.0002727988875524747",
            "extra": "mean: 17.64456022641418 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.10858121905242,
            "unit": "iter/sec",
            "range": "stddev: 0.00010587382234570552",
            "extra": "mean: 62.07871360000657 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.7637557519729,
            "unit": "iter/sec",
            "range": "stddev: 0.00019979777153827032",
            "extra": "mean: 3.1569268321941593 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5352.574362051771,
            "unit": "iter/sec",
            "range": "stddev: 0.000046601305830431736",
            "extra": "mean: 186.82598920805574 usec\nrounds: 3243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.55384934788522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006150277312577969",
            "extra": "mean: 9.750974793815686 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.89679408499246,
            "unit": "iter/sec",
            "range": "stddev: 0.0006253526018333321",
            "extra": "mean: 9.354817499998278 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.60432071924845,
            "unit": "iter/sec",
            "range": "stddev: 0.00020171965341575195",
            "extra": "mean: 3.2195302296000192 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.88718703202676,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788772787319379",
            "extra": "mean: 7.04785274074311 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.63276189118493,
            "unit": "iter/sec",
            "range": "stddev: 0.0003048071647552209",
            "extra": "mean: 15.007632456134065 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745102.1552755276,
            "unit": "iter/sec",
            "range": "stddev: 1.6751001389341064e-7",
            "extra": "mean: 1.3420978491603142 usec\nrounds: 22780"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "bf9a7cc390991e29cc0552197b4b5f9a4973ee1a",
          "message": "feat(examples): add wowah_data data to examples",
          "timestamp": "2023-02-27T20:58:59+01:00",
          "tree_id": "876ba67b2d4d6a43981f68bd31d7a0847bdf287a",
          "url": "https://github.com/ibis-project/ibis/commit/bf9a7cc390991e29cc0552197b4b5f9a4973ee1a"
        },
        "date": 1677528343473,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.36290991821518,
            "unit": "iter/sec",
            "range": "stddev: 0.00009007745575516898",
            "extra": "mean: 8.308207243240341 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11700.923001742562,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738236933662958",
            "extra": "mean: 85.46334334915927 usec\nrounds: 6390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13274.885520151103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032527365110269443",
            "extra": "mean: 75.33021648149155 usec\nrounds: 1723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.11490956875747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287195699087995",
            "extra": "mean: 5.073182958040933 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.40410949944943,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940363124001973",
            "extra": "mean: 36.49087739997867 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.3561307799572,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012940687331993",
            "extra": "mean: 9.228827135132178 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.7873801614403,
            "unit": "iter/sec",
            "range": "stddev: 0.00018813192931750532",
            "extra": "mean: 3.186871312305519 msec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.803889773337156,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718723967055611",
            "extra": "mean: 554.3575969999665 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9302568303142197,
            "unit": "iter/sec",
            "range": "stddev: 0.001987740511711637",
            "extra": "mean: 1.0749719511999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5716068.302487982,
            "unit": "iter/sec",
            "range": "stddev: 1.087759593355659e-8",
            "extra": "mean: 174.94542526122962 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.5677274093869,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024222930140152",
            "extra": "mean: 94.62772469998981 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.49840330310129,
            "unit": "iter/sec",
            "range": "stddev: 0.00016895338066055384",
            "extra": "mean: 20.202671869566057 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1902540.761195638,
            "unit": "iter/sec",
            "range": "stddev: 9.165958709197821e-8",
            "extra": "mean: 525.6129174186824 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.608827896508522,
            "unit": "iter/sec",
            "range": "stddev: 0.00013637515624271478",
            "extra": "mean: 178.2903698333295 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5233.786017909284,
            "unit": "iter/sec",
            "range": "stddev: 0.000036025325620698755",
            "extra": "mean: 191.06627526959255 usec\nrounds: 1395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 692.8972620821659,
            "unit": "iter/sec",
            "range": "stddev: 0.000020280689228333195",
            "extra": "mean: 1.4432154010754583 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493634.19943677797,
            "unit": "iter/sec",
            "range": "stddev: 5.118483278674228e-7",
            "extra": "mean: 2.025791570237578 usec\nrounds: 2159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.0694896233051,
            "unit": "iter/sec",
            "range": "stddev: 0.0005388667103397541",
            "extra": "mean: 7.038808984613682 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5518.200274079615,
            "unit": "iter/sec",
            "range": "stddev: 0.00008713048264445209",
            "extra": "mean: 181.21850428250193 usec\nrounds: 700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9209985748521188,
            "unit": "iter/sec",
            "range": "stddev: 0.002168698896044299",
            "extra": "mean: 1.0857780102000334 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5824.72627898569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004816445118054976",
            "extra": "mean: 171.681887200052 usec\nrounds: 2633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.39536808606707,
            "unit": "iter/sec",
            "range": "stddev: 0.0005468314234813376",
            "extra": "mean: 6.973725953266439 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1190.3036210955775,
            "unit": "iter/sec",
            "range": "stddev: 0.000012520404958124776",
            "extra": "mean: 840.121782608358 usec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5586.430005895329,
            "unit": "iter/sec",
            "range": "stddev: 0.00004526142510003984",
            "extra": "mean: 179.00519633195182 usec\nrounds: 2236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6421203.817407487,
            "unit": "iter/sec",
            "range": "stddev: 9.887420110455893e-9",
            "extra": "mean: 155.73403810811595 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.4457410033121,
            "unit": "iter/sec",
            "range": "stddev: 0.0006230844248406051",
            "extra": "mean: 7.020216911762552 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.9750876195805,
            "unit": "iter/sec",
            "range": "stddev: 0.000025196087737556587",
            "extra": "mean: 3.0677190925921924 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.3230084284639,
            "unit": "iter/sec",
            "range": "stddev: 0.00009703341987476255",
            "extra": "mean: 1.8304189729745586 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1884344.3539695656,
            "unit": "iter/sec",
            "range": "stddev: 1.0843780673554948e-7",
            "extra": "mean: 530.6885643769924 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18037298417793104,
            "unit": "iter/sec",
            "range": "stddev: 0.10262259361284089",
            "extra": "mean: 5.544067502999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.86064532666296,
            "unit": "iter/sec",
            "range": "stddev: 0.000020172457514981784",
            "extra": "mean: 5.105670913787536 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.3781956883729,
            "unit": "iter/sec",
            "range": "stddev: 0.00001690509389415814",
            "extra": "mean: 1.3344396804625571 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.34235560823632,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996894951894474",
            "extra": "mean: 9.492857780007853 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11931851.052703287,
            "unit": "iter/sec",
            "range": "stddev: 3.908418471450051e-9",
            "extra": "mean: 83.80929292382855 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.96070765239175,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712282933589279",
            "extra": "mean: 9.807699681815052 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 141.8091995284529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005897929683977555",
            "extra": "mean: 7.051728684212464 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6798596.502087074,
            "unit": "iter/sec",
            "range": "stddev: 4.806587746037035e-7",
            "extra": "mean: 147.08918225871005 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 359.045552164918,
            "unit": "iter/sec",
            "range": "stddev: 0.000036106012198912375",
            "extra": "mean: 2.785161921573329 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8548410552095946,
            "unit": "iter/sec",
            "range": "stddev: 0.0015510528240766845",
            "extra": "mean: 1.1698081110000202 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5889.858066621397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004167222635231172",
            "extra": "mean: 169.7833782561132 usec\nrounds: 2226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.59323703176585,
            "unit": "iter/sec",
            "range": "stddev: 0.02240424274796876",
            "extra": "mean: 28.095224918922973 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.93590912065457,
            "unit": "iter/sec",
            "range": "stddev: 0.00022309410594221262",
            "extra": "mean: 3.1853635437915813 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.00310313397188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004712016717559603",
            "extra": "mean: 7.299104743796389 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1809363.6836228617,
            "unit": "iter/sec",
            "range": "stddev: 9.198561727276778e-8",
            "extra": "mean: 552.6804859914703 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6712714802753802,
            "unit": "iter/sec",
            "range": "stddev: 0.05871412559283706",
            "extra": "mean: 1.4897102429999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.18927822420207,
            "unit": "iter/sec",
            "range": "stddev: 0.00008490090774152538",
            "extra": "mean: 13.29976857894771 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.1246555672295,
            "unit": "iter/sec",
            "range": "stddev: 0.0001796638632502996",
            "extra": "mean: 3.3430878444429863 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.29057368606453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002171118140960533",
            "extra": "mean: 3.3637124366277034 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.03065524509134,
            "unit": "iter/sec",
            "range": "stddev: 0.00025451086953832334",
            "extra": "mean: 3.520746727627324 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.38844035945206,
            "unit": "iter/sec",
            "range": "stddev: 0.00006811163952553709",
            "extra": "mean: 6.15807379999751 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5115716772088716,
            "unit": "iter/sec",
            "range": "stddev: 0.0021702852075166897",
            "extra": "mean: 398.15706200004115 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1661016.3669487976,
            "unit": "iter/sec",
            "range": "stddev: 8.683732045094767e-8",
            "extra": "mean: 602.0410273481826 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.68212969672242,
            "unit": "iter/sec",
            "range": "stddev: 0.00048048055737591174",
            "extra": "mean: 22.380311923076334 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.047398039822006,
            "unit": "iter/sec",
            "range": "stddev: 0.024631940308306673",
            "extra": "mean: 31.20378131033923 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.7033192415342,
            "unit": "iter/sec",
            "range": "stddev: 0.000044357580022336905",
            "extra": "mean: 569.8969102265376 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70408.34001020425,
            "unit": "iter/sec",
            "range": "stddev: 7.109309609237572e-7",
            "extra": "mean: 14.202862897421959 usec\nrounds: 13158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.92698070947142,
            "unit": "iter/sec",
            "range": "stddev: 0.00016386173480877192",
            "extra": "mean: 14.099007035082522 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.10593160963829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000617215078345034",
            "extra": "mean: 10.090213408606388 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.4899508972495,
            "unit": "iter/sec",
            "range": "stddev: 0.00007920469051004679",
            "extra": "mean: 6.515084500023249 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.28043516296015,
            "unit": "iter/sec",
            "range": "stddev: 0.00008814836577854075",
            "extra": "mean: 10.279559279569849 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.2012835343901,
            "unit": "iter/sec",
            "range": "stddev: 0.0006114801050823137",
            "extra": "mean: 7.451493559998198 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.97114863479604,
            "unit": "iter/sec",
            "range": "stddev: 0.00010813432055291363",
            "extra": "mean: 9.261733459763605 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140726.14258666133,
            "unit": "iter/sec",
            "range": "stddev: 4.472195168254811e-7",
            "extra": "mean: 7.1060002187168925 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11566.01129951173,
            "unit": "iter/sec",
            "range": "stddev: 0.000022894458659992468",
            "extra": "mean: 86.46023024741605 usec\nrounds: 4278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.240168407404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006571564516809172",
            "extra": "mean: 7.394252844965053 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.52461646699217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250513255281407",
            "extra": "mean: 9.753755092777649 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.14762114686503,
            "unit": "iter/sec",
            "range": "stddev: 0.0005922589409597318",
            "extra": "mean: 10.621617283776674 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5480.435474180111,
            "unit": "iter/sec",
            "range": "stddev: 0.00004601092850172769",
            "extra": "mean: 182.46725186552862 usec\nrounds: 3351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5833.79024891552,
            "unit": "iter/sec",
            "range": "stddev: 0.000045488115311359666",
            "extra": "mean: 171.4151447570293 usec\nrounds: 3385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8097.573290776641,
            "unit": "iter/sec",
            "range": "stddev: 0.000012873524872828699",
            "extra": "mean: 123.49378808821989 usec\nrounds: 4483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.75216586492877,
            "unit": "iter/sec",
            "range": "stddev: 0.013638339672268747",
            "extra": "mean: 8.791041404762497 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 305.5362266135491,
            "unit": "iter/sec",
            "range": "stddev: 0.000037040076704945514",
            "extra": "mean: 3.272934313170099 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.67469107577896,
            "unit": "iter/sec",
            "range": "stddev: 0.0002727988875524747",
            "extra": "mean: 17.64456022641418 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.10858121905242,
            "unit": "iter/sec",
            "range": "stddev: 0.00010587382234570552",
            "extra": "mean: 62.07871360000657 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.7637557519729,
            "unit": "iter/sec",
            "range": "stddev: 0.00019979777153827032",
            "extra": "mean: 3.1569268321941593 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5352.574362051771,
            "unit": "iter/sec",
            "range": "stddev: 0.000046601305830431736",
            "extra": "mean: 186.82598920805574 usec\nrounds: 3243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.55384934788522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006150277312577969",
            "extra": "mean: 9.750974793815686 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.89679408499246,
            "unit": "iter/sec",
            "range": "stddev: 0.0006253526018333321",
            "extra": "mean: 9.354817499998278 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.60432071924845,
            "unit": "iter/sec",
            "range": "stddev: 0.00020171965341575195",
            "extra": "mean: 3.2195302296000192 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.88718703202676,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788772787319379",
            "extra": "mean: 7.04785274074311 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.63276189118493,
            "unit": "iter/sec",
            "range": "stddev: 0.0003048071647552209",
            "extra": "mean: 15.007632456134065 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745102.1552755276,
            "unit": "iter/sec",
            "range": "stddev: 1.6751001389341064e-7",
            "extra": "mean: 1.3420978491603142 usec\nrounds: 22780"
          }
        ]
      }
    ]
  }
}