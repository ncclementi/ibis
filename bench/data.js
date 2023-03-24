window.BENCHMARK_DATA = {
  "lastUpdate": 1679689547161,
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
          "id": "51afc134ecb99fcd81d496e9c2660147320a6c2f",
          "message": "fix(pyspark): raise proper error when trying to generate sql",
          "timestamp": "2023-03-24T15:14:35-05:00",
          "tree_id": "06912ea5abff375829310a44e3614822731c06f2",
          "url": "https://github.com/ibis-project/ibis/commit/51afc134ecb99fcd81d496e9c2660147320a6c2f"
        },
        "date": 1679689169862,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 2350789.165171142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022901094155223473",
            "extra": "mean: 425.3890628797406 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.080085139004215,
            "unit": "iter/sec",
            "range": "stddev: 0.0007006577005413522",
            "extra": "mean: 52.410667599997396 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 901.0805159711116,
            "unit": "iter/sec",
            "range": "stddev: 0.00011987080969879207",
            "extra": "mean: 1.1097787403851265 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 61.020189398462875,
            "unit": "iter/sec",
            "range": "stddev: 0.020738990527295355",
            "extra": "mean: 16.38801861905054 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.40303888520891,
            "unit": "iter/sec",
            "range": "stddev: 0.0029298544141131803",
            "extra": "mean: 30.86130296428686 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3479.313358273855,
            "unit": "iter/sec",
            "range": "stddev: 0.00012071937778057358",
            "extra": "mean: 287.413031546005 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 611990.2890406643,
            "unit": "iter/sec",
            "range": "stddev: 0.000003948233374844201",
            "extra": "mean: 1.6340128559352909 usec\nrounds: 17035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10266.565358997275,
            "unit": "iter/sec",
            "range": "stddev: 0.00003440301950232288",
            "extra": "mean: 97.40355854488702 usec\nrounds: 1375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 165.73207958493956,
            "unit": "iter/sec",
            "range": "stddev: 0.0049000939364298255",
            "extra": "mean: 6.033834864706979 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.46181835033801,
            "unit": "iter/sec",
            "range": "stddev: 0.00047012064609971814",
            "extra": "mean: 29.884807500005415 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.51280273384451,
            "unit": "iter/sec",
            "range": "stddev: 0.0016794733117386123",
            "extra": "mean: 21.499456949997153 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.46746925088723,
            "unit": "iter/sec",
            "range": "stddev: 0.0006421450201757646",
            "extra": "mean: 19.059428904760637 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 84.98211730899304,
            "unit": "iter/sec",
            "range": "stddev: 0.0019234615593310212",
            "extra": "mean: 11.767181516130304 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.20584524312116,
            "unit": "iter/sec",
            "range": "stddev: 0.002048077287769218",
            "extra": "mean: 12.952387178082184 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.1967915793614585,
            "unit": "iter/sec",
            "range": "stddev: 0.0028050075169498163",
            "extra": "mean: 238.27726039999106 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3762.558841320107,
            "unit": "iter/sec",
            "range": "stddev: 0.00009963413552394207",
            "extra": "mean: 265.7765744466461 usec\nrounds: 1988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3789.344178591106,
            "unit": "iter/sec",
            "range": "stddev: 0.00007111420551989518",
            "extra": "mean: 263.897907624692 usec\nrounds: 1364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 495.27666911035317,
            "unit": "iter/sec",
            "range": "stddev: 0.0003914187720564689",
            "extra": "mean: 2.019073504504588 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.773426937818072,
            "unit": "iter/sec",
            "range": "stddev: 0.0016155038818620616",
            "extra": "mean: 128.64339087500198 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 107.15336171573,
            "unit": "iter/sec",
            "range": "stddev: 0.00035760888286224943",
            "extra": "mean: 9.332418358025263 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 390.17305567527546,
            "unit": "iter/sec",
            "range": "stddev: 0.00019203548942572858",
            "extra": "mean: 2.562965293103832 msec\nrounds: 348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55973.136173900144,
            "unit": "iter/sec",
            "range": "stddev: 0.00006311277607785949",
            "extra": "mean: 17.86571323952887 usec\nrounds: 9970"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.30199384634987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005413080910222093",
            "extra": "mean: 14.224347636363953 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5852.368876335692,
            "unit": "iter/sec",
            "range": "stddev: 0.000058541653058150215",
            "extra": "mean: 170.87097910788628 usec\nrounds: 1053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.25785369219639,
            "unit": "iter/sec",
            "range": "stddev: 0.0011456668400502384",
            "extra": "mean: 12.943667888886838 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 80.12935210083313,
            "unit": "iter/sec",
            "range": "stddev: 0.0009798909770139647",
            "extra": "mean: 12.479821361111476 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3755.1598356970853,
            "unit": "iter/sec",
            "range": "stddev: 0.00010301152471339885",
            "extra": "mean: 266.30024919148775 usec\nrounds: 2163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1517649.379425687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022287652952714285",
            "extra": "mean: 658.9137211510756 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.91971756309897,
            "unit": "iter/sec",
            "range": "stddev: 0.0013206960452381749",
            "extra": "mean: 13.347621060607693 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 119.30237882326107,
            "unit": "iter/sec",
            "range": "stddev: 0.00046665856660096895",
            "extra": "mean: 8.382062536082678 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 63.35804696408231,
            "unit": "iter/sec",
            "range": "stddev: 0.020703096886644477",
            "extra": "mean: 15.783314794518526 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.29676765200496,
            "unit": "iter/sec",
            "range": "stddev: 0.0011689215954640687",
            "extra": "mean: 11.198613637361007 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5357960.209578482,
            "unit": "iter/sec",
            "range": "stddev: 1.4321826913845678e-7",
            "extra": "mean: 186.63819081972522 nsec\nrounds: 55246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5762065294426735,
            "unit": "iter/sec",
            "range": "stddev: 0.018230460464486193",
            "extra": "mean: 1.7354888376000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1142682.9975353014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028602068307905153",
            "extra": "mean: 875.1333503315792 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 89.0364381623221,
            "unit": "iter/sec",
            "range": "stddev: 0.0016943708467461272",
            "extra": "mean: 11.231356741572508 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.9495177425575,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414188770324332",
            "extra": "mean: 8.133419458333199 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.7449582994448,
            "unit": "iter/sec",
            "range": "stddev: 0.000199676619418629",
            "extra": "mean: 3.748899347058742 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1551473.8174124479,
            "unit": "iter/sec",
            "range": "stddev: 0.000002081745461179961",
            "extra": "mean: 644.548421492412 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3476.089818616216,
            "unit": "iter/sec",
            "range": "stddev: 0.00009471713750086156",
            "extra": "mean: 287.6795630091303 usec\nrounds: 1595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.94004840259348,
            "unit": "iter/sec",
            "range": "stddev: 0.0010744330318304164",
            "extra": "mean: 11.636018580248114 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 55.88240962581748,
            "unit": "iter/sec",
            "range": "stddev: 0.00046553184706226976",
            "extra": "mean: 17.894718690476857 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.49000478849084,
            "unit": "iter/sec",
            "range": "stddev: 0.00144384052212967",
            "extra": "mean: 11.300711333333116 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 77.70155427972934,
            "unit": "iter/sec",
            "range": "stddev: 0.0014035656733889087",
            "extra": "mean: 12.869755428571633 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.291680163870184,
            "unit": "iter/sec",
            "range": "stddev: 0.0034371465406019598",
            "extra": "mean: 88.56077975000431 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3645.299974527009,
            "unit": "iter/sec",
            "range": "stddev: 0.00013772550249747725",
            "extra": "mean: 274.3258461547472 usec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 208.11794027184672,
            "unit": "iter/sec",
            "range": "stddev: 0.0008040093016900952",
            "extra": "mean: 4.804967792270984 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.39622717200876,
            "unit": "iter/sec",
            "range": "stddev: 0.0015127961113530247",
            "extra": "mean: 11.442141524391568 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4074972.9766833065,
            "unit": "iter/sec",
            "range": "stddev: 9.201339984104772e-7",
            "extra": "mean: 245.40040037642652 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3604.843546158405,
            "unit": "iter/sec",
            "range": "stddev: 0.00011923997540129663",
            "extra": "mean: 277.40454951662906 usec\nrounds: 1656"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.03628462811443,
            "unit": "iter/sec",
            "range": "stddev: 0.0007868211227630363",
            "extra": "mean: 4.830071220589346 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 70.65416254651548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005964392659781602",
            "extra": "mean: 14.153447779409255 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 228.562351768778,
            "unit": "iter/sec",
            "range": "stddev: 0.00048179253195515596",
            "extra": "mean: 4.375173742575226 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.59455400944906,
            "unit": "iter/sec",
            "range": "stddev: 0.001133052288040425",
            "extra": "mean: 12.10733579220728 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.33230962912407,
            "unit": "iter/sec",
            "range": "stddev: 0.0011800847801236003",
            "extra": "mean: 28.302706800002397 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5730401616147366,
            "unit": "iter/sec",
            "range": "stddev: 0.02904333803562871",
            "extra": "mean: 1.7450783854000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8423.036313765313,
            "unit": "iter/sec",
            "range": "stddev: 0.000039347141454256045",
            "extra": "mean: 118.72203356950439 usec\nrounds: 4230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 191.16086369953305,
            "unit": "iter/sec",
            "range": "stddev: 0.0008229526541057156",
            "extra": "mean: 5.231196284882881 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 85.05911519490334,
            "unit": "iter/sec",
            "range": "stddev: 0.0011800848622007226",
            "extra": "mean: 11.756529534884217 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.05960138991155,
            "unit": "iter/sec",
            "range": "stddev: 0.001276503754632036",
            "extra": "mean: 11.355945112358457 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 197.69524009842016,
            "unit": "iter/sec",
            "range": "stddev: 0.0007588154480910711",
            "extra": "mean: 5.058290728204494 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9287702.125504103,
            "unit": "iter/sec",
            "range": "stddev: 2.2802349107018577e-7",
            "extra": "mean: 107.66925838998765 nsec\nrounds: 98030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 120.49341689481982,
            "unit": "iter/sec",
            "range": "stddev: 0.0007102917805479671",
            "extra": "mean: 8.29920858558532 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 407635.26881936885,
            "unit": "iter/sec",
            "range": "stddev: 7.318047590310141e-7",
            "extra": "mean: 2.453173403999838 usec\nrounds: 1707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5309453845770904,
            "unit": "iter/sec",
            "range": "stddev: 0.024318137720934493",
            "extra": "mean: 1.8834328897999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 217.20861877011376,
            "unit": "iter/sec",
            "range": "stddev: 0.0005744960062434336",
            "extra": "mean: 4.603868878050213 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.44714262238944,
            "unit": "iter/sec",
            "range": "stddev: 0.00217576747881868",
            "extra": "mean: 24.72362533333694 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 202.9044370348188,
            "unit": "iter/sec",
            "range": "stddev: 0.0006711172153071284",
            "extra": "mean: 4.928428449439959 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1464226.3602881092,
            "unit": "iter/sec",
            "range": "stddev: 0.000003912087996364017",
            "extra": "mean: 682.9545124452169 nsec\nrounds: 181786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2542.7422619829345,
            "unit": "iter/sec",
            "range": "stddev: 0.00469995356722028",
            "extra": "mean: 393.2761943478137 usec\nrounds: 2017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5034785591432258,
            "unit": "iter/sec",
            "range": "stddev: 0.018256657172739107",
            "extra": "mean: 1.986181897599988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.88479636662069,
            "unit": "iter/sec",
            "range": "stddev: 0.0010639929243132038",
            "extra": "mean: 14.51699145160814 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 564.2596323467255,
            "unit": "iter/sec",
            "range": "stddev: 0.0005380527154159991",
            "extra": "mean: 1.772233813432752 msec\nrounds: 536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 129.5473655648624,
            "unit": "iter/sec",
            "range": "stddev: 0.004726081836106738",
            "extra": "mean: 7.719184374299879 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 74.15334132796907,
            "unit": "iter/sec",
            "range": "stddev: 0.001663768403629696",
            "extra": "mean: 13.48556898572042 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6010219648529236,
            "unit": "iter/sec",
            "range": "stddev: 0.0046126029819245976",
            "extra": "mean: 624.6010498000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 218.60994440270062,
            "unit": "iter/sec",
            "range": "stddev: 0.0004972319245172158",
            "extra": "mean: 4.57435732272958 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 182.8103867526023,
            "unit": "iter/sec",
            "range": "stddev: 0.012866717187753354",
            "extra": "mean: 5.470148703056474 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1198856588858122,
            "unit": "iter/sec",
            "range": "stddev: 0.006886796608317032",
            "extra": "mean: 892.9483042000129 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119353.97262254769,
            "unit": "iter/sec",
            "range": "stddev: 0.000009578367787763163",
            "extra": "mean: 8.378439175732016 usec\nrounds: 40321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10652291221159742,
            "unit": "iter/sec",
            "range": "stddev: 0.04941641498655669",
            "extra": "mean: 9.387651719599978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3612.122675855094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009192821868753579",
            "extra": "mean: 276.84552539824 usec\nrounds: 1949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 216.84838243195188,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681335363989981",
            "extra": "mean: 4.611516990742622 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.28021216877045,
            "unit": "iter/sec",
            "range": "stddev: 0.001240655612913421",
            "extra": "mean: 6.979330815214701 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1317.2383999786196,
            "unit": "iter/sec",
            "range": "stddev: 0.00017167778536958687",
            "extra": "mean: 759.1640207393219 usec\nrounds: 1109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.51362331023131,
            "unit": "iter/sec",
            "range": "stddev: 0.0013419693412072633",
            "extra": "mean: 35.070954999997426 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.23682145094627,
            "unit": "iter/sec",
            "range": "stddev: 0.0011370646792420735",
            "extra": "mean: 11.081950626370533 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9452.897345606505,
            "unit": "iter/sec",
            "range": "stddev: 0.000040705509045678525",
            "extra": "mean: 105.78767159306744 usec\nrounds: 4939"
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "0bdd093f9ca3728d4c40a8f7ce8abe5301c2f0d2",
          "message": "docs(blog): add campaign finance to `SUMMARY.md`",
          "timestamp": "2023-03-24T15:14:59-05:00",
          "tree_id": "1ab78d0fa31cabd65116844ad33092290e467e3a",
          "url": "https://github.com/ibis-project/ibis/commit/0bdd093f9ca3728d4c40a8f7ce8abe5301c2f0d2"
        },
        "date": 1679689463412,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9204730861485314,
            "unit": "iter/sec",
            "range": "stddev: 0.0035404987061974243",
            "extra": "mean: 1.0863978698000039 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1160.7040822794324,
            "unit": "iter/sec",
            "range": "stddev: 0.00003253812345291929",
            "extra": "mean: 861.546035089464 usec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7396482.262254689,
            "unit": "iter/sec",
            "range": "stddev: 4.858066066541387e-9",
            "extra": "mean: 135.1994048716262 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.06067438653115,
            "unit": "iter/sec",
            "range": "stddev: 0.0005689157131213292",
            "extra": "mean: 8.260320744679886 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.2663802735568,
            "unit": "iter/sec",
            "range": "stddev: 0.00022896029699824273",
            "extra": "mean: 20.718354977778592 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.51752928538733,
            "unit": "iter/sec",
            "range": "stddev: 0.00002836740737039985",
            "extra": "mean: 5.221454159999439 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6335350.607534829,
            "unit": "iter/sec",
            "range": "stddev: 1.0688171156582808e-8",
            "extra": "mean: 157.84446070095473 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.05988207068258,
            "unit": "iter/sec",
            "range": "stddev: 0.007879436915460118",
            "extra": "mean: 10.63152513043272 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.592928553735693,
            "unit": "iter/sec",
            "range": "stddev: 0.0016067592759915481",
            "extra": "mean: 385.6643093999935 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5083.323492556313,
            "unit": "iter/sec",
            "range": "stddev: 0.000043362696823653164",
            "extra": "mean: 196.72169230707718 usec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.60971957753748,
            "unit": "iter/sec",
            "range": "stddev: 0.00012281913609151485",
            "extra": "mean: 6.265282607142266 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.2735284461043,
            "unit": "iter/sec",
            "range": "stddev: 0.00002095083161248278",
            "extra": "mean: 1.3310731206892765 msec\nrounds: 638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8528881582836664,
            "unit": "iter/sec",
            "range": "stddev: 0.0028184736831649913",
            "extra": "mean: 1.1724866739999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.91932283719123,
            "unit": "iter/sec",
            "range": "stddev: 0.00014081901313175416",
            "extra": "mean: 6.175915156250333 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69583.14392315787,
            "unit": "iter/sec",
            "range": "stddev: 4.799337177000544e-7",
            "extra": "mean: 14.371296604596093 usec\nrounds: 13459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 285.50942605341885,
            "unit": "iter/sec",
            "range": "stddev: 0.00005290265064465246",
            "extra": "mean: 3.5025113314924314 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.386007759140536,
            "unit": "iter/sec",
            "range": "stddev: 0.00039528578516416464",
            "extra": "mean: 64.99411775000041 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 293.5748837030624,
            "unit": "iter/sec",
            "range": "stddev: 0.00017772577342347758",
            "extra": "mean: 3.406285944445623 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.3786243697282,
            "unit": "iter/sec",
            "range": "stddev: 0.0005899336353428167",
            "extra": "mean: 8.667116681817271 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12199411.07064281,
            "unit": "iter/sec",
            "range": "stddev: 3.8882928803968465e-9",
            "extra": "mean: 81.97117010057866 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.05568288985359,
            "unit": "iter/sec",
            "range": "stddev: 0.004242649059571419",
            "extra": "mean: 5.986028027908153 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 102.02786860055068,
            "unit": "iter/sec",
            "range": "stddev: 0.010020337230187465",
            "extra": "mean: 9.80124365740796 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 293.4640192894565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002239502330478105",
            "extra": "mean: 3.4075727662329056 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5838.845213909135,
            "unit": "iter/sec",
            "range": "stddev: 0.00004845115157107574",
            "extra": "mean: 171.26674254317064 usec\nrounds: 1911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 305.19765991829047,
            "unit": "iter/sec",
            "range": "stddev: 0.00023276259617167308",
            "extra": "mean: 3.276565096428742 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 758148.3220676971,
            "unit": "iter/sec",
            "range": "stddev: 1.593031548911115e-7",
            "extra": "mean: 1.3190031170585474 usec\nrounds: 23420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.99197652570611,
            "unit": "iter/sec",
            "range": "stddev: 0.00006612540105637067",
            "extra": "mean: 9.009660259256638 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5894086.037473955,
            "unit": "iter/sec",
            "range": "stddev: 1.0523223417872802e-8",
            "extra": "mean: 169.66158852104576 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 347.61369313410904,
            "unit": "iter/sec",
            "range": "stddev: 0.00003801170334301843",
            "extra": "mean: 2.8767566403496105 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5555.458541446978,
            "unit": "iter/sec",
            "range": "stddev: 0.00013889056707045726",
            "extra": "mean: 180.0031433120081 usec\nrounds: 314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.507047664440952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007459902460610324",
            "extra": "mean: 181.58549933333745 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 108.33618156221462,
            "unit": "iter/sec",
            "range": "stddev: 0.009431371071438106",
            "extra": "mean: 9.230526547824896 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.18024105210225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006727294771946906",
            "extra": "mean: 10.967288400000825 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.08409884854808,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958692706435291",
            "extra": "mean: 9.991597181818529 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.98860833866786,
            "unit": "iter/sec",
            "range": "stddev: 0.0006708250929894485",
            "extra": "mean: 10.001139295917948 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.40524550556607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173970749154025",
            "extra": "mean: 9.578062818181753 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.52889070823511,
            "unit": "iter/sec",
            "range": "stddev: 0.018275582633008294",
            "extra": "mean: 12.116968875000467 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.242033614015433,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935969905574875",
            "extra": "mean: 38.10680279999019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6611424209113366,
            "unit": "iter/sec",
            "range": "stddev: 0.05378216873536094",
            "extra": "mean: 1.5125334094000096 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 238.93953911330192,
            "unit": "iter/sec",
            "range": "stddev: 0.004018651904916652",
            "extra": "mean: 4.185159156625867 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.69917836208238,
            "unit": "iter/sec",
            "range": "stddev: 0.00017135380948336937",
            "extra": "mean: 14.14443594914992 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5642.539753976881,
            "unit": "iter/sec",
            "range": "stddev: 0.000028112547956522914",
            "extra": "mean: 177.22515810282005 usec\nrounds: 1518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.767559420299573,
            "unit": "iter/sec",
            "range": "stddev: 0.0009804964625242931",
            "extra": "mean: 565.7518431999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 104.47902741570105,
            "unit": "iter/sec",
            "range": "stddev: 0.01437689464071847",
            "extra": "mean: 9.571298898306173 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5308.59706488675,
            "unit": "iter/sec",
            "range": "stddev: 0.000047161524502531927",
            "extra": "mean: 188.3736866401883 usec\nrounds: 3271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.34343250841461,
            "unit": "iter/sec",
            "range": "stddev: 0.0002614079228560665",
            "extra": "mean: 9.49276073684159 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.3270978755139,
            "unit": "iter/sec",
            "range": "stddev: 0.00003530465003002139",
            "extra": "mean: 1.8576066557794684 msec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 501668.3244976419,
            "unit": "iter/sec",
            "range": "stddev: 2.419411136595115e-7",
            "extra": "mean: 1.9933488944142026 usec\nrounds: 2035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.01123878986249,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565437527681842",
            "extra": "mean: 9.998876247309957 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11713.525131970615,
            "unit": "iter/sec",
            "range": "stddev: 0.000011569421707157557",
            "extra": "mean: 85.37139663196896 usec\nrounds: 4513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.286447902353874,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768530419292319",
            "extra": "mean: 97.21528845454682 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.69500948013722,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637475148981601",
            "extra": "mean: 8.354567198275253 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.09847506764294,
            "unit": "iter/sec",
            "range": "stddev: 0.001177592416294566",
            "extra": "mean: 24.33180302563843 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1841048.9970927674,
            "unit": "iter/sec",
            "range": "stddev: 1.2127584647521394e-7",
            "extra": "mean: 543.1685965876613 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.41022424603221,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951826052940174",
            "extra": "mean: 8.30494259321963 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5639.87272998988,
            "unit": "iter/sec",
            "range": "stddev: 0.00005592607481835965",
            "extra": "mean: 177.3089656230229 usec\nrounds: 3258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 105.57762915154608,
            "unit": "iter/sec",
            "range": "stddev: 0.013344192609227172",
            "extra": "mean: 9.471703504201638 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5805.6283983167505,
            "unit": "iter/sec",
            "range": "stddev: 0.000055914622320149786",
            "extra": "mean: 172.24664263560757 usec\nrounds: 2899"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 275.1742225140583,
            "unit": "iter/sec",
            "range": "stddev: 0.0002943511930691291",
            "extra": "mean: 3.63406132618004 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1872805.1908662107,
            "unit": "iter/sec",
            "range": "stddev: 1.1567032536972495e-7",
            "extra": "mean: 533.9583662396192 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.72736219148067,
            "unit": "iter/sec",
            "range": "stddev: 0.00034531934284794537",
            "extra": "mean: 17.62817732692285 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.05533192159302,
            "unit": "iter/sec",
            "range": "stddev: 0.00005667769558269099",
            "extra": "mean: 6.576553333332945 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.20769910639834,
            "unit": "iter/sec",
            "range": "stddev: 0.024983483030549376",
            "extra": "mean: 26.87615799999945 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.23352696874127,
            "unit": "iter/sec",
            "range": "stddev: 0.00007606150964442782",
            "extra": "mean: 8.457837853931071 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139321.48460547582,
            "unit": "iter/sec",
            "range": "stddev: 6.710882892022655e-7",
            "extra": "mean: 7.1776438704465 usec\nrounds: 39685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1876677.5806302044,
            "unit": "iter/sec",
            "range": "stddev: 9.839660569378114e-8",
            "extra": "mean: 532.8565813975309 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.5295841366498,
            "unit": "iter/sec",
            "range": "stddev: 0.00011058937555560098",
            "extra": "mean: 1.4694438321423524 msec\nrounds: 560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.10084267683598,
            "unit": "iter/sec",
            "range": "stddev: 0.00003720790237494737",
            "extra": "mean: 7.293901193278049 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.23347066108842,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131151125076003",
            "extra": "mean: 16.330937789477 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11925.522222133346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022323532898772456",
            "extra": "mean: 83.85377020588963 usec\nrounds: 5048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.40577391184719,
            "unit": "iter/sec",
            "range": "stddev: 0.00009708772086642355",
            "extra": "mean: 13.43981720000329 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.77193736044748,
            "unit": "iter/sec",
            "range": "stddev: 0.00006481382997815205",
            "extra": "mean: 10.551646698924023 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8124.290135521482,
            "unit": "iter/sec",
            "range": "stddev: 0.000011462008959558662",
            "extra": "mean: 123.08767699318658 usec\nrounds: 4164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5598.703340308,
            "unit": "iter/sec",
            "range": "stddev: 0.00004329102278812753",
            "extra": "mean: 178.61278571423418 usec\nrounds: 2352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.00392086263694,
            "unit": "iter/sec",
            "range": "stddev: 0.000836826830865344",
            "extra": "mean: 23.25369361538448 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1750.5468463017114,
            "unit": "iter/sec",
            "range": "stddev: 0.000007475747284221388",
            "extra": "mean: 571.250065151154 usec\nrounds: 1320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13293.692709573714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028278918386445327",
            "extra": "mean: 75.22364341097116 usec\nrounds: 7740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 306.3445190593249,
            "unit": "iter/sec",
            "range": "stddev: 0.00021949524021126678",
            "extra": "mean: 3.2642986499991724 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.97529277599558,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310315809165961",
            "extra": "mean: 9.526051069310924 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.2929493997408,
            "unit": "iter/sec",
            "range": "stddev: 0.000019792853999673132",
            "extra": "mean: 3.0741520892023266 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 257.74079070652004,
            "unit": "iter/sec",
            "range": "stddev: 0.009396003958239491",
            "extra": "mean: 3.879867044943861 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9101022251082541,
            "unit": "iter/sec",
            "range": "stddev: 0.006643056487076532",
            "extra": "mean: 1.0987776674000032 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.06577428809683,
            "unit": "iter/sec",
            "range": "stddev: 0.00009448649223947705",
            "extra": "mean: 10.19723759139665 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17974815987607995,
            "unit": "iter/sec",
            "range": "stddev: 0.012163294105155929",
            "extra": "mean: 5.563339289200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5422.1874448284725,
            "unit": "iter/sec",
            "range": "stddev: 0.00005534607924720777",
            "extra": "mean: 184.42741240046422 usec\nrounds: 2403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 303.29469287117115,
            "unit": "iter/sec",
            "range": "stddev: 0.000216014829360764",
            "extra": "mean: 3.2971233045108526 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 296.605434173104,
            "unit": "iter/sec",
            "range": "stddev: 0.00023577576214050573",
            "extra": "mean: 3.371482396429672 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1720045.2578269646,
            "unit": "iter/sec",
            "range": "stddev: 1.606772275387451e-7",
            "extra": "mean: 581.3800511640952 nsec\nrounds: 121952"
          }
        ]
      }
    ]
  }
}