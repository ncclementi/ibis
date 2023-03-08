window.BENCHMARK_DATA = {
  "lastUpdate": 1678277808055,
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
          "id": "6d2ae264cbf023a2122f77cbdbb7fd4257f9fbbf",
          "message": "fix(ir): use static connection pooling to prevent dropping temporary state",
          "timestamp": "2023-03-08T07:08:10-05:00",
          "tree_id": "ba250a32cbdaa43d1375c0ee191799d6604ce950",
          "url": "https://github.com/ibis-project/ibis/commit/6d2ae264cbf023a2122f77cbdbb7fd4257f9fbbf"
        },
        "date": 1678277719650,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.444743969660927,
            "unit": "iter/sec",
            "range": "stddev: 0.0042643832456896145",
            "extra": "mean: 118.41685237499888 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.49571428262846,
            "unit": "iter/sec",
            "range": "stddev: 0.00039210859384415853",
            "extra": "mean: 4.22840643448165 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125421.81764754864,
            "unit": "iter/sec",
            "range": "stddev: 0.000009691000326025384",
            "extra": "mean: 7.9730944643947685 usec\nrounds: 33113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 91.63009753632562,
            "unit": "iter/sec",
            "range": "stddev: 0.0010887994502964255",
            "extra": "mean: 10.913444674699408 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.95548527079478,
            "unit": "iter/sec",
            "range": "stddev: 0.001270790790371818",
            "extra": "mean: 10.105553999997763 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3020.5992948391613,
            "unit": "iter/sec",
            "range": "stddev: 0.00011386163649418566",
            "extra": "mean: 331.0601315800305 usec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.728771772292205,
            "unit": "iter/sec",
            "range": "stddev: 0.0011491945225398903",
            "extra": "mean: 17.027429142861667 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.45761602247201,
            "unit": "iter/sec",
            "range": "stddev: 0.0014201874035023466",
            "extra": "mean: 10.36724772222265 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10619.014219244204,
            "unit": "iter/sec",
            "range": "stddev: 0.00002094000264626309",
            "extra": "mean: 94.17069978000029 usec\nrounds: 5456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1646232.6332308094,
            "unit": "iter/sec",
            "range": "stddev: 9.944878350650572e-7",
            "extra": "mean: 607.447562278882 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.716290680467848,
            "unit": "iter/sec",
            "range": "stddev: 0.003837709043259947",
            "extra": "mean: 212.0310361999998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.16014994288454,
            "unit": "iter/sec",
            "range": "stddev: 0.0008504552849466048",
            "extra": "mean: 10.084696327869532 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 61.887354499722946,
            "unit": "iter/sec",
            "range": "stddev: 0.02138828315810782",
            "extra": "mean: 16.158389837207807 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5200950.535282433,
            "unit": "iter/sec",
            "range": "stddev: 1.3961211353767656e-7",
            "extra": "mean: 192.27254580032158 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 431.5474629037466,
            "unit": "iter/sec",
            "range": "stddev: 0.00024916688604002205",
            "extra": "mean: 2.317242217741974 msec\nrounds: 372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.66111309846437,
            "unit": "iter/sec",
            "range": "stddev: 0.0009181456940870788",
            "extra": "mean: 10.0340039250014 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5437879135084897,
            "unit": "iter/sec",
            "range": "stddev: 0.05779074088556151",
            "extra": "mean: 1.8389522370000009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.87118165279738,
            "unit": "iter/sec",
            "range": "stddev: 0.0010628383713102334",
            "extra": "mean: 12.066920973682583 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11384.154233778998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000191487356365959",
            "extra": "mean: 87.8413959846754 usec\nrounds: 6326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.9890890991954,
            "unit": "iter/sec",
            "range": "stddev: 0.0005747401168874799",
            "extra": "mean: 7.4632942631595585 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4138.447687781119,
            "unit": "iter/sec",
            "range": "stddev: 0.00007148330272766591",
            "extra": "mean: 241.6364964458842 usec\nrounds: 1688"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.59272256576585,
            "unit": "iter/sec",
            "range": "stddev: 0.0003200342864323485",
            "extra": "mean: 7.429822214283328 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 237.12865213086985,
            "unit": "iter/sec",
            "range": "stddev: 0.0004708227762101936",
            "extra": "mean: 4.217120078125802 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9556570.022791307,
            "unit": "iter/sec",
            "range": "stddev: 1.736430376506213e-7",
            "extra": "mean: 104.6400536610109 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.658529951869216,
            "unit": "iter/sec",
            "range": "stddev: 0.0034846222342092706",
            "extra": "mean: 78.99811461538118 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2224488.4137490964,
            "unit": "iter/sec",
            "range": "stddev: 0.000001630497838241031",
            "extra": "mean: 449.5415637227809 nsec\nrounds: 99001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 235.62206580578965,
            "unit": "iter/sec",
            "range": "stddev: 0.00037724816798283717",
            "extra": "mean: 4.244084681034267 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 246.89061042114324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003010215870902078",
            "extra": "mean: 4.050376797619849 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.93616784655147,
            "unit": "iter/sec",
            "range": "stddev: 0.00045318938915713534",
            "extra": "mean: 10.107527123457876 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 159.4776088387449,
            "unit": "iter/sec",
            "range": "stddev: 0.00043936464650335885",
            "extra": "mean: 6.2704727471249315 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 914.258782415565,
            "unit": "iter/sec",
            "range": "stddev: 0.00019076117659913596",
            "extra": "mean: 1.0937822192507662 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.4743875119387,
            "unit": "iter/sec",
            "range": "stddev: 0.000607746538836442",
            "extra": "mean: 4.175811912036507 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 78.81313507698621,
            "unit": "iter/sec",
            "range": "stddev: 0.0009249380676003364",
            "extra": "mean: 12.688240342465509 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.737447807710986,
            "unit": "iter/sec",
            "range": "stddev: 0.0019285977961068911",
            "extra": "mean: 21.863922189191495 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 222.49294924006173,
            "unit": "iter/sec",
            "range": "stddev: 0.0004426461675523067",
            "extra": "mean: 4.49452444859741 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 80.56183267351666,
            "unit": "iter/sec",
            "range": "stddev: 0.0011830457698318916",
            "extra": "mean: 12.41282586075941 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6455.785360006218,
            "unit": "iter/sec",
            "range": "stddev: 0.00006720636025686551",
            "extra": "mean: 154.89982151436286 usec\nrounds: 4174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.190173222654632,
            "unit": "iter/sec",
            "range": "stddev: 0.002471540844811714",
            "extra": "mean: 47.19168595237767 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.670854773211897,
            "unit": "iter/sec",
            "range": "stddev: 0.03339056789450879",
            "extra": "mean: 37.49411139999893 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.82141670918934,
            "unit": "iter/sec",
            "range": "stddev: 0.0007729446828783281",
            "extra": "mean: 11.010618819149292 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.80139083717343,
            "unit": "iter/sec",
            "range": "stddev: 0.001504042922145649",
            "extra": "mean: 28.734483764707495 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1393.4604341625127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000925348287257972",
            "extra": "mean: 717.6378858586054 usec\nrounds: 990"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3745.557151724096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803210626217478",
            "extra": "mean: 266.9829772961002 usec\nrounds: 1938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.78741669310771,
            "unit": "iter/sec",
            "range": "stddev: 0.0012533318047960762",
            "extra": "mean: 17.9251892142829 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6095108784010737,
            "unit": "iter/sec",
            "range": "stddev: 0.008298631644118893",
            "extra": "mean: 1.6406598067999938 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.68075850334178,
            "unit": "iter/sec",
            "range": "stddev: 0.0007367356290253191",
            "extra": "mean: 12.242785428579086 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 64915.63694782968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051632021614236965",
            "extra": "mean: 15.40460892040023 usec\nrounds: 11793"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.9868084197722,
            "unit": "iter/sec",
            "range": "stddev: 0.001264922992659534",
            "extra": "mean: 11.629690860465237 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3774.5775761810914,
            "unit": "iter/sec",
            "range": "stddev: 0.00009957421775399103",
            "extra": "mean: 264.93030804568724 usec\nrounds: 3045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.54117707111766,
            "unit": "iter/sec",
            "range": "stddev: 0.0018647656261327743",
            "extra": "mean: 12.89637374324148 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.09599614886602,
            "unit": "iter/sec",
            "range": "stddev: 0.001076162106091873",
            "extra": "mean: 11.89117253846198 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.4067308049292,
            "unit": "iter/sec",
            "range": "stddev: 0.001170116785791384",
            "extra": "mean: 10.161906526315677 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 217.67018303897933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004947342756381107",
            "extra": "mean: 4.5941064873406425 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 228.20501449111782,
            "unit": "iter/sec",
            "range": "stddev: 0.0004932866447521035",
            "extra": "mean: 4.3820246554613815 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.19424310445689,
            "unit": "iter/sec",
            "range": "stddev: 0.0008514900509263662",
            "extra": "mean: 10.288675214284831 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.00382747466242,
            "unit": "iter/sec",
            "range": "stddev: 0.0008718587700088761",
            "extra": "mean: 11.235471870967343 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 281.13724865945665,
            "unit": "iter/sec",
            "range": "stddev: 0.00044831754415669735",
            "extra": "mean: 3.5569815268815783 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 100.78512221347572,
            "unit": "iter/sec",
            "range": "stddev: 0.000926277884385989",
            "extra": "mean: 9.92209939361757 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11083174156948648,
            "unit": "iter/sec",
            "range": "stddev: 0.17648981916841897",
            "extra": "mean: 9.022685972799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1674077.0518822498,
            "unit": "iter/sec",
            "range": "stddev: 9.533664312338065e-7",
            "extra": "mean: 597.3440702001436 nsec\nrounds: 65786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 225.0592523771095,
            "unit": "iter/sec",
            "range": "stddev: 0.0004609271894571794",
            "extra": "mean: 4.4432743352599395 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5847722.017787457,
            "unit": "iter/sec",
            "range": "stddev: 9.472273689417957e-8",
            "extra": "mean: 171.00676074522883 nsec\nrounds: 55556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8387019925109762,
            "unit": "iter/sec",
            "range": "stddev: 0.015906520917701714",
            "extra": "mean: 543.8619222000057 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4231.175133035607,
            "unit": "iter/sec",
            "range": "stddev: 0.00009672656905372543",
            "extra": "mean: 236.34096168516703 usec\nrounds: 2349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 435428.32784123486,
            "unit": "iter/sec",
            "range": "stddev: 0.000001029522285604605",
            "extra": "mean: 2.2965892112665167 usec\nrounds: 1928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3940.59446840445,
            "unit": "iter/sec",
            "range": "stddev: 0.00016019237184542",
            "extra": "mean: 253.7688178821661 usec\nrounds: 2125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.722285692275904,
            "unit": "iter/sec",
            "range": "stddev: 0.00220354498138736",
            "extra": "mean: 30.560212370373932 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3930.5611786555323,
            "unit": "iter/sec",
            "range": "stddev: 0.0001789326793900194",
            "extra": "mean: 254.41659715930305 usec\nrounds: 1971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 58.52326892918662,
            "unit": "iter/sec",
            "range": "stddev: 0.0008587190977727337",
            "extra": "mean: 17.08722049019517 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 665466.6351884699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013269895979135875",
            "extra": "mean: 1.5027049398453842 usec\nrounds: 20284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4593999.965489564,
            "unit": "iter/sec",
            "range": "stddev: 3.500957157526759e-7",
            "extra": "mean: 217.6752301943452 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6140185584581969,
            "unit": "iter/sec",
            "range": "stddev: 0.0084917035305637",
            "extra": "mean: 1.6286152694000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 112.9532462966505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006577880833197883",
            "extra": "mean: 8.853220538466754 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.87205611454205,
            "unit": "iter/sec",
            "range": "stddev: 0.0008186863266312705",
            "extra": "mean: 9.913548295917373 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3846.1114981203295,
            "unit": "iter/sec",
            "range": "stddev: 0.00010859095996139038",
            "extra": "mean: 260.0028627585861 usec\nrounds: 2798"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2144426547321785,
            "unit": "iter/sec",
            "range": "stddev: 0.012935535870242537",
            "extra": "mean: 823.4229884000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 72.87673205482025,
            "unit": "iter/sec",
            "range": "stddev: 0.0014057701477838518",
            "extra": "mean: 13.721800797101707 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.38017680872298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005539027509043588",
            "extra": "mean: 7.332443932834374 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 207.2617366637899,
            "unit": "iter/sec",
            "range": "stddev: 0.0006505487949813515",
            "extra": "mean: 4.8248172388044415 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3866.3901027407937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008315901509170906",
            "extra": "mean: 258.6391888627905 usec\nrounds: 2981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 613.1183681944249,
            "unit": "iter/sec",
            "range": "stddev: 0.00017833383694803966",
            "extra": "mean: 1.6310064285708885 msec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.74634386511707,
            "unit": "iter/sec",
            "range": "stddev: 0.0040460037539351195",
            "extra": "mean: 7.366680910342893 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.038695366751572,
            "unit": "iter/sec",
            "range": "stddev: 0.0018046317145123364",
            "extra": "mean: 33.2903938666675 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5886636706266516,
            "unit": "iter/sec",
            "range": "stddev: 0.012897447621245766",
            "extra": "mean: 1.698762892800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 545.7714280955009,
            "unit": "iter/sec",
            "range": "stddev: 0.00015865113771651245",
            "extra": "mean: 1.8322688739671742 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1380222.7979053215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010343163119147073",
            "extra": "mean: 724.5207089157186 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9011.796263506792,
            "unit": "iter/sec",
            "range": "stddev: 0.00003772734794169216",
            "extra": "mean: 110.96566885888147 usec\nrounds: 4258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 177.84379510872557,
            "unit": "iter/sec",
            "range": "stddev: 0.004577779803263411",
            "extra": "mean: 5.622911945781666 msec\nrounds: 166"
          }
        ]
      }
    ]
  }
}