window.BENCHMARK_DATA = {
  "lastUpdate": 1681649870208,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "054add461b1b0b90e865782e41a1ab00bcdcd3f2",
          "message": "refactor(snowflake): add flags to supplemental JavaScript UDFs",
          "timestamp": "2023-04-16T08:49:17-04:00",
          "tree_id": "1a18d88971424869b5cf780a181a80fe292c324c",
          "url": "https://github.com/ibis-project/ibis/commit/054add461b1b0b90e865782e41a1ab00bcdcd3f2"
        },
        "date": 1681649768733,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1694705.7568677992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014520270318669852",
            "extra": "mean: 590.0729350493427 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 546.1831519219586,
            "unit": "iter/sec",
            "range": "stddev: 0.00036511133659273176",
            "extra": "mean: 1.8308876729007653 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 56.576616395102036,
            "unit": "iter/sec",
            "range": "stddev: 0.013214998441840438",
            "extra": "mean: 17.675146795922075 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1381.3462385995456,
            "unit": "iter/sec",
            "range": "stddev: 0.0005697227121373477",
            "extra": "mean: 723.9314605249391 usec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 63.06865946908749,
            "unit": "iter/sec",
            "range": "stddev: 0.004116022613102408",
            "extra": "mean: 15.855735771427653 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8584024.466029027,
            "unit": "iter/sec",
            "range": "stddev: 3.2503399070396624e-7",
            "extra": "mean: 116.49547411677393 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 65.15611928480752,
            "unit": "iter/sec",
            "range": "stddev: 0.002832731932227609",
            "extra": "mean: 15.347752612902628 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 48984.32779303106,
            "unit": "iter/sec",
            "range": "stddev: 0.00005775547177041584",
            "extra": "mean: 20.41469272019425 usec\nrounds: 12871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 563538.8283395601,
            "unit": "iter/sec",
            "range": "stddev: 0.00000993051155355433",
            "extra": "mean: 1.7745006194984856 usec\nrounds: 21787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 66.55207587928322,
            "unit": "iter/sec",
            "range": "stddev: 0.0024413802444079712",
            "extra": "mean: 15.025827320756598 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1406.0779476935716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002224543778888744",
            "extra": "mean: 711.1981249974993 usec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 76.8343850745644,
            "unit": "iter/sec",
            "range": "stddev: 0.002126533381197471",
            "extra": "mean: 13.015006224485873 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.09931797329571,
            "unit": "iter/sec",
            "range": "stddev: 0.0018060074602015018",
            "extra": "mean: 32.1550460000016 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.992377617497587,
            "unit": "iter/sec",
            "range": "stddev: 0.0118835220171695",
            "extra": "mean: 501.912885999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6189813618088812,
            "unit": "iter/sec",
            "range": "stddev: 0.029678692633810472",
            "extra": "mean: 1.6155575300000122 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 99.34617521190481,
            "unit": "iter/sec",
            "range": "stddev: 0.0009522949372906258",
            "extra": "mean: 10.06581277907283 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 132569.68641965208,
            "unit": "iter/sec",
            "range": "stddev: 0.00002083591022720942",
            "extra": "mean: 7.543202575243932 usec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 92.5873751761146,
            "unit": "iter/sec",
            "range": "stddev: 0.0013510509479602326",
            "extra": "mean: 10.800608593751093 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.92629868119043,
            "unit": "iter/sec",
            "range": "stddev: 0.001443094778923827",
            "extra": "mean: 12.511526449996069 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7600.4014577911275,
            "unit": "iter/sec",
            "range": "stddev: 0.00006884566773930638",
            "extra": "mean: 131.57199728902555 usec\nrounds: 4427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.354038052657245,
            "unit": "iter/sec",
            "range": "stddev: 0.0038446020127411115",
            "extra": "mean: 19.100723405407784 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 177.98209817331784,
            "unit": "iter/sec",
            "range": "stddev: 0.0013929579229206793",
            "extra": "mean: 5.618542596493083 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9991.988720248766,
            "unit": "iter/sec",
            "range": "stddev: 0.00006624190901139645",
            "extra": "mean: 100.08017702957369 usec\nrounds: 1158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 52.75923325611751,
            "unit": "iter/sec",
            "range": "stddev: 0.025079723598410784",
            "extra": "mean: 18.954028295777942 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 42.8722194189911,
            "unit": "iter/sec",
            "range": "stddev: 0.00341607141950054",
            "extra": "mean: 23.325127869564646 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1230.7607409432517,
            "unit": "iter/sec",
            "range": "stddev: 0.0002432277894131694",
            "extra": "mean: 812.5056046503422 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 157.42627387070533,
            "unit": "iter/sec",
            "range": "stddev: 0.0015882146411000532",
            "extra": "mean: 6.352179819877481 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 875.217227135448,
            "unit": "iter/sec",
            "range": "stddev: 0.0004124863624101039",
            "extra": "mean: 1.1425734880390337 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 200.6320364719012,
            "unit": "iter/sec",
            "range": "stddev: 0.000822980293318581",
            "extra": "mean: 4.984248864662506 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4564505.877929653,
            "unit": "iter/sec",
            "range": "stddev: 6.261326891912987e-7",
            "extra": "mean: 219.08176410432492 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1440404.666218088,
            "unit": "iter/sec",
            "range": "stddev: 0.000008973122551055597",
            "extra": "mean: 694.2493477375284 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 54.557359012501635,
            "unit": "iter/sec",
            "range": "stddev: 0.021900637245811663",
            "extra": "mean: 18.329332982757713 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1453.1501910722993,
            "unit": "iter/sec",
            "range": "stddev: 0.00023839336513574737",
            "extra": "mean: 688.1601132103808 usec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 70.5798657266386,
            "unit": "iter/sec",
            "range": "stddev: 0.001668444406765365",
            "extra": "mean: 14.168346591548913 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 72.30341172325107,
            "unit": "iter/sec",
            "range": "stddev: 0.00035867080353458474",
            "extra": "mean: 13.83060599999908 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 194.8472601205684,
            "unit": "iter/sec",
            "range": "stddev: 0.0008394628744713617",
            "extra": "mean: 5.132225104839636 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 184.16535059858197,
            "unit": "iter/sec",
            "range": "stddev: 0.0009591965117302969",
            "extra": "mean: 5.429903055866687 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 68.50370314044156,
            "unit": "iter/sec",
            "range": "stddev: 0.0015767296172801",
            "extra": "mean: 14.597750985079875 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 187.07866893186608,
            "unit": "iter/sec",
            "range": "stddev: 0.0009352598150849638",
            "extra": "mean: 5.345344852566806 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 105.94891298467604,
            "unit": "iter/sec",
            "range": "stddev: 0.0013132906787830375",
            "extra": "mean: 9.438511182692695 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2693.1085596925263,
            "unit": "iter/sec",
            "range": "stddev: 0.00023365101015211486",
            "extra": "mean: 371.3181172741772 usec\nrounds: 631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.006180715469995,
            "unit": "iter/sec",
            "range": "stddev: 0.009886211455055971",
            "extra": "mean: 124.9035008749857 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 118.23459439952192,
            "unit": "iter/sec",
            "range": "stddev: 0.0011756698760339124",
            "extra": "mean: 8.457761495936957 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 373610.65601685445,
            "unit": "iter/sec",
            "range": "stddev: 0.000003539884835866664",
            "extra": "mean: 2.676583185986236 usec\nrounds: 1689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.07273810946856,
            "unit": "iter/sec",
            "range": "stddev: 0.002443922580176311",
            "extra": "mean: 20.80181074193976 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.08914978607065,
            "unit": "iter/sec",
            "range": "stddev: 0.004674581561785442",
            "extra": "mean: 58.516661888884556 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.09919754421212,
            "unit": "iter/sec",
            "range": "stddev: 0.0018917806423938725",
            "extra": "mean: 13.49542280000183 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 199.34792367899428,
            "unit": "iter/sec",
            "range": "stddev: 0.000705491613135183",
            "extra": "mean: 5.0163552323237575 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.682949152889513,
            "unit": "iter/sec",
            "range": "stddev: 0.003434660222132972",
            "extra": "mean: 33.689374827590335 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 374.20316021306684,
            "unit": "iter/sec",
            "range": "stddev: 0.0004305385861512039",
            "extra": "mean: 2.672345149171407 msec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 585.4317771030379,
            "unit": "iter/sec",
            "range": "stddev: 0.0003259782025903717",
            "extra": "mean: 1.7081409638342824 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 166.41216464929977,
            "unit": "iter/sec",
            "range": "stddev: 0.003676004977328366",
            "extra": "mean: 6.009176084617488 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1467.7279393332915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002837582234330833",
            "extra": "mean: 681.3251783257906 usec\nrounds: 1015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 218.08385788687355,
            "unit": "iter/sec",
            "range": "stddev: 0.000631298999975283",
            "extra": "mean: 4.58539210416357 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7957.3306164355645,
            "unit": "iter/sec",
            "range": "stddev: 0.00008399863261909419",
            "extra": "mean: 125.6702841948703 usec\nrounds: 3948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5581758544883032,
            "unit": "iter/sec",
            "range": "stddev: 0.029237301186370003",
            "extra": "mean: 1.791550085799986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 113.46810280946964,
            "unit": "iter/sec",
            "range": "stddev: 0.004743817809094407",
            "extra": "mean: 8.813049440679848 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 68.62508384904159,
            "unit": "iter/sec",
            "range": "stddev: 0.0015995847327103616",
            "extra": "mean: 14.571931193552428 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 22.484036102499108,
            "unit": "iter/sec",
            "range": "stddev: 0.007832141394264799",
            "extra": "mean: 44.476000458336294 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 64.02692758309385,
            "unit": "iter/sec",
            "range": "stddev: 0.0021115235887035877",
            "extra": "mean: 15.618428647887324 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4966149.965115791,
            "unit": "iter/sec",
            "range": "stddev: 3.52065205500067e-7",
            "extra": "mean: 201.36323047522447 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1485.5129996995822,
            "unit": "iter/sec",
            "range": "stddev: 0.00027391090778274447",
            "extra": "mean: 673.168124548376 usec\nrounds: 554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 63.99011453932119,
            "unit": "iter/sec",
            "range": "stddev: 0.002081022486216862",
            "extra": "mean: 15.62741381538724 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1116497.4778233762,
            "unit": "iter/sec",
            "range": "stddev: 0.000017338012210068547",
            "extra": "mean: 895.6580913639955 nsec\nrounds: 38911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 48.993678807466104,
            "unit": "iter/sec",
            "range": "stddev: 0.04637028584410898",
            "extra": "mean: 20.410796338233144 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5756.032245612736,
            "unit": "iter/sec",
            "range": "stddev: 0.00006270917853318395",
            "extra": "mean: 173.7307849104221 usec\nrounds: 3022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1476171.643774011,
            "unit": "iter/sec",
            "range": "stddev: 0.000007653497170389504",
            "extra": "mean: 677.4279970880482 nsec\nrounds: 49505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 111.00810160183455,
            "unit": "iter/sec",
            "range": "stddev: 0.0008501765359688203",
            "extra": "mean: 9.008351512818535 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4093418.794793102,
            "unit": "iter/sec",
            "range": "stddev: 5.243596850117283e-7",
            "extra": "mean: 244.2945738344345 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.179609978904576,
            "unit": "iter/sec",
            "range": "stddev: 0.003843172223583174",
            "extra": "mean: 89.44855874998818 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.096238313748215,
            "unit": "iter/sec",
            "range": "stddev: 0.27651086301154604",
            "extra": "mean: 10.390872003599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 101.3226482949185,
            "unit": "iter/sec",
            "range": "stddev: 0.0011893906326840378",
            "extra": "mean: 9.86946173267514 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.10305094264062,
            "unit": "iter/sec",
            "range": "stddev: 0.0021766858910897842",
            "extra": "mean: 31.149687354847572 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1561.0645787917088,
            "unit": "iter/sec",
            "range": "stddev: 0.0002376326488576974",
            "extra": "mean: 640.5884891539961 usec\nrounds: 922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 179.21481497878085,
            "unit": "iter/sec",
            "range": "stddev: 0.0010686218752673014",
            "extra": "mean: 5.579895836839162 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 191.88774891321805,
            "unit": "iter/sec",
            "range": "stddev: 0.00073214421583792",
            "extra": "mean: 5.211380120219419 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 78.5348803304429,
            "unit": "iter/sec",
            "range": "stddev: 0.0014683983671320417",
            "extra": "mean: 12.733195693332771 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 75.1627247611447,
            "unit": "iter/sec",
            "range": "stddev: 0.0015359921281873482",
            "extra": "mean: 13.3044671168833 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 141.87786573362723,
            "unit": "iter/sec",
            "range": "stddev: 0.0007296571241001572",
            "extra": "mean: 7.0483157808243275 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5437306593414146,
            "unit": "iter/sec",
            "range": "stddev: 0.032273102769078646",
            "extra": "mean: 1.8391458763999708 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1607.9847058691898,
            "unit": "iter/sec",
            "range": "stddev: 0.0001980808550564904",
            "extra": "mean: 621.8964622921918 usec\nrounds: 716"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.2897997975686,
            "unit": "iter/sec",
            "range": "stddev: 0.0027636869641700194",
            "extra": "mean: 25.451898588240805 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.77656879625721,
            "unit": "iter/sec",
            "range": "stddev: 0.0015891512348554886",
            "extra": "mean: 13.74068627499554 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.612150488895444,
            "unit": "iter/sec",
            "range": "stddev: 0.011742409161927553",
            "extra": "mean: 216.81859739999254 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.21771806798596,
            "unit": "iter/sec",
            "range": "stddev: 0.00112475222097378",
            "extra": "mean: 11.084297202534247 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1695.423907086979,
            "unit": "iter/sec",
            "range": "stddev: 0.0002480906653069629",
            "extra": "mean: 589.8229910643214 usec\nrounds: 1007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5750887503327242,
            "unit": "iter/sec",
            "range": "stddev: 0.03498139113631246",
            "extra": "mean: 1.7388620442000273 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2517310883932395,
            "unit": "iter/sec",
            "range": "stddev: 0.028740144926792256",
            "extra": "mean: 798.893635599984 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}