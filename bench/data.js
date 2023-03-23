window.BENCHMARK_DATA = {
  "lastUpdate": 1679589883335,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "343fb375d11e612807061818c612d387903ca469",
          "message": "fix(postgres): allow inference of unknown types",
          "timestamp": "2023-03-23T12:36:15-04:00",
          "tree_id": "618a29a4f20c295bde4cb9f634bafd2567646871",
          "url": "https://github.com/ibis-project/ibis/commit/343fb375d11e612807061818c612d387903ca469"
        },
        "date": 1679589797246,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.5723716839906,
            "unit": "iter/sec",
            "range": "stddev: 0.00006013755568457727",
            "extra": "mean: 6.189176958767667 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2520047.759126371,
            "unit": "iter/sec",
            "range": "stddev: 1.5549248691914486e-8",
            "extra": "mean: 396.81787631934304 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5776.386033712738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000440657733323948",
            "extra": "mean: 173.11862367987476 usec\nrounds: 946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1890219.1987086537,
            "unit": "iter/sec",
            "range": "stddev: 8.128540452917866e-8",
            "extra": "mean: 529.0391721146271 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.85709449034533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002151702737860844",
            "extra": "mean: 3.1861634404786776 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1764.4854186982188,
            "unit": "iter/sec",
            "range": "stddev: 0.00001282662969136406",
            "extra": "mean: 566.7374688410677 usec\nrounds: 1380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.55099556663006,
            "unit": "iter/sec",
            "range": "stddev: 0.00014004052624184225",
            "extra": "mean: 6.642267600000196 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.404757879361124,
            "unit": "iter/sec",
            "range": "stddev: 0.00034877644635307085",
            "extra": "mean: 96.10987699998284 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 122.08116571758345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005440034298244785",
            "extra": "mean: 8.191271717648492 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5450.39458611505,
            "unit": "iter/sec",
            "range": "stddev: 0.000055032915295430354",
            "extra": "mean: 183.4729548843148 usec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5800.063197845875,
            "unit": "iter/sec",
            "range": "stddev: 0.000043931299045625255",
            "extra": "mean: 172.4119144721383 usec\nrounds: 3835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1633995.2497372127,
            "unit": "iter/sec",
            "range": "stddev: 1.5714018187396736e-7",
            "extra": "mean: 611.9968831982987 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8605892789941167,
            "unit": "iter/sec",
            "range": "stddev: 0.003165378796870729",
            "extra": "mean: 1.1619944895999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 177.44445374847365,
            "unit": "iter/sec",
            "range": "stddev: 0.006259744019013001",
            "extra": "mean: 5.635566392046795 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.14294588692576,
            "unit": "iter/sec",
            "range": "stddev: 0.00017985973028393493",
            "extra": "mean: 3.2879276456136513 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.34794429044435,
            "unit": "iter/sec",
            "range": "stddev: 0.0002363392972368455",
            "extra": "mean: 65.1553055624916 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.51050196117627,
            "unit": "iter/sec",
            "range": "stddev: 0.00011825244430784837",
            "extra": "mean: 10.151201954022195 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.35736692181672,
            "unit": "iter/sec",
            "range": "stddev: 0.0003173869453896838",
            "extra": "mean: 14.846186032787232 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.81003973832573,
            "unit": "iter/sec",
            "range": "stddev: 0.0003000723781889218",
            "extra": "mean: 20.487588319146525 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5212.9822258556405,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628995025407968",
            "extra": "mean: 191.82877605838442 usec\nrounds: 2715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.51270260589082,
            "unit": "iter/sec",
            "range": "stddev: 0.0005343503233969883",
            "extra": "mean: 8.73265565516884 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5213.363485931032,
            "unit": "iter/sec",
            "range": "stddev: 0.000044347277798941586",
            "extra": "mean: 191.81474736964637 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.30517202123855,
            "unit": "iter/sec",
            "range": "stddev: 0.000193334648816335",
            "extra": "mean: 3.2330529537066215 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6367888.160581682,
            "unit": "iter/sec",
            "range": "stddev: 9.468596513927037e-9",
            "extra": "mean: 157.03793389298602 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.4855510937495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000893012018877268",
            "extra": "mean: 10.696840188674468 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.77939679935392,
            "unit": "iter/sec",
            "range": "stddev: 0.0006110292706454874",
            "extra": "mean: 8.279557826085693 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5383.05241774138,
            "unit": "iter/sec",
            "range": "stddev: 0.00005821936064062088",
            "extra": "mean: 185.76820777449902 usec\nrounds: 2830"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.83914984729007,
            "unit": "iter/sec",
            "range": "stddev: 0.00006935952808285811",
            "extra": "mean: 13.728880720004781 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.72415903842594,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703919214106172",
            "extra": "mean: 8.215296025863852 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 347.0052154424225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003540415956651911",
            "extra": "mean: 2.8818010666641602 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.08151047571239,
            "unit": "iter/sec",
            "range": "stddev: 0.009671433182658788",
            "extra": "mean: 10.407829717173122 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11897.060325661616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026321378557291327",
            "extra": "mean: 84.05437752072491 usec\nrounds: 6744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.11963904088793,
            "unit": "iter/sec",
            "range": "stddev: 0.000024077378298302606",
            "extra": "mean: 3.0948289090947476 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.29200398548952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006778126269878646",
            "extra": "mean: 9.497397353533245 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6646309311909565,
            "unit": "iter/sec",
            "range": "stddev: 0.044058735829067844",
            "extra": "mean: 1.5045944343999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5753.552573100184,
            "unit": "iter/sec",
            "range": "stddev: 0.00004428778893108583",
            "extra": "mean: 173.80565959809599 usec\nrounds: 2782"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.57786518509144,
            "unit": "iter/sec",
            "range": "stddev: 0.00016540557123094244",
            "extra": "mean: 13.97079945614646 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5285.640130048135,
            "unit": "iter/sec",
            "range": "stddev: 0.00002202536292480823",
            "extra": "mean: 189.19184344676398 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.0623146434538,
            "unit": "iter/sec",
            "range": "stddev: 0.0005804997541573485",
            "extra": "mean: 9.60962672631563 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.27255191268225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400317082420644",
            "extra": "mean: 9.874343848491204 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.81105291427411,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589476546006476",
            "extra": "mean: 8.209435647057097 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.6051317744096,
            "unit": "iter/sec",
            "range": "stddev: 0.000020439565594936895",
            "extra": "mean: 1.445911769674641 msec\nrounds: 521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69455.46628920655,
            "unit": "iter/sec",
            "range": "stddev: 4.1658511411702333e-7",
            "extra": "mean: 14.397714872953072 usec\nrounds: 13387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 746635.4722119581,
            "unit": "iter/sec",
            "range": "stddev: 1.5567000595496287e-7",
            "extra": "mean: 1.3393416696871263 usec\nrounds: 24272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9252212948641512,
            "unit": "iter/sec",
            "range": "stddev: 0.005882728536336779",
            "extra": "mean: 1.08082250760001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13143.151891841908,
            "unit": "iter/sec",
            "range": "stddev: 0.000002846531007577793",
            "extra": "mean: 76.08525019182883 usec\nrounds: 6515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.29990499801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000358977127727296",
            "extra": "mean: 1.8786402000273483 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12830950.243243154,
            "unit": "iter/sec",
            "range": "stddev: 9.487604139056611e-9",
            "extra": "mean: 77.93655037561531 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.40322680231657,
            "unit": "iter/sec",
            "range": "stddev: 0.00020812738025763124",
            "extra": "mean: 3.373782434112773 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.46265037054378,
            "unit": "iter/sec",
            "range": "stddev: 0.0006033006223839434",
            "extra": "mean: 8.232983529910792 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 301.83247840295076,
            "unit": "iter/sec",
            "range": "stddev: 0.00021884172164308462",
            "extra": "mean: 3.3130960766421746 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.509376785744364,
            "unit": "iter/sec",
            "range": "stddev: 0.0004597140926257925",
            "extra": "mean: 181.50873299998693 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.6734080215556,
            "unit": "iter/sec",
            "range": "stddev: 0.00420712986724052",
            "extra": "mean: 5.692381170616883 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9259956926706647,
            "unit": "iter/sec",
            "range": "stddev: 0.004888943934888483",
            "extra": "mean: 1.0799186301999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.9637089246457,
            "unit": "iter/sec",
            "range": "stddev: 0.00006483161145089205",
            "extra": "mean: 8.477183441551437 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.12180028108716,
            "unit": "iter/sec",
            "range": "stddev: 0.00006246857769310155",
            "extra": "mean: 7.400730288671035 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.47271952027967,
            "unit": "iter/sec",
            "range": "stddev: 0.00018849818314028914",
            "extra": "mean: 3.2208949035687544 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.71590181060356,
            "unit": "iter/sec",
            "range": "stddev: 0.00036448727171927396",
            "extra": "mean: 21.87422669999819 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1884760.585359548,
            "unit": "iter/sec",
            "range": "stddev: 8.790884363453777e-8",
            "extra": "mean: 530.571366871636 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.840731714043894,
            "unit": "iter/sec",
            "range": "stddev: 0.02284351339850033",
            "extra": "mean: 32.42465221876145 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.3590035899612,
            "unit": "iter/sec",
            "range": "stddev: 0.00006503262548722619",
            "extra": "mean: 3.541590625005142 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.98154987652252,
            "unit": "iter/sec",
            "range": "stddev: 0.0005693813523495931",
            "extra": "mean: 9.80569525772831 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.769159823172854,
            "unit": "iter/sec",
            "range": "stddev: 0.0020694328072502505",
            "extra": "mean: 565.2400574000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5872363.520907605,
            "unit": "iter/sec",
            "range": "stddev: 9.696377033023011e-9",
            "extra": "mean: 170.2891853410608 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5561.248163999163,
            "unit": "iter/sec",
            "range": "stddev: 0.00004423862208725097",
            "extra": "mean: 179.81574828354496 usec\nrounds: 2475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.25871988673993,
            "unit": "iter/sec",
            "range": "stddev: 0.00013301292804004272",
            "extra": "mean: 16.87515359615059 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.7902839284945,
            "unit": "iter/sec",
            "range": "stddev: 0.00004517558123299894",
            "extra": "mean: 3.392242059926792 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.24043500592146,
            "unit": "iter/sec",
            "range": "stddev: 0.0007648591759979798",
            "extra": "mean: 26.85253273333122 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.14532207852973,
            "unit": "iter/sec",
            "range": "stddev: 0.00009851514437473957",
            "extra": "mean: 8.917001453700854 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.31705117274889,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886919179949839",
            "extra": "mean: 8.747601427269688 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7361018.06669506,
            "unit": "iter/sec",
            "range": "stddev: 5.1287647730397e-9",
            "extra": "mean: 135.85077375703196 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.53515758109616,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342004716078524",
            "extra": "mean: 8.296334613635022 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.13962189372414,
            "unit": "iter/sec",
            "range": "stddev: 0.00008254735132352628",
            "extra": "mean: 9.247304387496058 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 728.8934316736916,
            "unit": "iter/sec",
            "range": "stddev: 0.00008285915673969193",
            "extra": "mean: 1.371942668908116 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 292.7600532387169,
            "unit": "iter/sec",
            "range": "stddev: 0.0001994633357916044",
            "extra": "mean: 3.4157665601481457 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8001.85708793498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000139695327808332",
            "extra": "mean: 124.9709897353425 usec\nrounds: 4579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1171.557577492899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000113059422640198",
            "extra": "mean: 853.5645359743841 usec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.57487819321423,
            "unit": "iter/sec",
            "range": "stddev: 0.0006266445820703849",
            "extra": "mean: 9.942840776589376 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11506.40189856251,
            "unit": "iter/sec",
            "range": "stddev: 0.000016703157932304986",
            "extra": "mean: 86.90814112141604 usec\nrounds: 5676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 261.27340477117275,
            "unit": "iter/sec",
            "range": "stddev: 0.0038983106242276703",
            "extra": "mean: 3.8274083076913827 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.26924290272211,
            "unit": "iter/sec",
            "range": "stddev: 0.0005849470488575576",
            "extra": "mean: 10.72164808974572 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139849.75316908408,
            "unit": "iter/sec",
            "range": "stddev: 3.5418255556181076e-7",
            "extra": "mean: 7.150531033050584 usec\nrounds: 39216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5813183824473906,
            "unit": "iter/sec",
            "range": "stddev: 0.0018067033020798817",
            "extra": "mean: 387.3989380000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.24866889896747,
            "unit": "iter/sec",
            "range": "stddev: 0.0006471507253527868",
            "extra": "mean: 9.501307811882555 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.882573490430275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004900304244112063",
            "extra": "mean: 37.19881953846355 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496425.37767524953,
            "unit": "iter/sec",
            "range": "stddev: 3.7233388726392754e-7",
            "extra": "mean: 2.0144014487796347 usec\nrounds: 2070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.57978646738496,
            "unit": "iter/sec",
            "range": "stddev: 0.000054268995191105694",
            "extra": "mean: 6.0760803101307435 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.179476057435053,
            "unit": "iter/sec",
            "range": "stddev: 0.009619369608299797",
            "extra": "mean: 5.571773830400025 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}