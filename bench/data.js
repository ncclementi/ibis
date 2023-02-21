window.BENCHMARK_DATA = {
  "lastUpdate": 1677022888238,
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
          "id": "03e026562656c3f8dcce6ec741fdc47e30892a59",
          "message": "fix(snowflake): ensure that we do not try to use a None schema or database",
          "timestamp": "2023-02-21T18:34:36-05:00",
          "tree_id": "7a3060d5a6a495fe466db41eec0cced26ab68a99",
          "url": "https://github.com/ibis-project/ibis/commit/03e026562656c3f8dcce6ec741fdc47e30892a59"
        },
        "date": 1677022793495,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 76.5914457378202,
            "unit": "iter/sec",
            "range": "stddev: 0.001445784691083628",
            "extra": "mean: 13.056288340908136 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 39.73633076927047,
            "unit": "iter/sec",
            "range": "stddev: 0.014652227956684643",
            "extra": "mean: 25.165886749999977 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3460453.35334761,
            "unit": "iter/sec",
            "range": "stddev: 4.765251472879677e-7",
            "extra": "mean: 288.9794769326611 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 5933.25096391791,
            "unit": "iter/sec",
            "range": "stddev: 0.00006005402501164022",
            "extra": "mean: 168.54166561996712 usec\nrounds: 2548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.56540317638748,
            "unit": "iter/sec",
            "range": "stddev: 0.003668001683000161",
            "extra": "mean: 104.54342399999759 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 44.55926415358124,
            "unit": "iter/sec",
            "range": "stddev: 0.002028328255542541",
            "extra": "mean: 22.4420223043479 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.73901591270056,
            "unit": "iter/sec",
            "range": "stddev: 0.0016772409081054806",
            "extra": "mean: 20.94722693548357 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3395541.333172281,
            "unit": "iter/sec",
            "range": "stddev: 2.168133797689983e-7",
            "extra": "mean: 294.5038513389689 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 62.337890246836956,
            "unit": "iter/sec",
            "range": "stddev: 0.0014632340936352611",
            "extra": "mean: 16.04160801785781 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 167.573648158062,
            "unit": "iter/sec",
            "range": "stddev: 0.001105134185372153",
            "extra": "mean: 5.967525389533567 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 464.729774719437,
            "unit": "iter/sec",
            "range": "stddev: 0.00024058952523580186",
            "extra": "mean: 2.1517881022443897 msec\nrounds: 401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1206796.7557630946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012114125791470963",
            "extra": "mean: 828.6399472193388 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.48010343237731556,
            "unit": "iter/sec",
            "range": "stddev: 0.027943548497673484",
            "extra": "mean: 2.0828845047999893 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.843597426926486,
            "unit": "iter/sec",
            "range": "stddev: 0.0017073978674775098",
            "extra": "mean: 25.7442684571434 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1323578.0893716055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017237915082593835",
            "extra": "mean: 755.5277682745333 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 60.42150689722053,
            "unit": "iter/sec",
            "range": "stddev: 0.0012337882967062188",
            "extra": "mean: 16.550398216665485 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 54.754590852256406,
            "unit": "iter/sec",
            "range": "stddev: 0.0018593209583548295",
            "extra": "mean: 18.263308782605773 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 90.71021927464682,
            "unit": "iter/sec",
            "range": "stddev: 0.01675389370538087",
            "extra": "mean: 11.024116224129738 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.06872917361091,
            "unit": "iter/sec",
            "range": "stddev: 0.0034142347836852616",
            "extra": "mean: 58.5866698000018 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 174.01363952815439,
            "unit": "iter/sec",
            "range": "stddev: 0.00053245164181967",
            "extra": "mean: 5.746675965812472 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2417.174591416024,
            "unit": "iter/sec",
            "range": "stddev: 0.00013451375645961967",
            "extra": "mean: 413.7061524439499 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 63.34936575205098,
            "unit": "iter/sec",
            "range": "stddev: 0.0010537029221526666",
            "extra": "mean: 15.785477693872954 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 96936.48115840995,
            "unit": "iter/sec",
            "range": "stddev: 0.000006417284533357336",
            "extra": "mean: 10.31603363408496 usec\nrounds: 27472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 49.59248471936084,
            "unit": "iter/sec",
            "range": "stddev: 0.0010976803030309933",
            "extra": "mean: 20.16434557895022 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.4165815965180504,
            "unit": "iter/sec",
            "range": "stddev: 0.003531088915493786",
            "extra": "mean: 292.690214400011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 45650.24103060614,
            "unit": "iter/sec",
            "range": "stddev: 0.000009646916076911611",
            "extra": "mean: 21.90568937696411 usec\nrounds: 11287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.209051291460494,
            "unit": "iter/sec",
            "range": "stddev: 0.002453589395449102",
            "extra": "mean: 38.15475763999984 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 61.92833652896375,
            "unit": "iter/sec",
            "range": "stddev: 0.0010304770418083531",
            "extra": "mean: 16.147696774194834 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 676.2672587857946,
            "unit": "iter/sec",
            "range": "stddev: 0.00032827871566814485",
            "extra": "mean: 1.4787053298949469 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 196.4708793020716,
            "unit": "iter/sec",
            "range": "stddev: 0.0007833068862092194",
            "extra": "mean: 5.089812818837708 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 62.135011114168826,
            "unit": "iter/sec",
            "range": "stddev: 0.0016721757819991383",
            "extra": "mean: 16.093986016395306 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08116111215416759,
            "unit": "iter/sec",
            "range": "stddev: 0.136278541647636",
            "extra": "mean: 12.321171721999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 308284.9222500989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023030844043407747",
            "extra": "mean: 3.2437525413219563 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0194565762824153,
            "unit": "iter/sec",
            "range": "stddev: 0.020066989609622138",
            "extra": "mean: 980.9147571999915 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1064.022711300067,
            "unit": "iter/sec",
            "range": "stddev: 0.00015250336355353102",
            "extra": "mean: 939.8295632037391 usec\nrounds: 799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7707.9479741731075,
            "unit": "iter/sec",
            "range": "stddev: 0.00008109996217304637",
            "extra": "mean: 129.73621557263792 usec\nrounds: 5831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 63.38249012790007,
            "unit": "iter/sec",
            "range": "stddev: 0.0013597486497980316",
            "extra": "mean: 15.777228032254516 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 80.0730268292575,
            "unit": "iter/sec",
            "range": "stddev: 0.0012169447025971094",
            "extra": "mean: 12.488599964284287 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 171.19753887065423,
            "unit": "iter/sec",
            "range": "stddev: 0.0004752231766635805",
            "extra": "mean: 5.841205467068865 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8370247.620954583,
            "unit": "iter/sec",
            "range": "stddev: 1.0617427686924292e-7",
            "extra": "mean: 119.47077855815677 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2675.682173591734,
            "unit": "iter/sec",
            "range": "stddev: 0.00009631667535976567",
            "extra": "mean: 373.7364661131026 usec\nrounds: 1328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 166.0208123833503,
            "unit": "iter/sec",
            "range": "stddev: 0.0004341551685884429",
            "extra": "mean: 6.023341204300039 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1224836.0124185488,
            "unit": "iter/sec",
            "range": "stddev: 0.000003756076317185219",
            "extra": "mean: 816.4358247643373 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 161.31772325296959,
            "unit": "iter/sec",
            "range": "stddev: 0.0008183878658637866",
            "extra": "mean: 6.198946897061366 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 113.71240225596576,
            "unit": "iter/sec",
            "range": "stddev: 0.0004018034734517551",
            "extra": "mean: 8.794115506846893 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.28004044908597,
            "unit": "iter/sec",
            "range": "stddev: 0.0016355498218621873",
            "extra": "mean: 19.888607707318954 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.704620471443615,
            "unit": "iter/sec",
            "range": "stddev: 0.0017157044517711385",
            "extra": "mean: 40.47825795000222 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4136496.939007351,
            "unit": "iter/sec",
            "range": "stddev: 1.8995268138495648e-7",
            "extra": "mean: 241.75045086339608 nsec\nrounds: 49505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 49.650556119545634,
            "unit": "iter/sec",
            "range": "stddev: 0.0014230679400191722",
            "extra": "mean: 20.140761315789895 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2289.6969265331454,
            "unit": "iter/sec",
            "range": "stddev: 0.00014057875215459488",
            "extra": "mean: 436.7390235851479 usec\nrounds: 1696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 170.63809012780146,
            "unit": "iter/sec",
            "range": "stddev: 0.0004569962735196529",
            "extra": "mean: 5.86035626190517 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2754.269020929647,
            "unit": "iter/sec",
            "range": "stddev: 0.00008424302721157318",
            "extra": "mean: 363.07273995423674 usec\nrounds: 1792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.24132952521317,
            "unit": "iter/sec",
            "range": "stddev: 0.0012906056553302018",
            "extra": "mean: 15.812444290901857 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 123.33796565828368,
            "unit": "iter/sec",
            "range": "stddev: 0.018417920091597928",
            "extra": "mean: 8.10780358393918 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 59.91222746582533,
            "unit": "iter/sec",
            "range": "stddev: 0.0015785081687389759",
            "extra": "mean: 16.69108364516095 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1206651.0460006113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016614441709210156",
            "extra": "mean: 828.7400100587932 nsec\nrounds: 84034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5112641097703992,
            "unit": "iter/sec",
            "range": "stddev: 0.01565233890833675",
            "extra": "mean: 1.9559362390000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 26.235496620000276,
            "unit": "iter/sec",
            "range": "stddev: 0.0027166210265552305",
            "extra": "mean: 38.1162977200006 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 61.06312332169106,
            "unit": "iter/sec",
            "range": "stddev: 0.0012359384537040375",
            "extra": "mean: 16.376496084745412 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 51.84478521560451,
            "unit": "iter/sec",
            "range": "stddev: 0.0016750573230604182",
            "extra": "mean: 19.28834300000176 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 299.8424656864786,
            "unit": "iter/sec",
            "range": "stddev: 0.00032667991045036394",
            "extra": "mean: 3.335084634227963 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2318.330445857263,
            "unit": "iter/sec",
            "range": "stddev: 0.00009600862590525729",
            "extra": "mean: 431.34489381656033 usec\nrounds: 1601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.398329280266119,
            "unit": "iter/sec",
            "range": "stddev: 0.03151911061813282",
            "extra": "mean: 2.510485795400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 73.20440182963678,
            "unit": "iter/sec",
            "range": "stddev: 0.0007507629190372216",
            "extra": "mean: 13.660380728569114 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.199325276064553,
            "unit": "iter/sec",
            "range": "stddev: 0.002688950776006243",
            "extra": "mean: 161.3078771428523 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 474597.7701553778,
            "unit": "iter/sec",
            "range": "stddev: 0.000002785114873092663",
            "extra": "mean: 2.107047404948008 usec\nrounds: 17361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.930192791345483,
            "unit": "iter/sec",
            "range": "stddev: 0.003231749716667748",
            "extra": "mean: 38.565081565215436 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 182.8574544803379,
            "unit": "iter/sec",
            "range": "stddev: 0.0002985130837091034",
            "extra": "mean: 5.468740680230386 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 82.98182979374324,
            "unit": "iter/sec",
            "range": "stddev: 0.0008311452281428818",
            "extra": "mean: 12.050830916666518 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 47.54644975213797,
            "unit": "iter/sec",
            "range": "stddev: 0.0014175672214419303",
            "extra": "mean: 21.032064543473812 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2524.2809083094776,
            "unit": "iter/sec",
            "range": "stddev: 0.0001218190633475498",
            "extra": "mean: 396.15242372914213 usec\nrounds: 1357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 206.35447107799692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005598673844418383",
            "extra": "mean: 4.846030206062386 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7460.982461553994,
            "unit": "iter/sec",
            "range": "stddev: 0.00003994267767062537",
            "extra": "mean: 134.03060590920052 usec\nrounds: 4806"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 59.46427153994633,
            "unit": "iter/sec",
            "range": "stddev: 0.0018529459365526232",
            "extra": "mean: 16.81682082539647 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.602096593832766,
            "unit": "iter/sec",
            "range": "stddev: 0.006616579256936781",
            "extra": "mean: 624.1820898000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2629.402598769539,
            "unit": "iter/sec",
            "range": "stddev: 0.00015062256680103972",
            "extra": "mean: 380.3145248536539 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 49.329231966648834,
            "unit": "iter/sec",
            "range": "stddev: 0.0017632902129856279",
            "extra": "mean: 20.27195559574277 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 50.80247731722677,
            "unit": "iter/sec",
            "range": "stddev: 0.0012252545137825133",
            "extra": "mean: 19.684079454544765 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2560.086422028804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001000316487801968",
            "extra": "mean: 390.61181349007944 usec\nrounds: 2461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 396.2391559372606,
            "unit": "iter/sec",
            "range": "stddev: 0.00022163046709609962",
            "extra": "mean: 2.5237283721610217 msec\nrounds: 352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4307.309870569621,
            "unit": "iter/sec",
            "range": "stddev: 0.000059013503083030535",
            "extra": "mean: 232.16346862635976 usec\nrounds: 3267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5080259448106277,
            "unit": "iter/sec",
            "range": "stddev: 0.009631784832754915",
            "extra": "mean: 1.9684034057999953 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}