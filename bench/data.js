window.BENCHMARK_DATA = {
  "lastUpdate": 1678580793289,
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
          "id": "2586c7f09b42972ee5b8cc412abaa4e84ff0d079",
          "message": "chore(flake/poetry2nix): `391224c4` -> `bf239d53`",
          "timestamp": "2023-03-12T00:21:12Z",
          "tree_id": "1a4b62240730ec15951edb3a37aac640add9b1b7",
          "url": "https://github.com/ibis-project/ibis/commit/2586c7f09b42972ee5b8cc412abaa4e84ff0d079"
        },
        "date": 1678580716319,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.7578681217429,
            "unit": "iter/sec",
            "range": "stddev: 0.0003719237872761039",
            "extra": "mean: 7.366055565215823 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.7926163786535,
            "unit": "iter/sec",
            "range": "stddev: 0.000213633766812061",
            "extra": "mean: 3.302590439488995 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.16376850130763,
            "unit": "iter/sec",
            "range": "stddev: 0.00026327553535917137",
            "extra": "mean: 3.5440411265820106 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5211.457946968875,
            "unit": "iter/sec",
            "range": "stddev: 0.000031906642331953925",
            "extra": "mean: 191.88488330441714 usec\nrounds: 2288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 669.7655186958041,
            "unit": "iter/sec",
            "range": "stddev: 0.003680455231375627",
            "extra": "mean: 1.4930598427151678 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6965479.921362683,
            "unit": "iter/sec",
            "range": "stddev: 4.7730691001439365e-9",
            "extra": "mean: 143.5651256323242 nsec\nrounds: 66663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17288368259470865,
            "unit": "iter/sec",
            "range": "stddev: 0.05917076259295102",
            "extra": "mean: 5.784235880400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1750.8413345932538,
            "unit": "iter/sec",
            "range": "stddev: 0.000007268680745304312",
            "extra": "mean: 571.1539819410962 usec\nrounds: 1329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 669.5918330702027,
            "unit": "iter/sec",
            "range": "stddev: 0.00007456033337288338",
            "extra": "mean: 1.4934471279537782 msec\nrounds: 508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.89139144037453,
            "unit": "iter/sec",
            "range": "stddev: 0.00020931754882043597",
            "extra": "mean: 15.410364576923122 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 107.78589284352681,
            "unit": "iter/sec",
            "range": "stddev: 0.010678382590952126",
            "extra": "mean: 9.277651959999105 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.80813780300178,
            "unit": "iter/sec",
            "range": "stddev: 0.0007684559789337689",
            "extra": "mean: 9.451068894737034 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.520148693389811,
            "unit": "iter/sec",
            "range": "stddev: 0.006394192519296949",
            "extra": "mean: 396.80198340000175 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.550630218118386,
            "unit": "iter/sec",
            "range": "stddev: 0.000824608793460732",
            "extra": "mean: 17.07923546296094 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.78320264895666,
            "unit": "iter/sec",
            "range": "stddev: 0.0006982521821342911",
            "extra": "mean: 9.277883523807873 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.06441524018354,
            "unit": "iter/sec",
            "range": "stddev: 0.00008873568292787359",
            "extra": "mean: 5.074482872928595 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.475831647211194,
            "unit": "iter/sec",
            "range": "stddev: 0.0007510800261918122",
            "extra": "mean: 40.85663010000076 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.7982608531529,
            "unit": "iter/sec",
            "range": "stddev: 0.00021356672773681864",
            "extra": "mean: 3.2175212218207476 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5509.410010620183,
            "unit": "iter/sec",
            "range": "stddev: 0.000050554227114235924",
            "extra": "mean: 181.50763839909456 usec\nrounds: 2948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 315.7216524131196,
            "unit": "iter/sec",
            "range": "stddev: 0.00021298228568627866",
            "extra": "mean: 3.167346909395707 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.95607391509382,
            "unit": "iter/sec",
            "range": "stddev: 0.0007352861157394338",
            "extra": "mean: 8.267464110169106 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.1841352161725,
            "unit": "iter/sec",
            "range": "stddev: 0.00023880577819114857",
            "extra": "mean: 3.1727485246493736 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.019719496704575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906309409045591",
            "extra": "mean: 21.267672600005323 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 117.97326445804308,
            "unit": "iter/sec",
            "range": "stddev: 0.0007988956567855429",
            "extra": "mean: 8.47649681132328 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147240.6124015386,
            "unit": "iter/sec",
            "range": "stddev: 5.353201079943543e-7",
            "extra": "mean: 6.7916044608189265 usec\nrounds: 36497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6159422.344610818,
            "unit": "iter/sec",
            "range": "stddev: 1.1539768326583677e-8",
            "extra": "mean: 162.35288701626015 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.28932205819845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007468705092762011",
            "extra": "mean: 9.588709373735806 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.91917368399673,
            "unit": "iter/sec",
            "range": "stddev: 0.026564843244468013",
            "extra": "mean: 32.34239084848455 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5711.423922629517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000561365701539317",
            "extra": "mean: 175.0876862839493 usec\nrounds: 2056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2691810.8853083053,
            "unit": "iter/sec",
            "range": "stddev: 1.7278405541202878e-8",
            "extra": "mean: 371.4971231666585 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5599066.754670943,
            "unit": "iter/sec",
            "range": "stddev: 1.0732913622676493e-8",
            "extra": "mean: 178.60119263021684 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.53757531655654,
            "unit": "iter/sec",
            "range": "stddev: 0.000624956911118984",
            "extra": "mean: 18.678470104169048 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12099.383676223455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005031933023777688",
            "extra": "mean: 82.64883788792514 usec\nrounds: 4318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.05514478921042,
            "unit": "iter/sec",
            "range": "stddev: 0.0008002344563811521",
            "extra": "mean: 8.39946901724004 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5203.970755378459,
            "unit": "iter/sec",
            "range": "stddev: 0.00007332722279605588",
            "extra": "mean: 192.16095689363166 usec\nrounds: 3039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 789419.9566836777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013957426836811235",
            "extra": "mean: 1.2667528753655541 usec\nrounds: 23474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.26140722815774,
            "unit": "iter/sec",
            "range": "stddev: 0.00006145161258978493",
            "extra": "mean: 3.457080602568044 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7833648439277427,
            "unit": "iter/sec",
            "range": "stddev: 0.002073385109516851",
            "extra": "mean: 560.7377556000074 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 149.94718765855924,
            "unit": "iter/sec",
            "range": "stddev: 0.0035689102555205234",
            "extra": "mean: 6.66901470854574 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.92229848094371,
            "unit": "iter/sec",
            "range": "stddev: 0.0003403289300598334",
            "extra": "mean: 12.206688759259047 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13890.123470369741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020988408956500287",
            "extra": "mean: 71.9936004984541 usec\nrounds: 5622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5768.679951107841,
            "unit": "iter/sec",
            "range": "stddev: 0.00004985646033161363",
            "extra": "mean: 173.34988393799796 usec\nrounds: 2042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.7682006245002,
            "unit": "iter/sec",
            "range": "stddev: 0.00007496535338583334",
            "extra": "mean: 8.349461666667443 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.47461832895938,
            "unit": "iter/sec",
            "range": "stddev: 0.00008411989279169204",
            "extra": "mean: 10.365420639345757 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1845649.8344543981,
            "unit": "iter/sec",
            "range": "stddev: 1.1049647303008307e-7",
            "extra": "mean: 541.8145854820913 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.23187599972306,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745827707093148",
            "extra": "mean: 8.83143541667053 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.1576244596005,
            "unit": "iter/sec",
            "range": "stddev: 0.0006864981185488328",
            "extra": "mean: 8.683749814158585 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.65825333522059,
            "unit": "iter/sec",
            "range": "stddev: 0.00010505802883001362",
            "extra": "mean: 8.876402486238154 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1975997.1651118796,
            "unit": "iter/sec",
            "range": "stddev: 6.904475193928843e-8",
            "extra": "mean: 506.07360053746874 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.0306651179606,
            "unit": "iter/sec",
            "range": "stddev: 0.0002975951998443645",
            "extra": "mean: 3.2464300254555796 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.1537937130418,
            "unit": "iter/sec",
            "range": "stddev: 0.00024662079131871397",
            "extra": "mean: 3.213844793813567 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.3228090673203,
            "unit": "iter/sec",
            "range": "stddev: 0.000033550211291305594",
            "extra": "mean: 3.3976299803909202 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.34157421354338,
            "unit": "iter/sec",
            "range": "stddev: 0.0002077907850806977",
            "extra": "mean: 10.27310281428413 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12791.540080600413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020315517890115604",
            "extra": "mean: 78.17666940016043 usec\nrounds: 5121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.39089216853074,
            "unit": "iter/sec",
            "range": "stddev: 0.00007266421753762945",
            "extra": "mean: 6.273884199999694 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.26700820627225,
            "unit": "iter/sec",
            "range": "stddev: 0.00007805679635348897",
            "extra": "mean: 13.286033599999882 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.00544838447442,
            "unit": "iter/sec",
            "range": "stddev: 0.0007266634298797346",
            "extra": "mean: 9.803397914892196 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.44368364943937,
            "unit": "iter/sec",
            "range": "stddev: 0.0014727550457688029",
            "extra": "mean: 24.725739837841452 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9088260647825613,
            "unit": "iter/sec",
            "range": "stddev: 0.0035728362898108253",
            "extra": "mean: 1.1003205549999848 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.634979940401182,
            "unit": "iter/sec",
            "range": "stddev: 0.0003201782253912487",
            "extra": "mean: 177.46292100000005 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 294.6063026454176,
            "unit": "iter/sec",
            "range": "stddev: 0.0002691222313522287",
            "extra": "mean: 3.394360511029462 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11804340.823321259,
            "unit": "iter/sec",
            "range": "stddev: 3.819685714128478e-9",
            "extra": "mean: 84.71459905866746 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.58552202419386,
            "unit": "iter/sec",
            "range": "stddev: 0.03046087741833215",
            "extra": "mean: 32.69520785713504 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.99761750270287,
            "unit": "iter/sec",
            "range": "stddev: 0.00013763595188574814",
            "extra": "mean: 6.06069357324883 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.91608290092299,
            "unit": "iter/sec",
            "range": "stddev: 0.0006905504135934965",
            "extra": "mean: 9.716654305262445 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.44511480095376,
            "unit": "iter/sec",
            "range": "stddev: 0.000754074597065227",
            "extra": "mean: 9.394512861111028 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.2950991179737,
            "unit": "iter/sec",
            "range": "stddev: 0.00028505130907511704",
            "extra": "mean: 6.317314974197167 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 511597.7360375989,
            "unit": "iter/sec",
            "range": "stddev: 9.598082045202996e-8",
            "extra": "mean: 1.9546607218107526 usec\nrounds: 2075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.67700923531626,
            "unit": "iter/sec",
            "range": "stddev: 0.0008566984522793599",
            "extra": "mean: 8.35582378260923 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.567810326110196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007451111436604952",
            "extra": "mean: 64.23510943750443 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5268.148093700828,
            "unit": "iter/sec",
            "range": "stddev: 0.00005282495745124532",
            "extra": "mean: 189.82002445901415 usec\nrounds: 2494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9116424432995267,
            "unit": "iter/sec",
            "range": "stddev: 0.004343156809392954",
            "extra": "mean: 1.0969212846000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.98285887289214,
            "unit": "iter/sec",
            "range": "stddev: 0.01986769375640276",
            "extra": "mean: 12.989904696201513 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.398943396189,
            "unit": "iter/sec",
            "range": "stddev: 0.000013112155145606292",
            "extra": "mean: 855.1401603765627 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5595.6060249094635,
            "unit": "iter/sec",
            "range": "stddev: 0.00004870127274375125",
            "extra": "mean: 178.71165259819733 usec\nrounds: 2251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5418.168587191562,
            "unit": "iter/sec",
            "range": "stddev: 0.000049941025386818795",
            "extra": "mean: 184.56420908791563 usec\nrounds: 3257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.68583157089672,
            "unit": "iter/sec",
            "range": "stddev: 0.000650949092421412",
            "extra": "mean: 9.738441854167354 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72503.5274279967,
            "unit": "iter/sec",
            "range": "stddev: 4.99209059314112e-7",
            "extra": "mean: 13.79243238879792 usec\nrounds: 14184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5728.607912252946,
            "unit": "iter/sec",
            "range": "stddev: 0.00007121753294523966",
            "extra": "mean: 174.5624792824615 usec\nrounds: 2341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1989307.3366622056,
            "unit": "iter/sec",
            "range": "stddev: 9.656613922295386e-8",
            "extra": "mean: 502.687534284103 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6733619195857646,
            "unit": "iter/sec",
            "range": "stddev: 0.06745852657183633",
            "extra": "mean: 1.485085465799989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 229.91191323418175,
            "unit": "iter/sec",
            "range": "stddev: 0.0035002265722423173",
            "extra": "mean: 4.349491881185941 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.572879529977124,
            "unit": "iter/sec",
            "range": "stddev: 0.0003138175717976955",
            "extra": "mean: 94.58161300000772 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.9640415272522,
            "unit": "iter/sec",
            "range": "stddev: 0.000019445266840376717",
            "extra": "mean: 2.958894666666375 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8476.933017323536,
            "unit": "iter/sec",
            "range": "stddev: 0.000012998662636393818",
            "extra": "mean: 117.9671937900643 usec\nrounds: 3607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.25853391708765,
            "unit": "iter/sec",
            "range": "stddev: 0.00082941703342677",
            "extra": "mean: 8.385144166665944 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8514031909836595,
            "unit": "iter/sec",
            "range": "stddev: 0.00565411306742619",
            "extra": "mean: 1.174531656199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.7391753539961,
            "unit": "iter/sec",
            "range": "stddev: 0.0002653710904358518",
            "extra": "mean: 1.8770911663020036 msec\nrounds: 457"
          }
        ]
      }
    ]
  }
}