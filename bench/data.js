window.BENCHMARK_DATA = {
  "lastUpdate": 1677074539449,
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
          "id": "86bcf3259971fd2b538d6a5a9abac8dd836b6ee9",
          "message": "fix(clickhouse): fix set ops with table operands",
          "timestamp": "2023-02-22T08:53:21-05:00",
          "tree_id": "d473976d3f33b748c92a25bd7de43efd6f975ff2",
          "url": "https://github.com/ibis-project/ibis/commit/86bcf3259971fd2b538d6a5a9abac8dd836b6ee9"
        },
        "date": 1677074451292,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.21329379402201,
            "unit": "iter/sec",
            "range": "stddev: 0.0007749175219015686",
            "extra": "mean: 16.336320724137515 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 340.25762901274754,
            "unit": "iter/sec",
            "range": "stddev: 0.000437933820887178",
            "extra": "mean: 2.9389495333329783 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.485063246342815,
            "unit": "iter/sec",
            "range": "stddev: 0.0644151458975414",
            "extra": "mean: 673.3719944000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 69.07793963490023,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722918069235425",
            "extra": "mean: 14.476401659999283 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.763139976370965,
            "unit": "iter/sec",
            "range": "stddev: 0.002453229820714572",
            "extra": "mean: 27.96175058064558 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09402273235736085,
            "unit": "iter/sec",
            "range": "stddev: 0.18728135610708815",
            "extra": "mean: 10.635725796599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7154.687469968565,
            "unit": "iter/sec",
            "range": "stddev: 0.0001286383128638083",
            "extra": "mean: 139.7685089946205 usec\nrounds: 3224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 564573.6145443887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015129225091424256",
            "extra": "mean: 1.7712482026050769 usec\nrounds: 19194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 56.00568594813713,
            "unit": "iter/sec",
            "range": "stddev: 0.0013183845543980437",
            "extra": "mean: 17.85532992000185 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 509.6499989811242,
            "unit": "iter/sec",
            "range": "stddev: 0.00016111360657754492",
            "extra": "mean: 1.962130878051933 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1239.6882018878757,
            "unit": "iter/sec",
            "range": "stddev: 0.00012190694502763503",
            "extra": "mean: 806.6544462366719 usec\nrounds: 1116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.47063787844330723,
            "unit": "iter/sec",
            "range": "stddev: 0.028273143492175776",
            "extra": "mean: 2.124775853800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 116.95490384933547,
            "unit": "iter/sec",
            "range": "stddev: 0.009945140547095",
            "extra": "mean: 8.550304152173283 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3087.926289454609,
            "unit": "iter/sec",
            "range": "stddev: 0.00006571609022838055",
            "extra": "mean: 323.841926996457 usec\nrounds: 726"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.33971090012848,
            "unit": "iter/sec",
            "range": "stddev: 0.0005905865314875152",
            "extra": "mean: 13.273212600000761 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4989.758132499566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000410708359804746",
            "extra": "mean: 200.4105155892718 usec\nrounds: 2630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 187.1576497727611,
            "unit": "iter/sec",
            "range": "stddev: 0.0005717790764327551",
            "extra": "mean: 5.343089108108367 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.12072928630483,
            "unit": "iter/sec",
            "range": "stddev: 0.015834816228319903",
            "extra": "mean: 892.2761385999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 235.55119140260706,
            "unit": "iter/sec",
            "range": "stddev: 0.00032112952422470094",
            "extra": "mean: 4.245361672957058 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4777849.46722963,
            "unit": "iter/sec",
            "range": "stddev: 2.1511482879094376e-7",
            "extra": "mean: 209.29918509547187 nsec\nrounds: 47392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2846.499040767782,
            "unit": "iter/sec",
            "range": "stddev: 0.00013334360395334842",
            "extra": "mean: 351.30874301305636 usec\nrounds: 1825"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.01863761919191,
            "unit": "iter/sec",
            "range": "stddev: 0.0023061199555286954",
            "extra": "mean: 45.41607057143167 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3101.0933755292767,
            "unit": "iter/sec",
            "range": "stddev: 0.00007421504721607554",
            "extra": "mean: 322.46691050679044 usec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 178.33926886937394,
            "unit": "iter/sec",
            "range": "stddev: 0.00035074553173881933",
            "extra": "mean: 5.607290005951848 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 470.0788229072918,
            "unit": "iter/sec",
            "range": "stddev: 0.0002013391561741274",
            "extra": "mean: 2.1273028081020753 msec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1395563.3697899815,
            "unit": "iter/sec",
            "range": "stddev: 8.189969311156566e-7",
            "extra": "mean: 716.5564972878947 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 74.94965491150812,
            "unit": "iter/sec",
            "range": "stddev: 0.0008602093052152294",
            "extra": "mean: 13.342289583330095 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 138.9387597516167,
            "unit": "iter/sec",
            "range": "stddev: 0.013060989065756234",
            "extra": "mean: 7.197415622449185 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.238970351617375,
            "unit": "iter/sec",
            "range": "stddev: 0.0018230803444541528",
            "extra": "mean: 17.781264375001864 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.107855141217768,
            "unit": "iter/sec",
            "range": "stddev: 0.009641536971435398",
            "extra": "mean: 140.6894175714269 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 66.87608628435014,
            "unit": "iter/sec",
            "range": "stddev: 0.0006602955255568032",
            "extra": "mean: 14.953028138460501 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 71.63876045474665,
            "unit": "iter/sec",
            "range": "stddev: 0.001031786049521692",
            "extra": "mean: 13.958923823531093 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 113032.99171358306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041482539137895446",
            "extra": "mean: 8.846974541149219 usec\nrounds: 32680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3780474.750871971,
            "unit": "iter/sec",
            "range": "stddev: 6.496958181493202e-7",
            "extra": "mean: 264.5170424087535 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1357490.484354051,
            "unit": "iter/sec",
            "range": "stddev: 9.798906749084703e-7",
            "extra": "mean: 736.653414168012 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.83364164047808,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310321939255215",
            "extra": "mean: 10.77195704411505 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 236.02971898346422,
            "unit": "iter/sec",
            "range": "stddev: 0.0006515096032805452",
            "extra": "mean: 4.236754609999167 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 74.97806109868819,
            "unit": "iter/sec",
            "range": "stddev: 0.0007806645220417328",
            "extra": "mean: 13.337234723685006 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8261.410362672332,
            "unit": "iter/sec",
            "range": "stddev: 0.00004400165458942119",
            "extra": "mean: 121.04470739261623 usec\nrounds: 1285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5236765320196672,
            "unit": "iter/sec",
            "range": "stddev: 0.0260876001721633",
            "extra": "mean: 1.9095757377999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.88454225344802,
            "unit": "iter/sec",
            "range": "stddev: 0.0007055274757976302",
            "extra": "mean: 13.911196602939125 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 96.09260772087886,
            "unit": "iter/sec",
            "range": "stddev: 0.0006232573463989951",
            "extra": "mean: 10.406627770001933 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.56630381312796,
            "unit": "iter/sec",
            "range": "stddev: 0.001340257109531785",
            "extra": "mean: 13.410883319443043 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 188.96553130420355,
            "unit": "iter/sec",
            "range": "stddev: 0.0003665840550880151",
            "extra": "mean: 5.291970409090977 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10092831.033983782,
            "unit": "iter/sec",
            "range": "stddev: 2.3607957576084954e-7",
            "extra": "mean: 99.08022799882478 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.4995355824726,
            "unit": "iter/sec",
            "range": "stddev: 0.0015511066650905725",
            "extra": "mean: 13.422902467532545 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 51411.08532474969,
            "unit": "iter/sec",
            "range": "stddev: 0.000007802892856784085",
            "extra": "mean: 19.451057951476322 usec\nrounds: 12407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.511088357696465,
            "unit": "iter/sec",
            "range": "stddev: 0.0020966017731017038",
            "extra": "mean: 21.97266723529999 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2750.3927190244135,
            "unit": "iter/sec",
            "range": "stddev: 0.00011766040428537121",
            "extra": "mean: 363.58444126288555 usec\nrounds: 1711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.770813289087947,
            "unit": "iter/sec",
            "range": "stddev: 0.03246759041655799",
            "extra": "mean: 37.35411357142482 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 60.68540186511159,
            "unit": "iter/sec",
            "range": "stddev: 0.0008049218440587825",
            "extra": "mean: 16.4784275833379 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.07170997538736,
            "unit": "iter/sec",
            "range": "stddev: 0.0009962842846922794",
            "extra": "mean: 18.49395923404651 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1464811.590670822,
            "unit": "iter/sec",
            "range": "stddev: 0.000006990681783732083",
            "extra": "mean: 682.6816543293749 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 373705.8295199291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013389070480878432",
            "extra": "mean: 2.6759015273714692 usec\nrounds: 1899"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 214.12950448620717,
            "unit": "iter/sec",
            "range": "stddev: 0.0002633564132452315",
            "extra": "mean: 4.670071050691726 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 73.44527819266582,
            "unit": "iter/sec",
            "range": "stddev: 0.0003703372691320763",
            "extra": "mean: 13.61557917143078 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.69118864250973,
            "unit": "iter/sec",
            "range": "stddev: 0.0014651497696939316",
            "extra": "mean: 10.342204021270618 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 191.3802953670807,
            "unit": "iter/sec",
            "range": "stddev: 0.000381413981296065",
            "extra": "mean: 5.225198331322097 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 58.04241501398178,
            "unit": "iter/sec",
            "range": "stddev: 0.001093869490339562",
            "extra": "mean: 17.228780018183443 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.46543868862793,
            "unit": "iter/sec",
            "range": "stddev: 0.0016424199817699882",
            "extra": "mean: 87.21864266666539 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 88.72358753738327,
            "unit": "iter/sec",
            "range": "stddev: 0.00020354842879276237",
            "extra": "mean: 11.270959930228864 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.017400744610957,
            "unit": "iter/sec",
            "range": "stddev: 0.005434932376818338",
            "extra": "mean: 248.91716399998813 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2892.5812893770303,
            "unit": "iter/sec",
            "range": "stddev: 0.00016512231721493032",
            "extra": "mean: 345.711978319326 usec\nrounds: 1845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.21994577565049,
            "unit": "iter/sec",
            "range": "stddev: 0.001785651928030255",
            "extra": "mean: 31.036675448278622 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 133.8683812979819,
            "unit": "iter/sec",
            "range": "stddev: 0.0005142167153815749",
            "extra": "mean: 7.470023842105539 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5669185918793882,
            "unit": "iter/sec",
            "range": "stddev: 0.005006902490046208",
            "extra": "mean: 1.7639216887999851 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8957.372172360961,
            "unit": "iter/sec",
            "range": "stddev: 0.00004595483356614104",
            "extra": "mean: 111.63988508656803 usec\nrounds: 5465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5626437388139816,
            "unit": "iter/sec",
            "range": "stddev: 0.009701903307625005",
            "extra": "mean: 1.7773236081999926 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 153.35012832855045,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810897525583598",
            "extra": "mean: 6.521024865773273 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.258201713199394,
            "unit": "iter/sec",
            "range": "stddev: 0.001365371292984468",
            "extra": "mean: 38.08333910000101 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2896.332033631575,
            "unit": "iter/sec",
            "range": "stddev: 0.00009403046546833711",
            "extra": "mean: 345.26428199122836 usec\nrounds: 1688"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 49.261670091190375,
            "unit": "iter/sec",
            "range": "stddev: 0.001093327184602121",
            "extra": "mean: 20.299758374997385 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 741.0670649142255,
            "unit": "iter/sec",
            "range": "stddev: 0.0002618190212690206",
            "extra": "mean: 1.349405536077554 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 52.91641402408308,
            "unit": "iter/sec",
            "range": "stddev: 0.0011884567566823546",
            "extra": "mean: 18.897728019606248 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1263125.1312208925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011123633671182224",
            "extra": "mean: 791.6872012778616 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2623.812992795522,
            "unit": "iter/sec",
            "range": "stddev: 0.00009789384713721665",
            "extra": "mean: 381.12472296836887 usec\nrounds: 1563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 59.86653300120588,
            "unit": "iter/sec",
            "range": "stddev: 0.020457385137693653",
            "extra": "mean: 16.703823486485465 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3821711.8179080295,
            "unit": "iter/sec",
            "range": "stddev: 5.834399217917543e-7",
            "extra": "mean: 261.6628483902063 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 175.41685605593182,
            "unit": "iter/sec",
            "range": "stddev: 0.00081735205329298",
            "extra": "mean: 5.700706434284452 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 52.33588101174504,
            "unit": "iter/sec",
            "range": "stddev: 0.001065874006189379",
            "extra": "mean: 19.107350075478493 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 55.55981503305235,
            "unit": "iter/sec",
            "range": "stddev: 0.001648408449207342",
            "extra": "mean: 17.99862003509377 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3046.701040545965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005299303606833292",
            "extra": "mean: 328.22386794498266 usec\nrounds: 1878"
          }
        ]
      }
    ]
  }
}