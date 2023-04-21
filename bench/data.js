window.BENCHMARK_DATA = {
  "lastUpdate": 1682063568656,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "fc89cc3a7f7354019362ba18ffe842eb1955f3ce",
          "message": "refactor(common): add sanity checks for creating ENodes and Patterns",
          "timestamp": "2023-04-21T09:46:57+02:00",
          "tree_id": "3f6bdfe31fc1f59a2a40605a290b6b6791b795dd",
          "url": "https://github.com/ibis-project/ibis/commit/fc89cc3a7f7354019362ba18ffe842eb1955f3ce"
        },
        "date": 1682063474334,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 943.5845749818781,
            "unit": "iter/sec",
            "range": "stddev: 0.006395727913524934",
            "extra": "mean: 1.059788413793438 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2801803001131327,
            "unit": "iter/sec",
            "range": "stddev: 0.0024181773100099033",
            "extra": "mean: 438.56181020000236 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5840292.40579647,
            "unit": "iter/sec",
            "range": "stddev: 2.980037889461393e-8",
            "extra": "mean: 171.22430359956905 nsec\nrounds: 199921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.17156047593348,
            "unit": "iter/sec",
            "range": "stddev: 0.0009776406394049876",
            "extra": "mean: 11.604756772152061 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 643009.8349742471,
            "unit": "iter/sec",
            "range": "stddev: 6.097836191507305e-7",
            "extra": "mean: 1.5551861660717063 usec\nrounds: 21975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3932.8774304544218,
            "unit": "iter/sec",
            "range": "stddev: 0.00003144007892976997",
            "extra": "mean: 254.26675956297362 usec\nrounds: 915"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 250.55794886926205,
            "unit": "iter/sec",
            "range": "stddev: 0.00032861978430717654",
            "extra": "mean: 3.991092697369531 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10647.394259599023,
            "unit": "iter/sec",
            "range": "stddev: 0.000016827648834634224",
            "extra": "mean: 93.9196929895277 usec\nrounds: 3723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7823503459344507,
            "unit": "iter/sec",
            "range": "stddev: 0.010028256297955389",
            "extra": "mean: 1.2781997287999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.91424716637962,
            "unit": "iter/sec",
            "range": "stddev: 0.00028435522411177143",
            "extra": "mean: 11.63951303749915 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.99636808013238,
            "unit": "iter/sec",
            "range": "stddev: 0.0007049080153754491",
            "extra": "mean: 12.987625584615504 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 105.08957204581753,
            "unit": "iter/sec",
            "range": "stddev: 0.000253610264906408",
            "extra": "mean: 9.515692000001811 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 248.5868524175471,
            "unit": "iter/sec",
            "range": "stddev: 0.0002954906413851057",
            "extra": "mean: 4.022738894977105 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62587.71853529591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017854979954199946",
            "extra": "mean: 15.97757552763418 usec\nrounds: 11466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 461.81236155517405,
            "unit": "iter/sec",
            "range": "stddev: 0.00006616241992225816",
            "extra": "mean: 2.1653816208653547 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.09887536114529,
            "unit": "iter/sec",
            "range": "stddev: 0.0009797249258538532",
            "extra": "mean: 12.330627219512627 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1314670.3748496186,
            "unit": "iter/sec",
            "range": "stddev: 3.638723088507257e-7",
            "extra": "mean: 760.6469417205718 nsec\nrounds: 114930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14646017760750166,
            "unit": "iter/sec",
            "range": "stddev: 0.057572324519655944",
            "extra": "mean: 6.827794533199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.07234025581619,
            "unit": "iter/sec",
            "range": "stddev: 0.001003349113949908",
            "extra": "mean: 11.618134199998435 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.98430354360369,
            "unit": "iter/sec",
            "range": "stddev: 0.0009374854079454631",
            "extra": "mean: 11.906986875003511 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.71389868921202,
            "unit": "iter/sec",
            "range": "stddev: 0.00036427315975478967",
            "extra": "mean: 12.23782020000499 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4621481.748961684,
            "unit": "iter/sec",
            "range": "stddev: 4.214098244073832e-8",
            "extra": "mean: 216.38081773755076 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.27921520542095,
            "unit": "iter/sec",
            "range": "stddev: 0.0009617998263050814",
            "extra": "mean: 12.007798074625782 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9201.57753612499,
            "unit": "iter/sec",
            "range": "stddev: 0.000005242636380591708",
            "extra": "mean: 108.67701718254764 usec\nrounds: 5005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 176.33744389028942,
            "unit": "iter/sec",
            "range": "stddev: 0.00008091748065812188",
            "extra": "mean: 5.670945307691784 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.14575469515685,
            "unit": "iter/sec",
            "range": "stddev: 0.0009230654678669558",
            "extra": "mean: 11.608233087500253 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.90308520210868,
            "unit": "iter/sec",
            "range": "stddev: 0.001006684942933649",
            "extra": "mean: 12.36046805263164 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1526.5764894627391,
            "unit": "iter/sec",
            "range": "stddev: 0.000023393831508418416",
            "extra": "mean: 655.0605272009254 usec\nrounds: 1011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.11155701162093,
            "unit": "iter/sec",
            "range": "stddev: 0.00035320104894867593",
            "extra": "mean: 24.32406050000324 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.66095294843766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006896419516115943",
            "extra": "mean: 26.552700388891363 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 92.18216442711294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002352499381371293",
            "extra": "mean: 10.848085486110334 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9546419.159993874,
            "unit": "iter/sec",
            "range": "stddev: 1.1897015926436086e-8",
            "extra": "mean: 104.7513191323685 nsec\nrounds: 92576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 256.2905178818447,
            "unit": "iter/sec",
            "range": "stddev: 0.00009803993135986625",
            "extra": "mean: 3.9018220738896816 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.05655968642066,
            "unit": "iter/sec",
            "range": "stddev: 0.00010745081666868932",
            "extra": "mean: 8.691377551401123 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 52.092604119402814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005957801450618413",
            "extra": "mean: 19.196583025641683 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 238.65565168598206,
            "unit": "iter/sec",
            "range": "stddev: 0.00037638839487760394",
            "extra": "mean: 4.190137517948992 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.5290702614247,
            "unit": "iter/sec",
            "range": "stddev: 0.00030657204005587855",
            "extra": "mean: 4.0236741679680055 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.47798308701624,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414644334324907",
            "extra": "mean: 11.431447830767638 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.593040823608995,
            "unit": "iter/sec",
            "range": "stddev: 0.0008576491446772815",
            "extra": "mean: 21.462432636362585 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.34462076136344,
            "unit": "iter/sec",
            "range": "stddev: 0.00044875591070589905",
            "extra": "mean: 22.55064950000158 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.87092802636023,
            "unit": "iter/sec",
            "range": "stddev: 0.001048638923585518",
            "extra": "mean: 11.645384799999192 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 233.3205951502675,
            "unit": "iter/sec",
            "range": "stddev: 0.00039260285885810023",
            "extra": "mean: 4.285948265115478 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 67.62299740749184,
            "unit": "iter/sec",
            "range": "stddev: 0.023055617855709514",
            "extra": "mean: 14.787868599998077 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.148690690317406,
            "unit": "iter/sec",
            "range": "stddev: 0.0004397015664132469",
            "extra": "mean: 194.22413583332818 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1788.113550931261,
            "unit": "iter/sec",
            "range": "stddev: 0.00010763373272593797",
            "extra": "mean: 559.2486000003712 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.91254224875977,
            "unit": "iter/sec",
            "range": "stddev: 0.0009003441412640629",
            "extra": "mean: 28.64300149999887 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.07937757197558,
            "unit": "iter/sec",
            "range": "stddev: 0.000103867424626714",
            "extra": "mean: 7.038319121952887 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.01034722218099,
            "unit": "iter/sec",
            "range": "stddev: 0.0009846046432726025",
            "extra": "mean: 27.019470906251897 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1617759.3183335548,
            "unit": "iter/sec",
            "range": "stddev: 1.2545475514369405e-7",
            "extra": "mean: 618.1389213261307 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1850.7027460187064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000965078211235865",
            "extra": "mean: 540.3352873124727 usec\nrounds: 1072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6166391990655206,
            "unit": "iter/sec",
            "range": "stddev: 0.08898850707121862",
            "extra": "mean: 1.621693855199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2164801.2196835987,
            "unit": "iter/sec",
            "range": "stddev: 4.303212069278771e-8",
            "extra": "mean: 461.9361772837727 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 999.7958936865786,
            "unit": "iter/sec",
            "range": "stddev: 0.000019788794670769473",
            "extra": "mean: 1.0002041479813133 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 656.9883460651303,
            "unit": "iter/sec",
            "range": "stddev: 0.00004207905896625573",
            "extra": "mean: 1.5220970143370935 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.90272936733868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809032289816226",
            "extra": "mean: 4.0666486401871635 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 199.51588662983067,
            "unit": "iter/sec",
            "range": "stddev: 0.004426933765676427",
            "extra": "mean: 5.012132201057942 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.80901850750494,
            "unit": "iter/sec",
            "range": "stddev: 0.0008868929261636577",
            "extra": "mean: 11.65378671604942 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1866.4375065760405,
            "unit": "iter/sec",
            "range": "stddev: 0.00012731558035894577",
            "extra": "mean: 535.7800603967123 usec\nrounds: 1159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4981463.868104557,
            "unit": "iter/sec",
            "range": "stddev: 3.514785317091183e-8",
            "extra": "mean: 200.74420420941576 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1375.4464022283196,
            "unit": "iter/sec",
            "range": "stddev: 0.006582009822067007",
            "extra": "mean: 727.0366903282672 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.35884919954671,
            "unit": "iter/sec",
            "range": "stddev: 0.0009427414679770202",
            "extra": "mean: 11.715246976470606 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 581.2629756826876,
            "unit": "iter/sec",
            "range": "stddev: 0.00003833182284955666",
            "extra": "mean: 1.7203917019237462 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4050368213517554,
            "unit": "iter/sec",
            "range": "stddev: 0.004075596069538844",
            "extra": "mean: 711.7251198000076 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.6007455996116,
            "unit": "iter/sec",
            "range": "stddev: 0.0009533374785507749",
            "extra": "mean: 46.294698272729114 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.72129567049416,
            "unit": "iter/sec",
            "range": "stddev: 0.0009992377456633",
            "extra": "mean: 11.665712611763597 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.88147596255865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000925460921811024",
            "extra": "mean: 7.252605856000173 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 243.92422611804537,
            "unit": "iter/sec",
            "range": "stddev: 0.00028673591503401794",
            "extra": "mean: 4.09963379166798 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.851081069556404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006986055309913021",
            "extra": "mean: 101.51170139999977 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.35052713116526,
            "unit": "iter/sec",
            "range": "stddev: 0.00004540976787620258",
            "extra": "mean: 10.487618999991355 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1628748.6445877287,
            "unit": "iter/sec",
            "range": "stddev: 2.9754530549044216e-7",
            "extra": "mean: 613.9682776240293 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.21729365303936,
            "unit": "iter/sec",
            "range": "stddev: 0.0009202596324084101",
            "extra": "mean: 12.016733014285867 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.49571527481962,
            "unit": "iter/sec",
            "range": "stddev: 0.00023137117099577504",
            "extra": "mean: 4.454427999999179 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1828.6086220488153,
            "unit": "iter/sec",
            "range": "stddev: 0.0001025513523722266",
            "extra": "mean: 546.8638766887017 usec\nrounds: 592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7211.09342618566,
            "unit": "iter/sec",
            "range": "stddev: 0.00002060033783767419",
            "extra": "mean: 138.67522453234315 usec\nrounds: 3848"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.812875225090027,
            "unit": "iter/sec",
            "range": "stddev: 0.0004169387423030274",
            "extra": "mean: 72.39622335714557 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1846.5232709069817,
            "unit": "iter/sec",
            "range": "stddev: 0.00010012291471528232",
            "extra": "mean: 541.5582981030163 usec\nrounds: 1107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.67527970882787,
            "unit": "iter/sec",
            "range": "stddev: 0.0001360486783903529",
            "extra": "mean: 7.15946302083401 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143941.36235838142,
            "unit": "iter/sec",
            "range": "stddev: 0.000001152512365893177",
            "extra": "mean: 6.947273414782794 usec\nrounds: 36761"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1873.8451603585765,
            "unit": "iter/sec",
            "range": "stddev: 0.00010725680236036053",
            "extra": "mean: 533.6620234985911 usec\nrounds: 1149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 264.2205252493049,
            "unit": "iter/sec",
            "range": "stddev: 0.00009585607757954176",
            "extra": "mean: 3.7847173267725944 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7913981420257494,
            "unit": "iter/sec",
            "range": "stddev: 0.006707612394180486",
            "extra": "mean: 1.2635864894000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.4216121708536,
            "unit": "iter/sec",
            "range": "stddev: 0.00013970249136773693",
            "extra": "mean: 10.479806170215268 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6839598866450837,
            "unit": "iter/sec",
            "range": "stddev: 0.002663096825958993",
            "extra": "mean: 1.4620740477999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.68356890331748,
            "unit": "iter/sec",
            "range": "stddev: 0.0008953953158752059",
            "extra": "mean: 11.949777155839692 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12223.861888987814,
            "unit": "iter/sec",
            "range": "stddev: 0.000004681768521973432",
            "extra": "mean: 81.80720700884851 usec\nrounds: 6734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 415691.270549679,
            "unit": "iter/sec",
            "range": "stddev: 3.4059595493821573e-7",
            "extra": "mean: 2.405631464614773 usec\nrounds: 1837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 140.90510748802157,
            "unit": "iter/sec",
            "range": "stddev: 0.00423243957170136",
            "extra": "mean: 7.0969748210511865 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.58875159785096,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508935184769336",
            "extra": "mean: 14.79536130434751 msec\nrounds: 46"
          }
        ]
      }
    ]
  }
}