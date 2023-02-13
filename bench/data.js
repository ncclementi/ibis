window.BENCHMARK_DATA = {
  "lastUpdate": 1676312688062,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "47f090953e6f369952612b759bef320cd70f3892",
          "message": "refactor(tests): reorganize `rules` test file to the `ibis.expr` subpackage",
          "timestamp": "2023-02-13T13:14:32-05:00",
          "tree_id": "90257bbef9e658b6046b95902cc07a5acd54a977",
          "url": "https://github.com/ibis-project/ibis/commit/47f090953e6f369952612b759bef320cd70f3892"
        },
        "date": 1676312595847,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8182.773254207638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000176256973438409",
            "extra": "mean: 122.20795675668919 usec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.11909849622149,
            "unit": "iter/sec",
            "range": "stddev: 0.001223134736481735",
            "extra": "mean: 23.19157948275819 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 526.1598442715613,
            "unit": "iter/sec",
            "range": "stddev: 0.00005234323069774753",
            "extra": "mean: 1.9005631290324785 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.992561186290196,
            "unit": "iter/sec",
            "range": "stddev: 0.018273344853343827",
            "extra": "mean: 35.723776518518996 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.13845987868127,
            "unit": "iter/sec",
            "range": "stddev: 0.0008207217214331797",
            "extra": "mean: 13.133966744184162 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 215.92170404664066,
            "unit": "iter/sec",
            "range": "stddev: 0.0002403803019215233",
            "extra": "mean: 4.631308392156782 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118090.32997263732,
            "unit": "iter/sec",
            "range": "stddev: 6.453884977008707e-7",
            "extra": "mean: 8.468093875524861 usec\nrounds: 32362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 212.9911429886401,
            "unit": "iter/sec",
            "range": "stddev: 0.00025469453068363644",
            "extra": "mean: 4.695030910526336 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.05473261349339,
            "unit": "iter/sec",
            "range": "stddev: 0.0007847119830395276",
            "extra": "mean: 13.878338919999464 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 234.89234350500288,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807933420840974",
            "extra": "mean: 4.25726945833252 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.279936566244515,
            "unit": "iter/sec",
            "range": "stddev: 0.00015659586312946386",
            "extra": "mean: 19.500804153846385 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.224555686347899,
            "unit": "iter/sec",
            "range": "stddev: 0.0003488634178080155",
            "extra": "mean: 236.7112837999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9107.30851233893,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030051774469552674",
            "extra": "mean: 109.80192431662569 usec\nrounds: 4902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3286719792931938,
            "unit": "iter/sec",
            "range": "stddev: 0.003133595361858197",
            "extra": "mean: 752.6312103999999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 115.12407456978772,
            "unit": "iter/sec",
            "range": "stddev: 0.0136904048061857",
            "extra": "mean: 8.68628046511509 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4639.633242146765,
            "unit": "iter/sec",
            "range": "stddev: 0.00006006600775783942",
            "extra": "mean: 215.53427777780524 usec\nrounds: 1692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 120.45187152220899,
            "unit": "iter/sec",
            "range": "stddev: 0.0009310909129874571",
            "extra": "mean: 8.302071087501695 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6870227353534571,
            "unit": "iter/sec",
            "range": "stddev: 0.02052589712584382",
            "extra": "mean: 1.4555559060000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3732.9760509446623,
            "unit": "iter/sec",
            "range": "stddev: 0.00012508854202301166",
            "extra": "mean: 267.8827794105299 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 329398.6874835375,
            "unit": "iter/sec",
            "range": "stddev: 4.24476221108584e-7",
            "extra": "mean: 3.0358348044418895 usec\nrounds: 1586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 62.910076833749606,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914365706555829",
            "extra": "mean: 15.89570463636004 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 133.67475453030664,
            "unit": "iter/sec",
            "range": "stddev: 0.0008812028984536267",
            "extra": "mean: 7.480844109373552 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.49259670039843834,
            "unit": "iter/sec",
            "range": "stddev: 0.07838684742730256",
            "extra": "mean: 2.030058259000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 210.16069479867767,
            "unit": "iter/sec",
            "range": "stddev: 0.0003112195321475435",
            "extra": "mean: 4.758263675127001 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 98.97124502225887,
            "unit": "iter/sec",
            "range": "stddev: 0.00043936797934381006",
            "extra": "mean: 10.103944835442837 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 228.38618235797776,
            "unit": "iter/sec",
            "range": "stddev: 0.000056378326163715205",
            "extra": "mean: 4.37854860427842 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 73.071952430969,
            "unit": "iter/sec",
            "range": "stddev: 0.000965380928647416",
            "extra": "mean: 13.685141380951864 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.649302274942444,
            "unit": "iter/sec",
            "range": "stddev: 0.0002411051653979163",
            "extra": "mean: 85.84205099999782 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1212478.1445692424,
            "unit": "iter/sec",
            "range": "stddev: 2.1411006301906933e-7",
            "extra": "mean: 824.7571343690242 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.90259271296473,
            "unit": "iter/sec",
            "range": "stddev: 0.0010614271898809783",
            "extra": "mean: 14.94710383333492 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 344.6789359613115,
            "unit": "iter/sec",
            "range": "stddev: 0.000035729221189501403",
            "extra": "mean: 2.9012506877189765 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 62.61091267736964,
            "unit": "iter/sec",
            "range": "stddev: 0.02010762832749773",
            "extra": "mean: 15.97165665277779 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 45880.54951944386,
            "unit": "iter/sec",
            "range": "stddev: 7.801776774413747e-7",
            "extra": "mean: 21.795728483509265 usec\nrounds: 11038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1287262.0859713056,
            "unit": "iter/sec",
            "range": "stddev: 1.733134843112761e-7",
            "extra": "mean: 776.8425799983447 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16475.61272428888,
            "unit": "iter/sec",
            "range": "stddev: 0.000027138755821141334",
            "extra": "mean: 60.69576996828578 usec\nrounds: 4695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 84.88931702156889,
            "unit": "iter/sec",
            "range": "stddev: 0.00029600282390589714",
            "extra": "mean: 11.78004529999832 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.348026355667265,
            "unit": "iter/sec",
            "range": "stddev: 0.0003132782182027079",
            "extra": "mean: 23.613851365854128 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.7938045361183,
            "unit": "iter/sec",
            "range": "stddev: 0.00004159672768142821",
            "extra": "mean: 6.812276602272763 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 826.552325605587,
            "unit": "iter/sec",
            "range": "stddev: 0.000014800636054975283",
            "extra": "mean: 1.2098447600003226 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1255.3878816924423,
            "unit": "iter/sec",
            "range": "stddev: 0.000011221439340406242",
            "extra": "mean: 796.5665549135755 usec\nrounds: 1038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 119.16579473357346,
            "unit": "iter/sec",
            "range": "stddev: 0.00018426755319435627",
            "extra": "mean: 8.391669792793842 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.896127400603866,
            "unit": "iter/sec",
            "range": "stddev: 0.00043741843769556704",
            "extra": "mean: 126.64435985715272 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3575601.868253045,
            "unit": "iter/sec",
            "range": "stddev: 1.8200105090514088e-8",
            "extra": "mean: 279.67319540789657 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.30291330146598,
            "unit": "iter/sec",
            "range": "stddev: 0.0002552383201164365",
            "extra": "mean: 13.105659492306533 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 186.7919415939486,
            "unit": "iter/sec",
            "range": "stddev: 0.000552394585589262",
            "extra": "mean: 5.353550005780317 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 129.79154856735798,
            "unit": "iter/sec",
            "range": "stddev: 0.000973211060921531",
            "extra": "mean: 7.704661906249077 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 65.42498284735738,
            "unit": "iter/sec",
            "range": "stddev: 0.020920794638233875",
            "extra": "mean: 15.284681118420675 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8503293.545387534,
            "unit": "iter/sec",
            "range": "stddev: 5.391661834243369e-9",
            "extra": "mean: 117.60149107663773 nsec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6355854368681567,
            "unit": "iter/sec",
            "range": "stddev: 0.006493007780564146",
            "extra": "mean: 1.5733526005999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 118.6305641738364,
            "unit": "iter/sec",
            "range": "stddev: 0.00024297377211896117",
            "extra": "mean: 8.429530846153952 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 206.70417546204413,
            "unit": "iter/sec",
            "range": "stddev: 0.0002925746545866538",
            "extra": "mean: 4.837831639175688 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 215.73062475081448,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931604879655821",
            "extra": "mean: 4.6354104854379266 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3778633.5720608844,
            "unit": "iter/sec",
            "range": "stddev: 2.0634513061840052e-8",
            "extra": "mean: 264.6459311097955 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7149737184805632,
            "unit": "iter/sec",
            "range": "stddev: 0.005220277516634725",
            "extra": "mean: 1.3986528093999937 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3992.0073518996055,
            "unit": "iter/sec",
            "range": "stddev: 0.00009431058099661537",
            "extra": "mean: 250.50054066762874 usec\nrounds: 1918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.74909932143044,
            "unit": "iter/sec",
            "range": "stddev: 0.0009170902475211715",
            "extra": "mean: 12.69855793420947 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 201.56934361413752,
            "unit": "iter/sec",
            "range": "stddev: 0.00034927426290562897",
            "extra": "mean: 4.961071867725538 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3399.4327594208044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003630741074167745",
            "extra": "mean: 294.16672450093705 usec\nrounds: 1804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 57.14419028139959,
            "unit": "iter/sec",
            "range": "stddev: 0.0001556262928665975",
            "extra": "mean: 17.49959173584615 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11410202147003812,
            "unit": "iter/sec",
            "range": "stddev: 0.11782503349238314",
            "extra": "mean: 8.764086622800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 436.1850645207903,
            "unit": "iter/sec",
            "range": "stddev: 0.00003464166506954312",
            "extra": "mean: 2.292604862797488 msec\nrounds: 379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4640.636832946252,
            "unit": "iter/sec",
            "range": "stddev: 0.000059030373305071644",
            "extra": "mean: 215.48766602473373 usec\nrounds: 2075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9290582508649525,
            "unit": "iter/sec",
            "range": "stddev: 0.002171547312205261",
            "extra": "mean: 518.3876638000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4515.696618148267,
            "unit": "iter/sec",
            "range": "stddev: 0.00006031776955042049",
            "extra": "mean: 221.44977498733428 usec\nrounds: 1951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 118.93517331132915,
            "unit": "iter/sec",
            "range": "stddev: 0.0009506450861439271",
            "extra": "mean: 8.407941672413111 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 494853.8890024769,
            "unit": "iter/sec",
            "range": "stddev: 4.315866540744314e-7",
            "extra": "mean: 2.0207985068396517 usec\nrounds: 20492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.52346454186662,
            "unit": "iter/sec",
            "range": "stddev: 0.0006136700516221544",
            "extra": "mean: 51.220417250000594 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 75.81124580825106,
            "unit": "iter/sec",
            "range": "stddev: 0.00031937765600585936",
            "extra": "mean: 13.190655150679019 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.83880354111999,
            "unit": "iter/sec",
            "range": "stddev: 0.0004798901293449943",
            "extra": "mean: 30.451779363636778 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 120.63982588132016,
            "unit": "iter/sec",
            "range": "stddev: 0.00015954926196169765",
            "extra": "mean: 8.289136632074996 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 231.7362427805966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000421749216255292",
            "extra": "mean: 4.315250769586269 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 131.3781487860243,
            "unit": "iter/sec",
            "range": "stddev: 0.000978449760816805",
            "extra": "mean: 7.611615852714601 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 206.65405109107175,
            "unit": "iter/sec",
            "range": "stddev: 0.00023795474127232563",
            "extra": "mean: 4.839005065326803 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1208465.179970945,
            "unit": "iter/sec",
            "range": "stddev: 1.5326209244930093e-7",
            "extra": "mean: 827.4959151276853 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3733.163942649291,
            "unit": "iter/sec",
            "range": "stddev: 0.00012868203897466646",
            "extra": "mean: 267.8692967580567 usec\nrounds: 401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.31661534627072,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603832506846159",
            "extra": "mean: 32.98521251723475 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.832649111541265,
            "unit": "iter/sec",
            "range": "stddev: 0.0009710110292754355",
            "extra": "mean: 34.68290395833643 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4598.048075796015,
            "unit": "iter/sec",
            "range": "stddev: 0.00007612044068063818",
            "extra": "mean: 217.48358945265701 usec\nrounds: 1934"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4403559.714948622,
            "unit": "iter/sec",
            "range": "stddev: 1.857941949182816e-8",
            "extra": "mean: 227.08900633408788 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9390.118819520383,
            "unit": "iter/sec",
            "range": "stddev: 0.000002496145641450296",
            "extra": "mean: 106.49492506113751 usec\nrounds: 4070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1386128.321518818,
            "unit": "iter/sec",
            "range": "stddev: 1.1529485537432773e-7",
            "extra": "mean: 721.4339282125577 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 129.94161735080368,
            "unit": "iter/sec",
            "range": "stddev: 0.0010047509117880435",
            "extra": "mean: 7.6957638390808825 msec\nrounds: 87"
          }
        ]
      }
    ]
  }
}