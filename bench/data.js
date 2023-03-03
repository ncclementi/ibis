window.BENCHMARK_DATA = {
  "lastUpdate": 1677852339209,
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
          "id": "59a2059e05febf794c2593f1c5bf159aaf036348",
          "message": "chore(dev-deps): run ruff as a local hook to avoid dual updating chores",
          "timestamp": "2023-03-03T08:50:46-05:00",
          "tree_id": "992b837f7ca48fdbaf839eab32df459432e0b9b8",
          "url": "https://github.com/ibis-project/ibis/commit/59a2059e05febf794c2593f1c5bf159aaf036348"
        },
        "date": 1677852254745,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.60677890445521,
            "unit": "iter/sec",
            "range": "stddev: 0.006377452785745372",
            "extra": "mean: 10.141290599999696 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11675.83701613465,
            "unit": "iter/sec",
            "range": "stddev: 0.000012100300781095329",
            "extra": "mean: 85.64696463457963 usec\nrounds: 4298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.55001250758573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005455810928274212",
            "extra": "mean: 9.297999848484146 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1654095.665267245,
            "unit": "iter/sec",
            "range": "stddev: 1.0888627151815857e-7",
            "extra": "mean: 604.5599544198276 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.7721867192163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005840842084011852",
            "extra": "mean: 9.730259050847076 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.61423931051877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286459228643339",
            "extra": "mean: 3.168424853658598 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.509873479621218,
            "unit": "iter/sec",
            "range": "stddev: 0.00019938714686803535",
            "extra": "mean: 95.14862399999515 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5078.867811782219,
            "unit": "iter/sec",
            "range": "stddev: 0.00007782760748954428",
            "extra": "mean: 196.8942758620629 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5652.309883593956,
            "unit": "iter/sec",
            "range": "stddev: 0.00004363218410487717",
            "extra": "mean: 176.91882090586324 usec\nrounds: 2937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.12283832514385,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485791058496307",
            "extra": "mean: 7.086025280302417 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.36916147898233,
            "unit": "iter/sec",
            "range": "stddev: 0.0005757216705150688",
            "extra": "mean: 7.023993044642803 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5178.564323010039,
            "unit": "iter/sec",
            "range": "stddev: 0.0001574831664728941",
            "extra": "mean: 193.10371323509028 usec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.86052769698762,
            "unit": "iter/sec",
            "range": "stddev: 0.0031776450713345114",
            "extra": "mean: 5.468648770701725 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 141.65733164089235,
            "unit": "iter/sec",
            "range": "stddev: 0.0006153402786017908",
            "extra": "mean: 7.059288696295964 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.47523631082121,
            "unit": "iter/sec",
            "range": "stddev: 0.0007659553016586653",
            "extra": "mean: 21.516835187498806 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.42442655595787,
            "unit": "iter/sec",
            "range": "stddev: 0.000581737359381086",
            "extra": "mean: 17.7228207894726 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 730899.0793466696,
            "unit": "iter/sec",
            "range": "stddev: 2.5184152454278055e-7",
            "extra": "mean: 1.3681779444760995 usec\nrounds: 23867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.9680776100172,
            "unit": "iter/sec",
            "range": "stddev: 0.00002081728606312362",
            "extra": "mean: 1.356910876306873 msec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.4138541159744,
            "unit": "iter/sec",
            "range": "stddev: 0.00021972206686036536",
            "extra": "mean: 3.263560007379792 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.929931381652237,
            "unit": "iter/sec",
            "range": "stddev: 0.00420593675324585",
            "extra": "mean: 1.075348159799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.2531623944834,
            "unit": "iter/sec",
            "range": "stddev: 0.00004826225095471217",
            "extra": "mean: 3.3869239261996955 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12874584.888622878,
            "unit": "iter/sec",
            "range": "stddev: 3.8062691850470115e-9",
            "extra": "mean: 77.67240720008033 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5239745171294756,
            "unit": "iter/sec",
            "range": "stddev: 0.0009102922099149034",
            "extra": "mean: 396.20051359999593 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 95.2163869562984,
            "unit": "iter/sec",
            "range": "stddev: 0.011047609245043027",
            "extra": "mean: 10.502393883722677 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.96075624308966,
            "unit": "iter/sec",
            "range": "stddev: 0.00034755741937470745",
            "extra": "mean: 7.248438086538027 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9328589592785248,
            "unit": "iter/sec",
            "range": "stddev: 0.00259709146403384",
            "extra": "mean: 1.0719734104000054 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.3012301024782,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241048409538793",
            "extra": "mean: 15.551802016948656 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8492733451735286,
            "unit": "iter/sec",
            "range": "stddev: 0.0020101510605718812",
            "extra": "mean: 1.1774771994000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 194.8988257619968,
            "unit": "iter/sec",
            "range": "stddev: 0.00005536276120257854",
            "extra": "mean: 5.130867238888155 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5342.607053639506,
            "unit": "iter/sec",
            "range": "stddev: 0.000020147619829019025",
            "extra": "mean: 187.17453669342518 usec\nrounds: 2480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.73776141914743,
            "unit": "iter/sec",
            "range": "stddev: 0.0006350351127179868",
            "extra": "mean: 7.105413571427957 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2465536.3993496746,
            "unit": "iter/sec",
            "range": "stddev: 2.109098681109314e-8",
            "extra": "mean: 405.59125400197615 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.7072189035931,
            "unit": "iter/sec",
            "range": "stddev: 0.000278304132749843",
            "extra": "mean: 3.218464004565926 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2563596.7698643017,
            "unit": "iter/sec",
            "range": "stddev: 2.1104601172558397e-8",
            "extra": "mean: 390.07694648202073 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.26015178029317,
            "unit": "iter/sec",
            "range": "stddev: 0.00017361189893446606",
            "extra": "mean: 10.497568829266486 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.1786586818011,
            "unit": "iter/sec",
            "range": "stddev: 0.00019882126651707538",
            "extra": "mean: 3.3093005454531976 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.2320037019492,
            "unit": "iter/sec",
            "range": "stddev: 0.000036428873993475876",
            "extra": "mean: 842.2953532939352 usec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.38879412213812,
            "unit": "iter/sec",
            "range": "stddev: 0.0003719425227223829",
            "extra": "mean: 10.268121799987284 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.6859550550421,
            "unit": "iter/sec",
            "range": "stddev: 0.02380027630342754",
            "extra": "mean: 28.830112891893275 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 248.10322683965586,
            "unit": "iter/sec",
            "range": "stddev: 0.0042478181842914445",
            "extra": "mean: 4.0305803867931145 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5440.2922715308505,
            "unit": "iter/sec",
            "range": "stddev: 0.00004455418852969202",
            "extra": "mean: 183.81365376875402 usec\nrounds: 2481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 139.99657962103214,
            "unit": "iter/sec",
            "range": "stddev: 0.0006491183883056777",
            "extra": "mean: 7.1430316562517415 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.35803791311974,
            "unit": "iter/sec",
            "range": "stddev: 0.00023717122550142723",
            "extra": "mean: 3.264154604239862 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.76390219949695,
            "unit": "iter/sec",
            "range": "stddev: 0.00022427312342648896",
            "extra": "mean: 3.2178769571442802 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.09696202237801,
            "unit": "iter/sec",
            "range": "stddev: 0.0005674307050125147",
            "extra": "mean: 36.90450609090978 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13314.673050192774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023638650240179797",
            "extra": "mean: 75.10511119801937 usec\nrounds: 6394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7821427672261074,
            "unit": "iter/sec",
            "range": "stddev: 0.001902762151390483",
            "extra": "mean: 561.122272800003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5736.541724280834,
            "unit": "iter/sec",
            "range": "stddev: 0.00005090119880380897",
            "extra": "mean: 174.32105405375844 usec\nrounds: 2516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137951.67263839758,
            "unit": "iter/sec",
            "range": "stddev: 3.5830795494834897e-7",
            "extra": "mean: 7.248915369233872 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5916127.398457158,
            "unit": "iter/sec",
            "range": "stddev: 9.71362941687453e-9",
            "extra": "mean: 169.02949051789773 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11844.478954940943,
            "unit": "iter/sec",
            "range": "stddev: 0.00003190680516318107",
            "extra": "mean: 84.42752136284125 usec\nrounds: 5547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.413804027416,
            "unit": "iter/sec",
            "range": "stddev: 0.00007360996701578622",
            "extra": "mean: 3.082482889401003 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70344.12716008107,
            "unit": "iter/sec",
            "range": "stddev: 5.40426162481622e-7",
            "extra": "mean: 14.215827822048528 usec\nrounds: 13004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7621.882190497971,
            "unit": "iter/sec",
            "range": "stddev: 0.000014845091091372768",
            "extra": "mean: 131.201188237556 usec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.88507327444121,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621499849010135",
            "extra": "mean: 10.883160499999954 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.68330033197787,
            "unit": "iter/sec",
            "range": "stddev: 0.00045966893895239483",
            "extra": "mean: 20.971702735294304 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.13533858679699,
            "unit": "iter/sec",
            "range": "stddev: 0.0005538743390809711",
            "extra": "mean: 9.511549717171702 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.45521549215944,
            "unit": "iter/sec",
            "range": "stddev: 0.00007862039618902174",
            "extra": "mean: 10.054776866667542 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5838.896499114622,
            "unit": "iter/sec",
            "range": "stddev: 0.000042721537343497036",
            "extra": "mean: 171.26523824349934 usec\nrounds: 2573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6472468.207192254,
            "unit": "iter/sec",
            "range": "stddev: 7.801126382987339e-9",
            "extra": "mean: 154.50056577934097 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 118.77485621014337,
            "unit": "iter/sec",
            "range": "stddev: 0.009654751595713142",
            "extra": "mean: 8.419290343999592 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.85462337489898,
            "unit": "iter/sec",
            "range": "stddev: 0.0005937159128488182",
            "extra": "mean: 9.817914659791866 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.3987891052938,
            "unit": "iter/sec",
            "range": "stddev: 0.00017267154862043982",
            "extra": "mean: 6.313179574467967 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.35974357930725,
            "unit": "iter/sec",
            "range": "stddev: 0.00012948609652940545",
            "extra": "mean: 13.8198389122812 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.7979443553576,
            "unit": "iter/sec",
            "range": "stddev: 0.000654679332174219",
            "extra": "mean: 9.823381074466367 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 480918.02963760664,
            "unit": "iter/sec",
            "range": "stddev: 1.8645192559390798e-7",
            "extra": "mean: 2.0793564357600505 usec\nrounds: 2020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6720257713044818,
            "unit": "iter/sec",
            "range": "stddev: 0.05389927231997015",
            "extra": "mean: 1.4880381715999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.30010363463748,
            "unit": "iter/sec",
            "range": "stddev: 0.00009598453802641668",
            "extra": "mean: 6.609380799994824 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.39592361453661,
            "unit": "iter/sec",
            "range": "stddev: 0.0007631248474887361",
            "extra": "mean: 26.740882517239875 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.80206997426498,
            "unit": "iter/sec",
            "range": "stddev: 0.000025355703285985015",
            "extra": "mean: 5.133415677421233 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.629486899057465,
            "unit": "iter/sec",
            "range": "stddev: 0.00011104700868384784",
            "extra": "mean: 63.98162693749754 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.9705486142924,
            "unit": "iter/sec",
            "range": "stddev: 0.00001851480236980609",
            "extra": "mean: 1.8349615452481245 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5829.513043935046,
            "unit": "iter/sec",
            "range": "stddev: 0.00004240645155693054",
            "extra": "mean: 171.54091473221555 usec\nrounds: 2240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.73873390323149,
            "unit": "iter/sec",
            "range": "stddev: 0.00009807139391281006",
            "extra": "mean: 13.20328382142831 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.53193990627963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005634297164420431",
            "extra": "mean: 7.433179070313267 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.1092217014618,
            "unit": "iter/sec",
            "range": "stddev: 0.000050851482722061344",
            "extra": "mean: 8.466739392523008 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.5750992897024,
            "unit": "iter/sec",
            "range": "stddev: 0.00020050428474356694",
            "extra": "mean: 3.3049646264597072 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 141.21865941350472,
            "unit": "iter/sec",
            "range": "stddev: 0.0006190599356604822",
            "extra": "mean: 7.081217200001051 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.617366676281822,
            "unit": "iter/sec",
            "range": "stddev: 0.00014685730158863313",
            "extra": "mean: 178.01935633333224 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 133.0188509971548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006702626235873761",
            "extra": "mean: 7.517731453126064 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7266338.457153012,
            "unit": "iter/sec",
            "range": "stddev: 5.499929741304202e-9",
            "extra": "mean: 137.62089474594492 nsec\nrounds: 66667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.4273830240268,
            "unit": "iter/sec",
            "range": "stddev: 0.000040005986823493635",
            "extra": "mean: 1.4546991066910238 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1732.028267702642,
            "unit": "iter/sec",
            "range": "stddev: 0.000005440695845296961",
            "extra": "mean: 577.3577825761455 usec\nrounds: 1343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 360.1548424168598,
            "unit": "iter/sec",
            "range": "stddev: 0.000032206661009100194",
            "extra": "mean: 2.7765835197144284 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.177906651971166,
            "unit": "iter/sec",
            "range": "stddev: 0.1415347915862908",
            "extra": "mean: 5.6209252937999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5332.2289839176265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004412283295721441",
            "extra": "mean: 187.53883282508485 usec\nrounds: 2291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.1332088344441,
            "unit": "iter/sec",
            "range": "stddev: 0.0002410822153335993",
            "extra": "mean: 3.507132698038785 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2494304.4113090844,
            "unit": "iter/sec",
            "range": "stddev: 1.8304086272894343e-8",
            "extra": "mean: 400.91337507393183 nsec\nrounds: 109891"
          }
        ]
      }
    ]
  }
}