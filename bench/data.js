window.BENCHMARK_DATA = {
  "lastUpdate": 1682728334123,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "42a60b25886d58638dddb99190e2a1ea1c9284cd",
          "message": "chore(flake/poetry2nix): `7b7956ff` -> `34702e36`",
          "timestamp": "2023-04-29T00:25:32Z",
          "tree_id": "291421ade94e5019ad901c8fd28f3c07061ca610",
          "url": "https://github.com/ibis-project/ibis/commit/42a60b25886d58638dddb99190e2a1ea1c9284cd"
        },
        "date": 1682728254340,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.949926371160475,
            "unit": "iter/sec",
            "range": "stddev: 0.022089872871204057",
            "extra": "mean: 125.78732850000307 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.19060776864595,
            "unit": "iter/sec",
            "range": "stddev: 0.00023127753410127078",
            "extra": "mean: 10.61676979998083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.90618599977914,
            "unit": "iter/sec",
            "range": "stddev: 0.00038985663576464314",
            "extra": "mean: 15.406851975609886 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.58133409101023,
            "unit": "iter/sec",
            "range": "stddev: 0.016881142199151485",
            "extra": "mean: 13.970122416670469 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.2534487257118,
            "unit": "iter/sec",
            "range": "stddev: 0.000590262953171794",
            "extra": "mean: 9.500876333334961 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.61218770212699,
            "unit": "iter/sec",
            "range": "stddev: 0.00012016099777719781",
            "extra": "mean: 18.65247517143059 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.43305166765323,
            "unit": "iter/sec",
            "range": "stddev: 0.011980818651427963",
            "extra": "mean: 11.307989277110709 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2080.4065640011554,
            "unit": "iter/sec",
            "range": "stddev: 0.00007935419763726971",
            "extra": "mean: 480.6752763155792 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.64865212689483,
            "unit": "iter/sec",
            "range": "stddev: 0.000047144234344928094",
            "extra": "mean: 3.15807439344241 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1059957.5902289608,
            "unit": "iter/sec",
            "range": "stddev: 1.1460778699403252e-7",
            "extra": "mean: 943.4339724705313 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.94291187973997,
            "unit": "iter/sec",
            "range": "stddev: 0.00005079492536491417",
            "extra": "mean: 5.782254902099568 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.489653411314382,
            "unit": "iter/sec",
            "range": "stddev: 0.0001064397199602252",
            "extra": "mean: 54.08430205555229 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 229.05340858083093,
            "unit": "iter/sec",
            "range": "stddev: 0.004075896093897691",
            "extra": "mean: 4.365794013700995 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.98029280555106,
            "unit": "iter/sec",
            "range": "stddev: 0.0006443324856146253",
            "extra": "mean: 9.525597359994435 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.42768051886895,
            "unit": "iter/sec",
            "range": "stddev: 0.00031090188074776306",
            "extra": "mean: 3.767504572413694 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149138.57600559737,
            "unit": "iter/sec",
            "range": "stddev: 4.530034374211838e-7",
            "extra": "mean: 6.705173314531773 usec\nrounds: 34723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 648.9774439045393,
            "unit": "iter/sec",
            "range": "stddev: 0.00010708165452935023",
            "extra": "mean: 1.5408856030242768 msec\nrounds: 529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6155504.361730601,
            "unit": "iter/sec",
            "range": "stddev: 7.47415458828593e-9",
            "extra": "mean: 162.45622474359294 nsec\nrounds: 44248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8964943637699748,
            "unit": "iter/sec",
            "range": "stddev: 0.006268702762355058",
            "extra": "mean: 1.1154559809999909 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.7664977947909,
            "unit": "iter/sec",
            "range": "stddev: 0.0002539241624492715",
            "extra": "mean: 3.6661393832622555 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.63234650806237,
            "unit": "iter/sec",
            "range": "stddev: 0.00026524129525940757",
            "extra": "mean: 3.601885776558677 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4519469.2297323635,
            "unit": "iter/sec",
            "range": "stddev: 2.1165061143014182e-8",
            "extra": "mean: 221.26492053980675 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1660274749947383,
            "unit": "iter/sec",
            "range": "stddev: 0.08111403803103452",
            "extra": "mean: 6.023099490199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10451.731941918137,
            "unit": "iter/sec",
            "range": "stddev: 0.00000253056466068023",
            "extra": "mean: 95.67792262154751 usec\nrounds: 4394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.58941787906909,
            "unit": "iter/sec",
            "range": "stddev: 0.0007654642350989159",
            "extra": "mean: 9.84354493683967 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3462388850767697,
            "unit": "iter/sec",
            "range": "stddev: 0.0038471135293364975",
            "extra": "mean: 426.2140596000222 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.19600389794184,
            "unit": "iter/sec",
            "range": "stddev: 0.0008798195946928949",
            "extra": "mean: 10.1837137999967 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3431490999073536,
            "unit": "iter/sec",
            "range": "stddev: 0.0003422827809290662",
            "extra": "mean: 744.5189816000152 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.46035068882683,
            "unit": "iter/sec",
            "range": "stddev: 0.020230665183404675",
            "extra": "mean: 26.694891575007773 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1892211.9954290537,
            "unit": "iter/sec",
            "range": "stddev: 8.902544391891846e-8",
            "extra": "mean: 528.4820106920699 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6244479.246904075,
            "unit": "iter/sec",
            "range": "stddev: 6.455322646802656e-9",
            "extra": "mean: 160.1414562304529 nsec\nrounds: 62497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 270.15347180169175,
            "unit": "iter/sec",
            "range": "stddev: 0.00046201353845256145",
            "extra": "mean: 3.7015996623358514 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13851.59810749689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014902417895318185",
            "extra": "mean: 72.19383584763196 usec\nrounds: 6762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2121.743235393872,
            "unit": "iter/sec",
            "range": "stddev: 0.00008906892647317073",
            "extra": "mean: 471.31056355853724 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.92091326103284,
            "unit": "iter/sec",
            "range": "stddev: 0.0007572830920587047",
            "extra": "mean: 10.109085804345504 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.243924368307777,
            "unit": "iter/sec",
            "range": "stddev: 0.0005026044627936807",
            "extra": "mean: 41.2474475999943 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2151.8542732527944,
            "unit": "iter/sec",
            "range": "stddev: 0.00008864085866950477",
            "extra": "mean: 464.71548395718077 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 511.3842130088517,
            "unit": "iter/sec",
            "range": "stddev: 0.000028920712850277018",
            "extra": "mean: 1.9554768695659572 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.8854975065142,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791134929488931",
            "extra": "mean: 3.775216119468403 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.02831926549491,
            "unit": "iter/sec",
            "range": "stddev: 0.00007418363191792644",
            "extra": "mean: 7.99818797752949 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7597806877545359,
            "unit": "iter/sec",
            "range": "stddev: 0.0033401060716070096",
            "extra": "mean: 1.3161692789999848 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4504.838096410714,
            "unit": "iter/sec",
            "range": "stddev: 0.000034006835938454545",
            "extra": "mean: 221.983560473963 usec\nrounds: 926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.4398443940727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004606048240344918",
            "extra": "mean: 2.36720094770973 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2206.68775686126,
            "unit": "iter/sec",
            "range": "stddev: 0.00008360213413365819",
            "extra": "mean: 453.167874290641 usec\nrounds: 1233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1971633.3275286844,
            "unit": "iter/sec",
            "range": "stddev: 7.895170954265521e-8",
            "extra": "mean: 507.193698766208 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 267.4317358058727,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194441030601964",
            "extra": "mean: 3.7392719939786607 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 126.73163845605211,
            "unit": "iter/sec",
            "range": "stddev: 0.00003939678544948312",
            "extra": "mean: 7.890689429907271 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12472.948113184915,
            "unit": "iter/sec",
            "range": "stddev: 0.000011555426856662611",
            "extra": "mean: 80.1735075721929 usec\nrounds: 3962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.97400706383569,
            "unit": "iter/sec",
            "range": "stddev: 0.00006164181530755777",
            "extra": "mean: 9.011119148151234 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.89811860910837,
            "unit": "iter/sec",
            "range": "stddev: 0.0008967620165789736",
            "extra": "mean: 10.649840644442873 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.103990521358625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004718351485532973",
            "extra": "mean: 21.229623837211083 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.26367607726512,
            "unit": "iter/sec",
            "range": "stddev: 0.0007312333918791427",
            "extra": "mean: 10.074178586954783 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 732.1052350092592,
            "unit": "iter/sec",
            "range": "stddev: 0.00003814365258232112",
            "extra": "mean: 1.3659238483485951 msec\nrounds: 666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.3928237156382,
            "unit": "iter/sec",
            "range": "stddev: 0.01862950780505706",
            "extra": "mean: 12.595596846154592 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.58276589876827,
            "unit": "iter/sec",
            "range": "stddev: 0.0001604962491509401",
            "extra": "mean: 9.748226139533317 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.69309524503362,
            "unit": "iter/sec",
            "range": "stddev: 0.00003611909100338952",
            "extra": "mean: 6.223042741663202 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.9612722477692,
            "unit": "iter/sec",
            "range": "stddev: 0.0008588522335740766",
            "extra": "mean: 10.208115687500907 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.0059013579327,
            "unit": "iter/sec",
            "range": "stddev: 0.00024106534210871969",
            "extra": "mean: 9.708181636362022 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.626592207105152,
            "unit": "iter/sec",
            "range": "stddev: 0.0008049896517792828",
            "extra": "mean: 614.7822395999924 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2217.3887476881896,
            "unit": "iter/sec",
            "range": "stddev: 0.00008244338819689313",
            "extra": "mean: 450.9809121393722 usec\nrounds: 1252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.46955851041888,
            "unit": "iter/sec",
            "range": "stddev: 0.00047732472689326",
            "extra": "mean: 18.02790623999954 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.28018991813508,
            "unit": "iter/sec",
            "range": "stddev: 0.0007336582501532101",
            "extra": "mean: 10.072502891307769 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.7580538170417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002662724109050977",
            "extra": "mean: 3.6263673396225595 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11389000.136510044,
            "unit": "iter/sec",
            "range": "stddev: 3.395971690914624e-9",
            "extra": "mean: 87.8040203718117 nsec\nrounds: 108684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.66575412399074,
            "unit": "iter/sec",
            "range": "stddev: 0.01895490969940759",
            "extra": "mean: 12.096907729167938 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8496.910754075025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000390311391957574",
            "extra": "mean: 117.68983209814357 usec\nrounds: 4318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5577932.6905958615,
            "unit": "iter/sec",
            "range": "stddev: 8.767895720649e-9",
            "extra": "mean: 179.2778894026815 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.4004482973348,
            "unit": "iter/sec",
            "range": "stddev: 0.00005598809881770945",
            "extra": "mean: 6.1199342499986935 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1597997.9868743336,
            "unit": "iter/sec",
            "range": "stddev: 9.886515101742275e-8",
            "extra": "mean: 625.7830161325728 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1918977.1841241703,
            "unit": "iter/sec",
            "range": "stddev: 8.930560181138333e-8",
            "extra": "mean: 521.1109377813705 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.79304488772706,
            "unit": "iter/sec",
            "range": "stddev: 0.004117021313247067",
            "extra": "mean: 6.297505036867573 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1141.2075181439072,
            "unit": "iter/sec",
            "range": "stddev: 0.000011521058487970135",
            "extra": "mean: 876.2648195890164 usec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8906596226644032,
            "unit": "iter/sec",
            "range": "stddev: 0.00583333808286038",
            "extra": "mean: 1.1227633705999893 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.28948833317907,
            "unit": "iter/sec",
            "range": "stddev: 0.000042010658475083276",
            "extra": "mean: 5.0178261200017005 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.6220453286056,
            "unit": "iter/sec",
            "range": "stddev: 0.00007893139186429291",
            "extra": "mean: 5.273648421348106 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.20351847197399,
            "unit": "iter/sec",
            "range": "stddev: 0.0008289245402004164",
            "extra": "mean: 23.694706891892626 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2105.755209142543,
            "unit": "iter/sec",
            "range": "stddev: 0.00010234636502503861",
            "extra": "mean: 474.88900687900787 usec\nrounds: 1163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.29573942499663,
            "unit": "iter/sec",
            "range": "stddev: 0.0007589328030986116",
            "extra": "mean: 9.872083521740215 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1738.7875315024294,
            "unit": "iter/sec",
            "range": "stddev: 0.000006207137429271065",
            "extra": "mean: 575.1133947549835 usec\nrounds: 1373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 247.82483375816983,
            "unit": "iter/sec",
            "range": "stddev: 0.00038370887051394437",
            "extra": "mean: 4.035108123892906 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.801308921769376,
            "unit": "iter/sec",
            "range": "stddev: 0.0003275691122878149",
            "extra": "mean: 33.55557309999615 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2158.8100550903123,
            "unit": "iter/sec",
            "range": "stddev: 0.00008537124619161251",
            "extra": "mean: 463.2181500369034 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.72945736438568,
            "unit": "iter/sec",
            "range": "stddev: 0.0008511756139164135",
            "extra": "mean: 25.17024058064334 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.35648131801472,
            "unit": "iter/sec",
            "range": "stddev: 0.0008308184908358568",
            "extra": "mean: 10.064768666668613 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 91.98642130867611,
            "unit": "iter/sec",
            "range": "stddev: 0.01657569480530395",
            "extra": "mean: 10.871169741937559 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.45995895657637,
            "unit": "iter/sec",
            "range": "stddev: 0.0008934013201705486",
            "extra": "mean: 10.260624062498872 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7118653.416481037,
            "unit": "iter/sec",
            "range": "stddev: 6.998943812180103e-9",
            "extra": "mean: 140.47600599362346 nsec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2114.1992283507093,
            "unit": "iter/sec",
            "range": "stddev: 0.0001081223082403866",
            "extra": "mean: 472.9923209649933 usec\nrounds: 539"
          }
        ]
      }
    ]
  }
}