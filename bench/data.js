window.BENCHMARK_DATA = {
  "lastUpdate": 1678798882561,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "db0934aad6b27959ecd6d1b4a9ad635974854bbd",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.3",
          "timestamp": "2023-03-14T08:54:21-04:00",
          "tree_id": "d3673708d6f0324acc5510cac6f438482af399ef",
          "url": "https://github.com/ibis-project/ibis/commit/db0934aad6b27959ecd6d1b4a9ad635974854bbd"
        },
        "date": 1678798803759,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.15550914221541,
            "unit": "iter/sec",
            "range": "stddev: 0.000686952851087133",
            "extra": "mean: 9.420142280701707 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7060406.061530837,
            "unit": "iter/sec",
            "range": "stddev: 6.824386523249461e-9",
            "extra": "mean: 141.6349132451019 nsec\nrounds: 66221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5481855.666339326,
            "unit": "iter/sec",
            "range": "stddev: 1.3999246325078124e-8",
            "extra": "mean: 182.41997981452096 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6286995313666495,
            "unit": "iter/sec",
            "range": "stddev: 0.0008136761403701522",
            "extra": "mean: 177.66093116667037 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.050584107237245,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604349747655886",
            "extra": "mean: 38.3868552000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5275.764408610298,
            "unit": "iter/sec",
            "range": "stddev: 0.00006589597366216762",
            "extra": "mean: 189.54599230548516 usec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.393494959367032,
            "unit": "iter/sec",
            "range": "stddev: 0.00012649457029154532",
            "extra": "mean: 64.96250543749937 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1745.977050960235,
            "unit": "iter/sec",
            "range": "stddev: 0.000005454189044504853",
            "extra": "mean: 572.7452141768015 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.0489742398702,
            "unit": "iter/sec",
            "range": "stddev: 0.000014415881411506846",
            "extra": "mean: 862.7763124986346 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5375.080904848344,
            "unit": "iter/sec",
            "range": "stddev: 0.000060643210143174795",
            "extra": "mean: 186.04371128590753 usec\nrounds: 762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.7750002654552,
            "unit": "iter/sec",
            "range": "stddev: 0.00003844980929803979",
            "extra": "mean: 7.311277631578748 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.20362336288693,
            "unit": "iter/sec",
            "range": "stddev: 0.000528851087414491",
            "extra": "mean: 8.319216775862612 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 313.3797585430118,
            "unit": "iter/sec",
            "range": "stddev: 0.0002295476134131569",
            "extra": "mean: 3.1910165629371643 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9108608339121637,
            "unit": "iter/sec",
            "range": "stddev: 0.0033137157437709576",
            "extra": "mean: 1.0978625523999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11252020.843317784,
            "unit": "iter/sec",
            "range": "stddev: 3.3376310480576175e-9",
            "extra": "mean: 88.87292459959033 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.70418112538684,
            "unit": "iter/sec",
            "range": "stddev: 0.00009662798614498213",
            "extra": "mean: 6.108579470148442 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 288.71701024390455,
            "unit": "iter/sec",
            "range": "stddev: 0.00022241536550314495",
            "extra": "mean: 3.463599180232618 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 107.61867402493856,
            "unit": "iter/sec",
            "range": "stddev: 0.0005712516391785116",
            "extra": "mean: 9.292067655175432 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.30572369671064,
            "unit": "iter/sec",
            "range": "stddev: 0.0005454312053999257",
            "extra": "mean: 8.24363409677359 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.47372846095814,
            "unit": "iter/sec",
            "range": "stddev: 0.0006546844756152463",
            "extra": "mean: 9.134611692307825 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 786197.6931888975,
            "unit": "iter/sec",
            "range": "stddev: 2.827674861453949e-7",
            "extra": "mean: 1.2719447139865023 usec\nrounds: 25974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 317.0907368218945,
            "unit": "iter/sec",
            "range": "stddev: 0.00020413962270658477",
            "extra": "mean: 3.1536714380959237 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.69640127652667,
            "unit": "iter/sec",
            "range": "stddev: 0.003679675445128203",
            "extra": "mean: 6.035134090396595 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.3153121202208,
            "unit": "iter/sec",
            "range": "stddev: 0.000035161944510571565",
            "extra": "mean: 3.4445306818191375 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 320.1371008808244,
            "unit": "iter/sec",
            "range": "stddev: 0.00020809567565879087",
            "extra": "mean: 3.1236616975933207 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7991.606529795799,
            "unit": "iter/sec",
            "range": "stddev: 0.00001620992262450035",
            "extra": "mean: 125.13128571478254 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.57645681520183,
            "unit": "iter/sec",
            "range": "stddev: 0.000934153155128306",
            "extra": "mean: 22.948171400001154 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.1516667750156,
            "unit": "iter/sec",
            "range": "stddev: 0.00016078794581106493",
            "extra": "mean: 15.348801488889624 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.49876916277344,
            "unit": "iter/sec",
            "range": "stddev: 0.00006501263944107381",
            "extra": "mean: 10.362826476192739 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.30419612486946,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703981828646345",
            "extra": "mean: 8.312262017544693 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.4780268444613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005907886515159604",
            "extra": "mean: 15.753482735849309 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.3758030727386,
            "unit": "iter/sec",
            "range": "stddev: 0.000021630134477773648",
            "extra": "mean: 1.3524921911755092 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.4154932037027,
            "unit": "iter/sec",
            "range": "stddev: 0.010292791532839978",
            "extra": "mean: 5.973162823008565 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.8682258844929,
            "unit": "iter/sec",
            "range": "stddev: 0.0001803332178564441",
            "extra": "mean: 3.258727739301384 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5104.990785252756,
            "unit": "iter/sec",
            "range": "stddev: 0.000052808523881211374",
            "extra": "mean: 195.88673948027284 usec\nrounds: 3232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12169.173213720222,
            "unit": "iter/sec",
            "range": "stddev: 0.000013529318646455681",
            "extra": "mean: 82.17485135905066 usec\nrounds: 5261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16672930944141257,
            "unit": "iter/sec",
            "range": "stddev: 0.09450344718183633",
            "extra": "mean: 5.997745707400009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5345.938586144152,
            "unit": "iter/sec",
            "range": "stddev: 0.00002076942888113793",
            "extra": "mean: 187.05789149764001 usec\nrounds: 1576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.28758329135097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005780908016706646",
            "extra": "mean: 9.588869244445656 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.76699259689421,
            "unit": "iter/sec",
            "range": "stddev: 0.000560887668441628",
            "extra": "mean: 8.713306651786061 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483479.3405928246,
            "unit": "iter/sec",
            "range": "stddev: 8.676977636837264e-8",
            "extra": "mean: 2.068340704638665 usec\nrounds: 2216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5213.910164205004,
            "unit": "iter/sec",
            "range": "stddev: 0.00005414546324279584",
            "extra": "mean: 191.79463560099066 usec\nrounds: 2500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12659.527392475986,
            "unit": "iter/sec",
            "range": "stddev: 0.000002186831586059594",
            "extra": "mean: 78.99189037612383 usec\nrounds: 4333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.793381896156,
            "unit": "iter/sec",
            "range": "stddev: 0.00004757926812653186",
            "extra": "mean: 6.068204854428843 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.37983863685301,
            "unit": "iter/sec",
            "range": "stddev: 0.0004953594221386722",
            "extra": "mean: 9.580394193548155 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1935253.3460811323,
            "unit": "iter/sec",
            "range": "stddev: 6.232044357300082e-8",
            "extra": "mean: 516.7282113347017 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5756.473168313726,
            "unit": "iter/sec",
            "range": "stddev: 0.00006871194292629463",
            "extra": "mean: 173.7174778307766 usec\nrounds: 2323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 324.2599416117773,
            "unit": "iter/sec",
            "range": "stddev: 0.00018508463124790146",
            "extra": "mean: 3.0839455377354557 msec\nrounds: 318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.33271792643586,
            "unit": "iter/sec",
            "range": "stddev: 0.00001248311556146963",
            "extra": "mean: 2.946960157896683 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8396437695638129,
            "unit": "iter/sec",
            "range": "stddev: 0.005598644904007972",
            "extra": "mean: 1.190981266400024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.69084445218158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006477845272396653",
            "extra": "mean: 8.873835357799033 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.3578798265001,
            "unit": "iter/sec",
            "range": "stddev: 0.014378625011294027",
            "extra": "mean: 10.59794901961281 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.71999917683095,
            "unit": "iter/sec",
            "range": "stddev: 0.00013521589484269782",
            "extra": "mean: 13.206550592594079 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6831447535377044,
            "unit": "iter/sec",
            "range": "stddev: 0.004506112091389007",
            "extra": "mean: 1.4638186047999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.55539816575068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002790006551652945",
            "extra": "mean: 21.0281069777731 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13877.310617489924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031306517428178552",
            "extra": "mean: 72.06007183695051 usec\nrounds: 6473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.549239021181975,
            "unit": "iter/sec",
            "range": "stddev: 0.0007235115424308515",
            "extra": "mean: 26.631698166662925 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5667.050566938089,
            "unit": "iter/sec",
            "range": "stddev: 0.00006249558180317525",
            "extra": "mean: 176.4586336734067 usec\nrounds: 1960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8988570113210764,
            "unit": "iter/sec",
            "range": "stddev: 0.007372328211683455",
            "extra": "mean: 1.112524002600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75960.67941875377,
            "unit": "iter/sec",
            "range": "stddev: 5.744493732238307e-7",
            "extra": "mean: 13.164705840599842 usec\nrounds: 14006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 322.58802634017724,
            "unit": "iter/sec",
            "range": "stddev: 0.00018003274771158522",
            "extra": "mean: 3.099929068493927 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.35113526872591,
            "unit": "iter/sec",
            "range": "stddev: 0.000620686401887685",
            "extra": "mean: 8.30902008333491 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.23225216059619,
            "unit": "iter/sec",
            "range": "stddev: 0.00008732805971069592",
            "extra": "mean: 8.317235866664824 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.5861871773824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003359275523809584",
            "extra": "mean: 3.3945922909069024 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5649.822913553313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004902920279064733",
            "extra": "mean: 176.99669800288933 usec\nrounds: 2404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.72521338672942,
            "unit": "iter/sec",
            "range": "stddev: 0.000244449856188683",
            "extra": "mean: 17.028460899998663 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.136839649058,
            "unit": "iter/sec",
            "range": "stddev: 0.00002933156986150503",
            "extra": "mean: 1.4746286317633315 msec\nrounds: 573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.4771238809121,
            "unit": "iter/sec",
            "range": "stddev: 0.0005530031488383282",
            "extra": "mean: 27.414442083337715 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5166784432955853,
            "unit": "iter/sec",
            "range": "stddev: 0.0018361515612927738",
            "extra": "mean: 397.3491340000123 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5180.575881633833,
            "unit": "iter/sec",
            "range": "stddev: 0.00006268910249755466",
            "extra": "mean: 193.02873326210664 usec\nrounds: 1882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.9901345475135,
            "unit": "iter/sec",
            "range": "stddev: 0.00012668549488728664",
            "extra": "mean: 9.709667866669887 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.5825928079388,
            "unit": "iter/sec",
            "range": "stddev: 0.000029383035462267766",
            "extra": "mean: 1.8706183356016481 msec\nrounds: 441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1908796.9908750972,
            "unit": "iter/sec",
            "range": "stddev: 8.908023835892962e-8",
            "extra": "mean: 523.8901804542058 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.75353829527116,
            "unit": "iter/sec",
            "range": "stddev: 0.009176684042643105",
            "extra": "mean: 570.2755410000123 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1802691.8367556978,
            "unit": "iter/sec",
            "range": "stddev: 8.648825312904526e-8",
            "extra": "mean: 554.7259823396653 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.11982212614731,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519074062045375",
            "extra": "mean: 8.25628689380415 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1901069.493431705,
            "unit": "iter/sec",
            "range": "stddev: 8.14152456506235e-8",
            "extra": "mean: 526.0196975728938 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.03431525894366,
            "unit": "iter/sec",
            "range": "stddev: 0.00026014046178348126",
            "extra": "mean: 9.006224766351693 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.2670246856127,
            "unit": "iter/sec",
            "range": "stddev: 0.0037683602595747516",
            "extra": "mean: 4.400110404856749 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.396012723108937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005880796354770199",
            "extra": "mean: 96.19072490909275 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6204493.489946894,
            "unit": "iter/sec",
            "range": "stddev: 7.839983596250247e-9",
            "extra": "mean: 161.17351103992667 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.62372040887647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002122650412173049",
            "extra": "mean: 3.293550315019343 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.06818710764102,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925685846145784",
            "extra": "mean: 9.609084464646898 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.06964245443025,
            "unit": "iter/sec",
            "range": "stddev: 0.0006552050231031531",
            "extra": "mean: 10.63042203529609 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.49654240352734,
            "unit": "iter/sec",
            "range": "stddev: 0.0001402606625789062",
            "extra": "mean: 10.582397774192765 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.81019159451158,
            "unit": "iter/sec",
            "range": "stddev: 0.0005955094485065752",
            "extra": "mean: 8.41678635964926 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.99177347746294,
            "unit": "iter/sec",
            "range": "stddev: 0.00006592973811080492",
            "extra": "mean: 6.17315298507504 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146148.3978914263,
            "unit": "iter/sec",
            "range": "stddev: 2.935013152158861e-7",
            "extra": "mean: 6.84236032982654 usec\nrounds: 42919"
          }
        ]
      }
    ]
  }
}