window.BENCHMARK_DATA = {
  "lastUpdate": 1683638572849,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "4ea0ddbd2696411e4f717e30d6846d881ae66af5",
          "message": "feat(deps): load examples lazily",
          "timestamp": "2023-05-09T08:14:52-05:00",
          "tree_id": "0e64cbee94d446ec2c0a358a2e357372e6e09b55",
          "url": "https://github.com/ibis-project/ibis/commit/4ea0ddbd2696411e4f717e30d6846d881ae66af5"
        },
        "date": 1683638462586,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.60473457850496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010310030292283486",
            "extra": "mean: 9.123693459462237 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.57341128372221,
            "unit": "iter/sec",
            "range": "stddev: 0.0008715497208603815",
            "extra": "mean: 11.29006984722262 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1619021.5843250982,
            "unit": "iter/sec",
            "range": "stddev: 2.1160778463369262e-7",
            "extra": "mean: 617.6569909145824 nsec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.47935075557982,
            "unit": "iter/sec",
            "range": "stddev: 0.00038649482940895106",
            "extra": "mean: 4.175725367740084 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.594761487977024,
            "unit": "iter/sec",
            "range": "stddev: 0.0005789535440300761",
            "extra": "mean: 25.255866241387782 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.13552726979032,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071566732253936",
            "extra": "mean: 38.26209395652352 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1838.739251852624,
            "unit": "iter/sec",
            "range": "stddev: 0.00007784457093532515",
            "extra": "mean: 543.8509016395059 usec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.73298075162292,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956130078871384",
            "extra": "mean: 21.866057789476432 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.71505002835693,
            "unit": "iter/sec",
            "range": "stddev: 0.00041147623483842884",
            "extra": "mean: 4.530728647056566 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 70.87561806526223,
            "unit": "iter/sec",
            "range": "stddev: 0.0006440498544929108",
            "extra": "mean: 14.10922440322426 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7398302470003896,
            "unit": "iter/sec",
            "range": "stddev: 0.006591652119803662",
            "extra": "mean: 1.3516614169999912 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1808.7507860360863,
            "unit": "iter/sec",
            "range": "stddev: 0.00012043021363450055",
            "extra": "mean: 552.8677625022738 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 75.91944226664475,
            "unit": "iter/sec",
            "range": "stddev: 0.012986176852300236",
            "extra": "mean: 13.171856511903679 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 74.19794753132199,
            "unit": "iter/sec",
            "range": "stddev: 0.015214845184735554",
            "extra": "mean: 13.477461752939448 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1584274.264466116,
            "unit": "iter/sec",
            "range": "stddev: 1.1883422712351447e-7",
            "extra": "mean: 631.2038404139511 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 852868.554600691,
            "unit": "iter/sec",
            "range": "stddev: 2.240126218059092e-7",
            "extra": "mean: 1.1725136242925445 usec\nrounds: 128189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9114966.147274692,
            "unit": "iter/sec",
            "range": "stddev: 5.98891415138772e-9",
            "extra": "mean: 109.70967789041791 nsec\nrounds: 90901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.44468272816297,
            "unit": "iter/sec",
            "range": "stddev: 0.0011211021258188862",
            "extra": "mean: 12.430902405062366 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.43750216686865,
            "unit": "iter/sec",
            "range": "stddev: 0.0009025496015500557",
            "extra": "mean: 11.70446202941294 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1811.4726601736127,
            "unit": "iter/sec",
            "range": "stddev: 0.00012720441884653724",
            "extra": "mean: 552.0370370393332 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 67.11952527559802,
            "unit": "iter/sec",
            "range": "stddev: 0.022389703313078744",
            "extra": "mean: 14.898794291138408 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 460.11273757418684,
            "unit": "iter/sec",
            "range": "stddev: 0.000026377203780533526",
            "extra": "mean: 2.1733803877549986 msec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9221.0649701611,
            "unit": "iter/sec",
            "range": "stddev: 0.000002453356907557289",
            "extra": "mean: 108.44734347235915 usec\nrounds: 3715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.7823832629713,
            "unit": "iter/sec",
            "range": "stddev: 0.0003328120824235933",
            "extra": "mean: 4.102019131223632 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1821.4421092379896,
            "unit": "iter/sec",
            "range": "stddev: 0.00013476108639870848",
            "extra": "mean: 549.0155272727035 usec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.29000984310952,
            "unit": "iter/sec",
            "range": "stddev: 0.0011571679200230714",
            "extra": "mean: 11.863802149997582 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.067101203228044,
            "unit": "iter/sec",
            "range": "stddev: 0.0028087882430567527",
            "extra": "mean: 483.7692506000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 628.7779875630972,
            "unit": "iter/sec",
            "range": "stddev: 0.00009809380623851604",
            "extra": "mean: 1.59038646355229 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 982.2858580517811,
            "unit": "iter/sec",
            "range": "stddev: 0.000015130469229624146",
            "extra": "mean: 1.0180335915487497 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1864.4954450678717,
            "unit": "iter/sec",
            "range": "stddev: 0.00010665670949356034",
            "extra": "mean: 536.3381297848105 usec\nrounds: 1202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 95.13376497072822,
            "unit": "iter/sec",
            "range": "stddev: 0.029250639986623184",
            "extra": "mean: 10.511515026317847 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.8320866424713,
            "unit": "iter/sec",
            "range": "stddev: 0.00092526832436392",
            "extra": "mean: 12.072616307691328 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6526969174374876,
            "unit": "iter/sec",
            "range": "stddev: 0.004149162862854238",
            "extra": "mean: 1.5321046772000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 162.37159031338732,
            "unit": "iter/sec",
            "range": "stddev: 0.0001720128093687778",
            "extra": "mean: 6.158712851613619 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1424146.7417811714,
            "unit": "iter/sec",
            "range": "stddev: 1.7817411749667573e-7",
            "extra": "mean: 702.1748325943619 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 231.11359576887583,
            "unit": "iter/sec",
            "range": "stddev: 0.0005170778130407283",
            "extra": "mean: 4.326876559006272 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 576.9622222648134,
            "unit": "iter/sec",
            "range": "stddev: 0.00007471745044018286",
            "extra": "mean: 1.7332157313083512 msec\nrounds: 428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.486201630768118,
            "unit": "iter/sec",
            "range": "stddev: 0.03721624118366576",
            "extra": "mean: 33.91416814285516 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3761103.693880566,
            "unit": "iter/sec",
            "range": "stddev: 2.0055323094324607e-8",
            "extra": "mean: 265.87940173712377 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3767221322847158,
            "unit": "iter/sec",
            "range": "stddev: 0.002533497644012532",
            "extra": "mean: 726.3629868000066 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.776191880265262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006790562348313889",
            "extra": "mean: 48.132016000000114 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14462737005677975,
            "unit": "iter/sec",
            "range": "stddev: 0.11184986153542179",
            "extra": "mean: 6.914320571600013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 362.0236317455308,
            "unit": "iter/sec",
            "range": "stddev: 0.00003385231033581376",
            "extra": "mean: 2.762250616564467 msec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.29014607362666,
            "unit": "iter/sec",
            "range": "stddev: 0.0010898358711741176",
            "extra": "mean: 11.863782975610333 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.84492039303532,
            "unit": "iter/sec",
            "range": "stddev: 0.0010909332589173688",
            "extra": "mean: 11.786209420288255 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1848.544702460769,
            "unit": "iter/sec",
            "range": "stddev: 0.00013951823424408936",
            "extra": "mean: 540.9660900646911 usec\nrounds: 1077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.3871201156627,
            "unit": "iter/sec",
            "range": "stddev: 0.0010879061033910147",
            "extra": "mean: 12.286956444445478 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1813.3034290904263,
            "unit": "iter/sec",
            "range": "stddev: 0.0001484481684664265",
            "extra": "mean: 551.4796828579382 usec\nrounds: 1050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.57473546647208,
            "unit": "iter/sec",
            "range": "stddev: 0.0009829345142367617",
            "extra": "mean: 20.171565023807553 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12013.687746164938,
            "unit": "iter/sec",
            "range": "stddev: 0.000002796335672415669",
            "extra": "mean: 83.23838783967265 usec\nrounds: 5033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.56352900187994,
            "unit": "iter/sec",
            "range": "stddev: 0.0009848920244570848",
            "extra": "mean: 11.420279783133575 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.20073435660822,
            "unit": "iter/sec",
            "range": "stddev: 0.0003555244643026753",
            "extra": "mean: 61.72559699999671 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1792.2703358494557,
            "unit": "iter/sec",
            "range": "stddev: 0.00010735695606158703",
            "extra": "mean: 557.9515433569037 usec\nrounds: 1084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.47156922118953,
            "unit": "iter/sec",
            "range": "stddev: 0.00012047638115346834",
            "extra": "mean: 11.30306615789622 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5047569.804580688,
            "unit": "iter/sec",
            "range": "stddev: 1.578325143398102e-8",
            "extra": "mean: 198.11514029857733 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7342997276600459,
            "unit": "iter/sec",
            "range": "stddev: 0.010568980309115973",
            "extra": "mean: 1.3618417143999864 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.8582953544121,
            "unit": "iter/sec",
            "range": "stddev: 0.0009708184403001157",
            "extra": "mean: 11.647098231709904 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.57087823415308,
            "unit": "iter/sec",
            "range": "stddev: 0.0009547846902920092",
            "extra": "mean: 11.290392733335214 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7293.619401829693,
            "unit": "iter/sec",
            "range": "stddev: 0.00001677008228979536",
            "extra": "mean: 137.10613961418633 usec\nrounds: 3216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.81157553134035,
            "unit": "iter/sec",
            "range": "stddev: 0.0008986627418110558",
            "extra": "mean: 11.134422195400004 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.53006709241125,
            "unit": "iter/sec",
            "range": "stddev: 0.0008712777357068464",
            "extra": "mean: 30.740791193550415 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 72.81956408133888,
            "unit": "iter/sec",
            "range": "stddev: 0.02986566851019671",
            "extra": "mean: 13.732573280485557 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.23248526731831,
            "unit": "iter/sec",
            "range": "stddev: 0.0000905838382405338",
            "extra": "mean: 10.391501344085226 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1804.6006958133569,
            "unit": "iter/sec",
            "range": "stddev: 0.00010268148380700162",
            "extra": "mean: 554.139207814772 usec\nrounds: 1126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 131.21302214227472,
            "unit": "iter/sec",
            "range": "stddev: 0.004976437072793746",
            "extra": "mean: 7.621194784429983 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5798400.080432571,
            "unit": "iter/sec",
            "range": "stddev: 1.6853999644922923e-7",
            "extra": "mean: 172.4613662611076 nsec\nrounds: 50759"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.07551894225349,
            "unit": "iter/sec",
            "range": "stddev: 0.0012252456193665255",
            "extra": "mean: 23.76678945712943 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 233.28380082689176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005005740684729615",
            "extra": "mean: 4.28662425961608 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.02383462244188,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572396869776225",
            "extra": "mean: 11.761407897451521 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5205146.6980445925,
            "unit": "iter/sec",
            "range": "stddev: 8.191150024374743e-9",
            "extra": "mean: 192.11754404071166 nsec\nrounds: 51544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 185.58807560607963,
            "unit": "iter/sec",
            "range": "stddev: 0.004403025494111644",
            "extra": "mean: 5.3882772195049435 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3604.878922905722,
            "unit": "iter/sec",
            "range": "stddev: 0.00012306076112560745",
            "extra": "mean: 277.4018271864586 usec\nrounds: 1736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 130.62833468958627,
            "unit": "iter/sec",
            "range": "stddev: 0.0010442376349910863",
            "extra": "mean: 7.6553069621251195 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 80.44823765230643,
            "unit": "iter/sec",
            "range": "stddev: 0.0015530748784974386",
            "extra": "mean: 12.43035309638421 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138673.23784347172,
            "unit": "iter/sec",
            "range": "stddev: 0.000014724472661238848",
            "extra": "mean: 7.211196735225554 usec\nrounds: 35840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 81.2183046340598,
            "unit": "iter/sec",
            "range": "stddev: 0.0016261842292693257",
            "extra": "mean: 12.312495372879757 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.94217431831674,
            "unit": "iter/sec",
            "range": "stddev: 0.0014031692085934595",
            "extra": "mean: 34.55165423999006 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4361207.527668849,
            "unit": "iter/sec",
            "range": "stddev: 5.106818111244865e-7",
            "extra": "mean: 229.2942937605743 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.64561814170601,
            "unit": "iter/sec",
            "range": "stddev: 0.0009661690176439935",
            "extra": "mean: 12.879026839286212 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 147.60789108101426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004652148113080415",
            "extra": "mean: 6.774705557246612 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10701.990503728583,
            "unit": "iter/sec",
            "range": "stddev: 0.000014676265510409807",
            "extra": "mean: 93.44056132843691 usec\nrounds: 6139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.344564565571697,
            "unit": "iter/sec",
            "range": "stddev: 0.0001905689432997023",
            "extra": "mean: 136.15511050002738 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 199.38007179194926,
            "unit": "iter/sec",
            "range": "stddev: 0.0003694172783859527",
            "extra": "mean: 5.015546393440404 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.76183536581571,
            "unit": "iter/sec",
            "range": "stddev: 0.0009582137918280281",
            "extra": "mean: 11.525805047618913 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.0729195312602,
            "unit": "iter/sec",
            "range": "stddev: 0.00011795047609557404",
            "extra": "mean: 7.403408495724178 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.152568925193832,
            "unit": "iter/sec",
            "range": "stddev: 0.0014368155785602819",
            "extra": "mean: 867.627070399999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 233.97998576054223,
            "unit": "iter/sec",
            "range": "stddev: 0.00031716504428071994",
            "extra": "mean: 4.273869821598379 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 268.1704323660217,
            "unit": "iter/sec",
            "range": "stddev: 0.00010100132764561362",
            "extra": "mean: 3.7289718750019216 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 242.694885043279,
            "unit": "iter/sec",
            "range": "stddev: 0.00034190481340739274",
            "extra": "mean: 4.120399982149081 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 236.74385623913025,
            "unit": "iter/sec",
            "range": "stddev: 0.00036542467185115955",
            "extra": "mean: 4.223974450217284 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1585577.0560326132,
            "unit": "iter/sec",
            "range": "stddev: 1.1496960288462458e-7",
            "extra": "mean: 630.6852109112705 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1510.391593019579,
            "unit": "iter/sec",
            "range": "stddev: 0.000006672035906407499",
            "extra": "mean: 662.0799563646916 usec\nrounds: 1123"
          }
        ]
      }
    ]
  }
}