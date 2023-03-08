window.BENCHMARK_DATA = {
  "lastUpdate": 1678299255277,
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
          "id": "ad0b6a3c123dfca21065e54aa0e6127201d585ef",
          "message": "docs: add druid to the backends index docs page",
          "timestamp": "2023-03-08T13:09:25-05:00",
          "tree_id": "d0b2723227e8a5eb13025fff24a4570cae912cb1",
          "url": "https://github.com/ibis-project/ibis/commit/ad0b6a3c123dfca21065e54aa0e6127201d585ef"
        },
        "date": 1678299178811,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.63151051533079,
            "unit": "iter/sec",
            "range": "stddev: 0.0007065985665154924",
            "extra": "mean: 15.472329085714268 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.03222186699101,
            "unit": "iter/sec",
            "range": "stddev: 0.008506983560982378",
            "extra": "mean: 10.634652464285109 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5646.965412277877,
            "unit": "iter/sec",
            "range": "stddev: 0.00005112716672527031",
            "extra": "mean: 177.08626261916825 usec\nrounds: 2932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5358.210012200769,
            "unit": "iter/sec",
            "range": "stddev: 0.00005054906160469301",
            "extra": "mean: 186.62948964728457 usec\nrounds: 3574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.29442979691767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676358037459933",
            "extra": "mean: 8.244401673467548 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.676453601448,
            "unit": "iter/sec",
            "range": "stddev: 0.00031434926011702455",
            "extra": "mean: 3.5127597922096414 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.98817114251477,
            "unit": "iter/sec",
            "range": "stddev: 0.0005488362762408761",
            "extra": "mean: 8.1975161249998 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.8262728026117,
            "unit": "iter/sec",
            "range": "stddev: 0.0006016645784905447",
            "extra": "mean: 9.539593207544488 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.18361216278936,
            "unit": "iter/sec",
            "range": "stddev: 0.0006027307013170235",
            "extra": "mean: 8.251940853658265 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.1416032323874,
            "unit": "iter/sec",
            "range": "stddev: 0.00007303608808242194",
            "extra": "mean: 8.997530815792599 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 107.54987657791575,
            "unit": "iter/sec",
            "range": "stddev: 0.000584643922912402",
            "extra": "mean: 9.29801159999973 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1142.26089293267,
            "unit": "iter/sec",
            "range": "stddev: 0.00001271476172726945",
            "extra": "mean: 875.4567421393324 usec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.81977671591711,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260565061236188",
            "extra": "mean: 8.20884775000034 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.72277966160703,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037720892895714",
            "extra": "mean: 9.641083696970664 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.3367757738235,
            "unit": "iter/sec",
            "range": "stddev: 0.00007338772635103565",
            "extra": "mean: 6.160033641380528 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8415.612327950905,
            "unit": "iter/sec",
            "range": "stddev: 0.000013585806050204391",
            "extra": "mean: 118.82676637547624 usec\nrounds: 1832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5685.289052967178,
            "unit": "iter/sec",
            "range": "stddev: 0.00004805550475202952",
            "extra": "mean: 175.89255193244668 usec\nrounds: 2484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 324.8600639129733,
            "unit": "iter/sec",
            "range": "stddev: 0.00019857166806618625",
            "extra": "mean: 3.0782484863017503 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 317.24584951341404,
            "unit": "iter/sec",
            "range": "stddev: 0.00020690300344679573",
            "extra": "mean: 3.152129496835914 msec\nrounds: 316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.11635396128457,
            "unit": "iter/sec",
            "range": "stddev: 0.00015405256312037336",
            "extra": "mean: 16.09881997618973 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6100988.695789058,
            "unit": "iter/sec",
            "range": "stddev: 8.635732405379241e-9",
            "extra": "mean: 163.90785983391729 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1803912.334411367,
            "unit": "iter/sec",
            "range": "stddev: 9.34771802759064e-8",
            "extra": "mean: 554.35066379005 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.87995472758477,
            "unit": "iter/sec",
            "range": "stddev: 0.013116108182811805",
            "extra": "mean: 10.539634034092416 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.594308047408228,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456714540605476",
            "extra": "mean: 178.75311683332976 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5378.2613115135355,
            "unit": "iter/sec",
            "range": "stddev: 0.000045288609205472876",
            "extra": "mean: 185.93369531139103 usec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6774281316281802,
            "unit": "iter/sec",
            "range": "stddev: 0.04631832633722796",
            "extra": "mean: 1.476171350599992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.482052321021717,
            "unit": "iter/sec",
            "range": "stddev: 0.00008450291939157575",
            "extra": "mean: 64.5909198124972 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.171278866767516,
            "unit": "iter/sec",
            "range": "stddev: 0.0008856899943484514",
            "extra": "mean: 23.163548225803943 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1704779947918424,
            "unit": "iter/sec",
            "range": "stddev: 0.08259367486645147",
            "extra": "mean: 5.865859703600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745144.2749502838,
            "unit": "iter/sec",
            "range": "stddev: 4.08760446144874e-7",
            "extra": "mean: 1.3420219863686402 usec\nrounds: 23924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.16563624493915,
            "unit": "iter/sec",
            "range": "stddev: 0.00019290180298940242",
            "extra": "mean: 3.276908934783721 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8964269093026046,
            "unit": "iter/sec",
            "range": "stddev: 0.006731502180461907",
            "extra": "mean: 1.1155399170000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5188.268257095108,
            "unit": "iter/sec",
            "range": "stddev: 0.000026631866769344436",
            "extra": "mean: 192.74253960027428 usec\nrounds: 1351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71687.5715420412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010117598124084712",
            "extra": "mean: 13.949419383156947 usec\nrounds: 12547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.70151257112104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931058824463235",
            "extra": "mean: 8.284900318964679 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.2675343640235,
            "unit": "iter/sec",
            "range": "stddev: 0.000019085790404624856",
            "extra": "mean: 5.0950861702133015 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7117077.195236129,
            "unit": "iter/sec",
            "range": "stddev: 4.416282608295528e-9",
            "extra": "mean: 140.50711725728095 nsec\nrounds: 59877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5528208723482515,
            "unit": "iter/sec",
            "range": "stddev: 0.0024195822844199017",
            "extra": "mean: 391.723528600005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1736.5762573831576,
            "unit": "iter/sec",
            "range": "stddev: 0.00001795907587788825",
            "extra": "mean: 575.8457169666119 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.38933832771862,
            "unit": "iter/sec",
            "range": "stddev: 0.0006542763901143044",
            "extra": "mean: 8.237955769231302 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7897332570242863,
            "unit": "iter/sec",
            "range": "stddev: 0.0016810776443203954",
            "extra": "mean: 558.7424807999923 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.21415227929987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751382463414554",
            "extra": "mean: 10.502640375000283 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.85666046699248,
            "unit": "iter/sec",
            "range": "stddev: 0.0036288333221562467",
            "extra": "mean: 4.3316922196532355 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.4344126056125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000679935375992105",
            "extra": "mean: 10.263314297872588 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5330.317232457106,
            "unit": "iter/sec",
            "range": "stddev: 0.000050524388618980745",
            "extra": "mean: 187.60609479504316 usec\nrounds: 2152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2010090.5193993864,
            "unit": "iter/sec",
            "range": "stddev: 6.27302039365766e-8",
            "extra": "mean: 497.49003358256687 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.29054242510098,
            "unit": "iter/sec",
            "range": "stddev: 0.0002267915430915273",
            "extra": "mean: 8.313205509258145 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 314.40520430444343,
            "unit": "iter/sec",
            "range": "stddev: 0.0001895700776123839",
            "extra": "mean: 3.1806089285713113 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147485.25667465644,
            "unit": "iter/sec",
            "range": "stddev: 2.890470315441356e-7",
            "extra": "mean: 6.780338744000288 usec\nrounds: 34129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.13399667814707,
            "unit": "iter/sec",
            "range": "stddev: 0.00012387908992161952",
            "extra": "mean: 6.129930121021531 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 328.2546408773275,
            "unit": "iter/sec",
            "range": "stddev: 0.000015318103710372712",
            "extra": "mean: 3.046415421050243 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.48628620654185,
            "unit": "iter/sec",
            "range": "stddev: 0.0006115334659190009",
            "extra": "mean: 9.133563979999622 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.02359300618895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803245357910272",
            "extra": "mean: 6.171940650407637 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.7410909219941,
            "unit": "iter/sec",
            "range": "stddev: 0.00011155468848205431",
            "extra": "mean: 13.030828568966808 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12029870.59567201,
            "unit": "iter/sec",
            "range": "stddev: 2.897165442703732e-9",
            "extra": "mean: 83.12641370882139 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5277.2058643075525,
            "unit": "iter/sec",
            "range": "stddev: 0.000046899486636194584",
            "extra": "mean: 189.4942182876572 usec\nrounds: 2231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.275999140433672,
            "unit": "iter/sec",
            "range": "stddev: 0.0006443415564031402",
            "extra": "mean: 38.057544249999374 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.463038607944533,
            "unit": "iter/sec",
            "range": "stddev: 0.029434030718584598",
            "extra": "mean: 32.826666205885566 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.31893636007794,
            "unit": "iter/sec",
            "range": "stddev: 0.003791712353564296",
            "extra": "mean: 5.837066358491749 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5432.170782249093,
            "unit": "iter/sec",
            "range": "stddev: 0.0003085906173907299",
            "extra": "mean: 184.0884685120242 usec\nrounds: 2493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.60508421524013,
            "unit": "iter/sec",
            "range": "stddev: 0.0015601167317344906",
            "extra": "mean: 94.2943949999889 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12944.585873702326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015017366862175361",
            "extra": "mean: 77.25237483506967 usec\nrounds: 5317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.1726612578304,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253698601504218",
            "extra": "mean: 1.3224492913253214 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.9535210872167,
            "unit": "iter/sec",
            "range": "stddev: 0.0001756897643890555",
            "extra": "mean: 3.2578222150964136 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.90145928688617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007392735111542429",
            "extra": "mean: 26.384208387089675 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12218.387152223237,
            "unit": "iter/sec",
            "range": "stddev: 0.00001193554263431224",
            "extra": "mean: 81.84386265891418 usec\nrounds: 4558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5229.8196037569805,
            "unit": "iter/sec",
            "range": "stddev: 0.00005006691498109561",
            "extra": "mean: 191.2111842790186 usec\nrounds: 2290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2729010.7920730566,
            "unit": "iter/sec",
            "range": "stddev: 1.2376916015564424e-8",
            "extra": "mean: 366.4331423326707 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1975733.9781443765,
            "unit": "iter/sec",
            "range": "stddev: 7.741342051516938e-8",
            "extra": "mean: 506.14101445945016 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495497.6298795865,
            "unit": "iter/sec",
            "range": "stddev: 3.614539994789509e-7",
            "extra": "mean: 2.018173124749386 usec\nrounds: 2039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.65716180397,
            "unit": "iter/sec",
            "range": "stddev: 0.00016586330435814937",
            "extra": "mean: 3.416967464031611 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.72503054678486,
            "unit": "iter/sec",
            "range": "stddev: 0.01722477369524925",
            "extra": "mean: 10.902149544555828 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.33476153287084,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116170471639559",
            "extra": "mean: 8.746246431034043 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5502028.238360557,
            "unit": "iter/sec",
            "range": "stddev: 8.121949396411567e-9",
            "extra": "mean: 181.751157332832 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.44550060570484,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092305729005047",
            "extra": "mean: 8.814805299997179 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.32314441808593,
            "unit": "iter/sec",
            "range": "stddev: 0.00018827491773378889",
            "extra": "mean: 16.856827294123143 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.14063528021583,
            "unit": "iter/sec",
            "range": "stddev: 0.00033427621522860924",
            "extra": "mean: 7.345345480001015 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 321.29466555372704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002123265098089948",
            "extra": "mean: 3.112407727892325 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.82676977726317,
            "unit": "iter/sec",
            "range": "stddev: 0.0002204898371647802",
            "extra": "mean: 3.156298947538505 msec\nrounds: 305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8495759442264261,
            "unit": "iter/sec",
            "range": "stddev: 0.0031844349997799904",
            "extra": "mean: 1.1770578095999895 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.815659323861745,
            "unit": "iter/sec",
            "range": "stddev: 0.00040896507033860583",
            "extra": "mean: 20.913650760870375 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8980258630101668,
            "unit": "iter/sec",
            "range": "stddev: 0.02249371833688561",
            "extra": "mean: 1.1135536749999801 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.8274492778673,
            "unit": "iter/sec",
            "range": "stddev: 0.00002633633400437662",
            "extra": "mean: 1.464498829180875 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.455916811381,
            "unit": "iter/sec",
            "range": "stddev: 0.000023842937147034457",
            "extra": "mean: 1.850289670062026 msec\nrounds: 491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.44718921979249,
            "unit": "iter/sec",
            "range": "stddev: 0.00012677600427798638",
            "extra": "mean: 9.761126758242021 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.89907276238617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003250960410905299",
            "extra": "mean: 10.764370087500907 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.37129133064514,
            "unit": "iter/sec",
            "range": "stddev: 0.000021167741954522176",
            "extra": "mean: 3.432047115668682 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13969.06519274869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013518239492827435",
            "extra": "mean: 71.58675159731501 usec\nrounds: 6888"
          }
        ]
      }
    ]
  }
}