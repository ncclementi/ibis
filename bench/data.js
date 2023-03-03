window.BENCHMARK_DATA = {
  "lastUpdate": 1677852462995,
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
      },
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "26d0ddeaeca096919de966cbf2b7907a54331051",
          "message": "fix(sqlite): fix random scalar range",
          "timestamp": "2023-03-03T09:02:14-05:00",
          "tree_id": "37042ba512d8b43bbf9064066046b25417042def",
          "url": "https://github.com/ibis-project/ibis/commit/26d0ddeaeca096919de966cbf2b7907a54331051"
        },
        "date": 1677852386195,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 286.5186952244232,
            "unit": "iter/sec",
            "range": "stddev: 0.000048334131382518006",
            "extra": "mean: 3.4901736489366746 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5250.247233227187,
            "unit": "iter/sec",
            "range": "stddev: 0.000052414910705412385",
            "extra": "mean: 190.4672209855776 usec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.6368266429621,
            "unit": "iter/sec",
            "range": "stddev: 0.000025240201143618155",
            "extra": "mean: 1.450038573009267 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 126.65435544112559,
            "unit": "iter/sec",
            "range": "stddev: 0.007812281238685587",
            "extra": "mean: 7.8955042368427915 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5573.724920950143,
            "unit": "iter/sec",
            "range": "stddev: 0.00008983501134211697",
            "extra": "mean: 179.41323157898717 usec\nrounds: 760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.3278969992069,
            "unit": "iter/sec",
            "range": "stddev: 0.00024209813087563753",
            "extra": "mean: 3.307666973261893 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2689045.235148171,
            "unit": "iter/sec",
            "range": "stddev: 1.6310387555484147e-8",
            "extra": "mean: 371.8792034169092 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6940259.010911244,
            "unit": "iter/sec",
            "range": "stddev: 4.716479868166088e-9",
            "extra": "mean: 144.08684148936197 nsec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.75449220644022,
            "unit": "iter/sec",
            "range": "stddev: 0.0007300321106290896",
            "extra": "mean: 9.827575945946377 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.31769545214526,
            "unit": "iter/sec",
            "range": "stddev: 0.010004358500638279",
            "extra": "mean: 10.832159480393118 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 268.90359774749425,
            "unit": "iter/sec",
            "range": "stddev: 0.006836315805173143",
            "extra": "mean: 3.7188048370368767 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5236.181331787497,
            "unit": "iter/sec",
            "range": "stddev: 0.00005670083032064025",
            "extra": "mean: 190.97887117263485 usec\nrounds: 3462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.370587220256596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002064175659519837",
            "extra": "mean: 16.294450571428293 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11784934.023232212,
            "unit": "iter/sec",
            "range": "stddev: 3.8431980741694634e-9",
            "extra": "mean: 84.85410253703074 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.47716650905727,
            "unit": "iter/sec",
            "range": "stddev: 0.00029249470639566177",
            "extra": "mean: 3.1798811058392022 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.4974298392707,
            "unit": "iter/sec",
            "range": "stddev: 0.0007414920609621529",
            "extra": "mean: 9.56961335353527 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 139.17434855028702,
            "unit": "iter/sec",
            "range": "stddev: 0.0007505538038041695",
            "extra": "mean: 7.1852321237104695 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.614733547438793,
            "unit": "iter/sec",
            "range": "stddev: 0.00016784619922206536",
            "extra": "mean: 178.10284166666435 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.78334102108334,
            "unit": "iter/sec",
            "range": "stddev: 0.00033611831715453234",
            "extra": "mean: 3.536276204917755 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.723403079124,
            "unit": "iter/sec",
            "range": "stddev: 0.000007321175088178198",
            "extra": "mean: 565.6993612564847 usec\nrounds: 1337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13923.603585201954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016100223906559764",
            "extra": "mean: 71.82048769779706 usec\nrounds: 7519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.32222243492106,
            "unit": "iter/sec",
            "range": "stddev: 0.003929535623624635",
            "extra": "mean: 4.43808865895962 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.74024146129736,
            "unit": "iter/sec",
            "range": "stddev: 0.0007432054437044974",
            "extra": "mean: 9.457137473683717 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.4059904303872,
            "unit": "iter/sec",
            "range": "stddev: 0.0007575709302133648",
            "extra": "mean: 7.552528376922287 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.1400494010268,
            "unit": "iter/sec",
            "range": "stddev: 0.00022827355931500702",
            "extra": "mean: 3.193459290540436 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.24174081012382,
            "unit": "iter/sec",
            "range": "stddev: 0.0004163705771056541",
            "extra": "mean: 7.505155621053093 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.75396644722045,
            "unit": "iter/sec",
            "range": "stddev: 0.0005515796110480103",
            "extra": "mean: 19.322190522726725 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1989362.7714557834,
            "unit": "iter/sec",
            "range": "stddev: 9.693918639949398e-8",
            "extra": "mean: 502.6735265927472 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.31752062246647,
            "unit": "iter/sec",
            "range": "stddev: 0.0014832302421811073",
            "extra": "mean: 18.755560804877877 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.71363742842183,
            "unit": "iter/sec",
            "range": "stddev: 0.0001869380581089343",
            "extra": "mean: 10.558141648352724 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5640.821493152055,
            "unit": "iter/sec",
            "range": "stddev: 0.00008519577932452611",
            "extra": "mean: 177.27914297837606 usec\nrounds: 2357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.81626250149152,
            "unit": "iter/sec",
            "range": "stddev: 0.014266771868325957",
            "extra": "mean: 8.346112448529693 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.5318693404731,
            "unit": "iter/sec",
            "range": "stddev: 0.00021152749715200436",
            "extra": "mean: 3.316399033333539 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.81282481200185,
            "unit": "iter/sec",
            "range": "stddev: 0.00017008816496124344",
            "extra": "mean: 5.133132282050831 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.487096870553306,
            "unit": "iter/sec",
            "range": "stddev: 0.003046339482552292",
            "extra": "mean: 402.0752114000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16771506179749618,
            "unit": "iter/sec",
            "range": "stddev: 0.07873745568259564",
            "extra": "mean: 5.962493703800007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.8650233909692,
            "unit": "iter/sec",
            "range": "stddev: 0.0002275681917559895",
            "extra": "mean: 3.2065153992801276 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.165938760059184,
            "unit": "iter/sec",
            "range": "stddev: 0.0007925431040673795",
            "extra": "mean: 26.906356555553007 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.558596693235053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003647705313413727",
            "extra": "mean: 94.70955554545473 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 139.03571691506016,
            "unit": "iter/sec",
            "range": "stddev: 0.0007234853129111787",
            "extra": "mean: 7.192396473281185 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.65415847531365,
            "unit": "iter/sec",
            "range": "stddev: 0.0008492370216332117",
            "extra": "mean: 10.034704173912823 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2682836.6826284234,
            "unit": "iter/sec",
            "range": "stddev: 1.8208439531613794e-8",
            "extra": "mean: 372.73979682606495 nsec\nrounds: 123442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11925.132341385444,
            "unit": "iter/sec",
            "range": "stddev: 0.00006576223346566211",
            "extra": "mean: 83.85651172436562 usec\nrounds: 4094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5259.919892679122,
            "unit": "iter/sec",
            "range": "stddev: 0.000054482946634935164",
            "extra": "mean: 190.11696383281864 usec\nrounds: 2129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.21376801124175,
            "unit": "iter/sec",
            "range": "stddev: 0.0008180765941842626",
            "extra": "mean: 9.504459529413994 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.363590882489824,
            "unit": "iter/sec",
            "range": "stddev: 0.026686509586638173",
            "extra": "mean: 31.884104206903693 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.14861686976572,
            "unit": "iter/sec",
            "range": "stddev: 0.0008051384272628769",
            "extra": "mean: 9.601663757575059 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.13577686228034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008423755801156879",
            "extra": "mean: 10.972639225001046 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7879718325001359,
            "unit": "iter/sec",
            "range": "stddev: 0.02313924045183369",
            "extra": "mean: 1.269080896999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.03941983594942,
            "unit": "iter/sec",
            "range": "stddev: 0.003959611329325146",
            "extra": "mean: 6.133486006060387 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 561.670303619984,
            "unit": "iter/sec",
            "range": "stddev: 0.012324202615841391",
            "extra": "mean: 1.7804039016393893 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73117.78494657433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016449105480976437",
            "extra": "mean: 13.676563106099007 usec\nrounds: 12788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.1539321122445,
            "unit": "iter/sec",
            "range": "stddev: 0.0001119848575344564",
            "extra": "mean: 6.1669796530607135 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6886886096341291,
            "unit": "iter/sec",
            "range": "stddev: 0.0016653102260595354",
            "extra": "mean: 1.4520350504000021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5175.905067099628,
            "unit": "iter/sec",
            "range": "stddev: 0.00002187975603924158",
            "extra": "mean: 193.20292529251515 usec\nrounds: 2222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 779670.5261764798,
            "unit": "iter/sec",
            "range": "stddev: 1.778547260041873e-7",
            "extra": "mean: 1.2825930523551026 usec\nrounds: 23202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.30332009421296,
            "unit": "iter/sec",
            "range": "stddev: 0.00009217044518410789",
            "extra": "mean: 13.10558962264399 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5363.0455155871905,
            "unit": "iter/sec",
            "range": "stddev: 0.00004844304703786428",
            "extra": "mean: 186.4612181816458 usec\nrounds: 2255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.86635357511356,
            "unit": "iter/sec",
            "range": "stddev: 0.0005237581606465796",
            "extra": "mean: 41.89999099999682 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147498.2761650082,
            "unit": "iter/sec",
            "range": "stddev: 3.79426496926416e-7",
            "extra": "mean: 6.779740251888011 usec\nrounds: 37879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 494277.6010935682,
            "unit": "iter/sec",
            "range": "stddev: 7.289532048385543e-7",
            "extra": "mean: 2.0231545952872283 usec\nrounds: 718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.07000872697364,
            "unit": "iter/sec",
            "range": "stddev: 0.00003803955675377276",
            "extra": "mean: 3.3775795268819953 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.694571552762774,
            "unit": "iter/sec",
            "range": "stddev: 0.00011879242222197326",
            "extra": "mean: 63.71629812500146 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.01912765105893,
            "unit": "iter/sec",
            "range": "stddev: 0.00036821913210811447",
            "extra": "mean: 23.245473690477883 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.797428238302882,
            "unit": "iter/sec",
            "range": "stddev: 0.012989514469392949",
            "extra": "mean: 1.2540313371999958 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5720.262604533467,
            "unit": "iter/sec",
            "range": "stddev: 0.00004823629905607608",
            "extra": "mean: 174.81714899023555 usec\nrounds: 2376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12694.84235902393,
            "unit": "iter/sec",
            "range": "stddev: 0.00000167004716931793",
            "extra": "mean: 78.77214791006567 usec\nrounds: 4976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7114410789744512,
            "unit": "iter/sec",
            "range": "stddev: 0.0008989058155888825",
            "extra": "mean: 584.3029083999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.38024340333254,
            "unit": "iter/sec",
            "range": "stddev: 0.00027495825022984293",
            "extra": "mean: 8.519321233334647 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5559155.844706543,
            "unit": "iter/sec",
            "range": "stddev: 9.043674467519921e-9",
            "extra": "mean: 179.88342617725527 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5448.157959591881,
            "unit": "iter/sec",
            "range": "stddev: 0.00008683030139704441",
            "extra": "mean: 183.5482758423747 usec\nrounds: 1780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1739274.758793554,
            "unit": "iter/sec",
            "range": "stddev: 1.0884187785872569e-7",
            "extra": "mean: 574.9522868334207 nsec\nrounds: 121937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 196.9027129064454,
            "unit": "iter/sec",
            "range": "stddev: 0.00006132238731838747",
            "extra": "mean: 5.0786501884061455 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.30006536321545,
            "unit": "iter/sec",
            "range": "stddev: 0.012266894166677185",
            "extra": "mean: 8.176610511450903 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 729.5511129415925,
            "unit": "iter/sec",
            "range": "stddev: 0.00016366444723628086",
            "extra": "mean: 1.3707058796304783 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.87069553712774,
            "unit": "iter/sec",
            "range": "stddev: 0.00022564365009795828",
            "extra": "mean: 3.237600764491415 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8185914428281604,
            "unit": "iter/sec",
            "range": "stddev: 0.003102208131184954",
            "extra": "mean: 1.2216106199999957 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.09310252679903,
            "unit": "iter/sec",
            "range": "stddev: 0.00006047842862891628",
            "extra": "mean: 10.299392788730655 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 130.38317359298438,
            "unit": "iter/sec",
            "range": "stddev: 0.0007270120207360283",
            "extra": "mean: 7.6697013306463 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 138.74854830091783,
            "unit": "iter/sec",
            "range": "stddev: 0.0007774303643462901",
            "extra": "mean: 7.207282614814824 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.8678328448154,
            "unit": "iter/sec",
            "range": "stddev: 0.000027213731486998938",
            "extra": "mean: 1.8626558322577977 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 333.84049301947687,
            "unit": "iter/sec",
            "range": "stddev: 0.00005401517344328518",
            "extra": "mean: 2.995442496970127 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8386.08016140363,
            "unit": "iter/sec",
            "range": "stddev: 0.000014857364669734556",
            "extra": "mean: 119.24522312610758 usec\nrounds: 4056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.56692205656033,
            "unit": "iter/sec",
            "range": "stddev: 0.027675476838337668",
            "extra": "mean: 28.929390888889216 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.74678929389131,
            "unit": "iter/sec",
            "range": "stddev: 0.0002856808281359597",
            "extra": "mean: 11.527804177421235 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 136.10332315123122,
            "unit": "iter/sec",
            "range": "stddev: 0.00005594387571788417",
            "extra": "mean: 7.347359174241836 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6200259.028472935,
            "unit": "iter/sec",
            "range": "stddev: 8.130561717511114e-9",
            "extra": "mean: 161.28358434806142 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.80105489276556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000989777875625477",
            "extra": "mean: 6.418441779410788 msec\nrounds: 136"
          }
        ]
      }
    ]
  }
}