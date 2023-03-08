window.BENCHMARK_DATA = {
  "lastUpdate": 1678297574486,
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
          "id": "96ce109bf85162782cc2f3a1fe88f645bb1b8483",
          "message": "feat(tables): cast table using schema",
          "timestamp": "2023-03-08T12:39:32-05:00",
          "tree_id": "3f08bf6af4d0b309b8ffab5588c628a6cab444de",
          "url": "https://github.com/ibis-project/ibis/commit/96ce109bf85162782cc2f3a1fe88f645bb1b8483"
        },
        "date": 1678297469314,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5587.258670607935,
            "unit": "iter/sec",
            "range": "stddev: 0.00013401297166017688",
            "extra": "mean: 178.97864748245004 usec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 628.3487186198413,
            "unit": "iter/sec",
            "range": "stddev: 0.00019400719899748998",
            "extra": "mean: 1.5914729677439072 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09753623854506209,
            "unit": "iter/sec",
            "range": "stddev: 0.154873981144859",
            "extra": "mean: 10.252599597000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 621723.7544827403,
            "unit": "iter/sec",
            "range": "stddev: 0.000006790644275482918",
            "extra": "mean: 1.6084313857880124 usec\nrounds: 25126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5034492023273475,
            "unit": "iter/sec",
            "range": "stddev: 0.032413949433094044",
            "extra": "mean: 1.9862977145999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 218.44067264850244,
            "unit": "iter/sec",
            "range": "stddev: 0.000861906240135869",
            "extra": "mean: 4.577902035712559 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 64.06749405264608,
            "unit": "iter/sec",
            "range": "stddev: 0.017302835894676644",
            "extra": "mean: 15.608539319147889 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 213.572490391713,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362918894522721",
            "extra": "mean: 4.682250968586364 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 189.74349746668395,
            "unit": "iter/sec",
            "range": "stddev: 0.0005391563808739335",
            "extra": "mean: 5.270272833331664 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.36017737198493,
            "unit": "iter/sec",
            "range": "stddev: 0.0010130859362534436",
            "extra": "mean: 9.769424259259745 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5274546080009391,
            "unit": "iter/sec",
            "range": "stddev: 0.024001776124000063",
            "extra": "mean: 1.8958977413999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 121.2571557785689,
            "unit": "iter/sec",
            "range": "stddev: 0.001319978714210729",
            "extra": "mean: 8.246935973214876 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3688.1900412283203,
            "unit": "iter/sec",
            "range": "stddev: 0.00012906927987513332",
            "extra": "mean: 271.13570310139403 usec\nrounds: 1967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.42012453814266,
            "unit": "iter/sec",
            "range": "stddev: 0.00028591674431004686",
            "extra": "mean: 1.9591704008631265 msec\nrounds: 464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3551.912256248434,
            "unit": "iter/sec",
            "range": "stddev: 0.00011301411557070909",
            "extra": "mean: 281.53848627336595 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5172381845797804,
            "unit": "iter/sec",
            "range": "stddev: 0.011124908804645487",
            "extra": "mean: 1.9333452745999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3686.740706047301,
            "unit": "iter/sec",
            "range": "stddev: 0.00009400067773332956",
            "extra": "mean: 271.24229223924436 usec\nrounds: 2036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.58162394472971,
            "unit": "iter/sec",
            "range": "stddev: 0.0017654344018674566",
            "extra": "mean: 11.964352363640039 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9903.697514986769,
            "unit": "iter/sec",
            "range": "stddev: 0.00004015553436012117",
            "extra": "mean: 100.97238919976606 usec\nrounds: 3037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.738867424026301,
            "unit": "iter/sec",
            "range": "stddev: 0.002846451887821685",
            "extra": "mean: 129.2178745555677 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.43959908102973,
            "unit": "iter/sec",
            "range": "stddev: 0.0016322035585767268",
            "extra": "mean: 13.08222455405543 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 87.22001904751795,
            "unit": "iter/sec",
            "range": "stddev: 0.0016300883882311747",
            "extra": "mean: 11.465257757570479 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.53475145122137,
            "unit": "iter/sec",
            "range": "stddev: 0.0011224621325374095",
            "extra": "mean: 11.556050987951219 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 219.31528810605528,
            "unit": "iter/sec",
            "range": "stddev: 0.0007375832657643839",
            "extra": "mean: 4.559645652775585 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.57029615450654,
            "unit": "iter/sec",
            "range": "stddev: 0.0005049471109009223",
            "extra": "mean: 6.730820533332209 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 178.2085724128452,
            "unit": "iter/sec",
            "range": "stddev: 0.01235729324786197",
            "extra": "mean: 5.611402338622407 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.35764189373715,
            "unit": "iter/sec",
            "range": "stddev: 0.0009899307886577198",
            "extra": "mean: 13.631844947368384 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4872999.955359065,
            "unit": "iter/sec",
            "range": "stddev: 4.4689460957771553e-7",
            "extra": "mean: 205.21239670869195 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3696.489856852797,
            "unit": "iter/sec",
            "range": "stddev: 0.00019647844521113988",
            "extra": "mean: 270.52691572956275 usec\nrounds: 356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 220.8814303542819,
            "unit": "iter/sec",
            "range": "stddev: 0.0005884495096344831",
            "extra": "mean: 4.5273158472219865 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3903.4567477016863,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214836970911906",
            "extra": "mean: 256.18318957646693 usec\nrounds: 1746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.13462300084755,
            "unit": "iter/sec",
            "range": "stddev: 0.001428622037434567",
            "extra": "mean: 12.47900049382429 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.16310622431395,
            "unit": "iter/sec",
            "range": "stddev: 0.0028658892573930907",
            "extra": "mean: 25.534236081078824 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1639136.6977906215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017402338679366183",
            "extra": "mean: 610.0772445323757 nsec\nrounds: 163908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 240.53252005732827,
            "unit": "iter/sec",
            "range": "stddev: 0.0005202090789697462",
            "extra": "mean: 4.157441994794138 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 91.36121999334627,
            "unit": "iter/sec",
            "range": "stddev: 0.001096121181535235",
            "extra": "mean: 10.945563118277414 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 63.42615829884241,
            "unit": "iter/sec",
            "range": "stddev: 0.024026126096510256",
            "extra": "mean: 15.766365594591766 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 173.61083312488998,
            "unit": "iter/sec",
            "range": "stddev: 0.004783409897275813",
            "extra": "mean: 5.760009222930418 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1356287.3802319504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025850334446577393",
            "extra": "mean: 737.3068676853584 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.038931368643905,
            "unit": "iter/sec",
            "range": "stddev: 0.0022301984218684088",
            "extra": "mean: 35.664697304345395 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9749.198826403644,
            "unit": "iter/sec",
            "range": "stddev: 0.00008655627819452918",
            "extra": "mean: 102.5725311183224 usec\nrounds: 4515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.1309539540882,
            "unit": "iter/sec",
            "range": "stddev: 0.000882996485078614",
            "extra": "mean: 4.8278636336588105 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.940542950276104,
            "unit": "iter/sec",
            "range": "stddev: 0.0018068761201753176",
            "extra": "mean: 15.639529379311938 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.70290515133108,
            "unit": "iter/sec",
            "range": "stddev: 0.0019134569766212587",
            "extra": "mean: 13.209532685713807 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3297.1498176543228,
            "unit": "iter/sec",
            "range": "stddev: 0.00019428845267080766",
            "extra": "mean: 303.2922540084714 usec\nrounds: 2744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7637794588521603,
            "unit": "iter/sec",
            "range": "stddev: 0.023695453506349898",
            "extra": "mean: 566.9643078000149 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.73102729557918,
            "unit": "iter/sec",
            "range": "stddev: 0.0014785562304995504",
            "extra": "mean: 11.270014903229038 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8935251.15802092,
            "unit": "iter/sec",
            "range": "stddev: 1.5559538911912446e-7",
            "extra": "mean: 111.91627211307974 nsec\nrounds: 38609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1534164.4655553808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016823401770324173",
            "extra": "mean: 651.8205984115212 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.01013658435366,
            "unit": "iter/sec",
            "range": "stddev: 0.0038110967677638607",
            "extra": "mean: 7.691707941181773 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.00171970912021,
            "unit": "iter/sec",
            "range": "stddev: 0.0015398324821220485",
            "extra": "mean: 19.230133264700807 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5007852.869173567,
            "unit": "iter/sec",
            "range": "stddev: 9.495229415974945e-7",
            "extra": "mean: 199.6863777996112 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 53.40622597146701,
            "unit": "iter/sec",
            "range": "stddev: 0.001802039532516492",
            "extra": "mean: 18.72440865853849 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 198.66508513931484,
            "unit": "iter/sec",
            "range": "stddev: 0.0008576023720611913",
            "extra": "mean: 5.03359711797745 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3480.9411293669045,
            "unit": "iter/sec",
            "range": "stddev: 0.00009348055753882321",
            "extra": "mean: 287.278630357611 usec\nrounds: 1983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.31737350493462,
            "unit": "iter/sec",
            "range": "stddev: 0.0012814344062788638",
            "extra": "mean: 32.984387642855495 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 20.64824302881056,
            "unit": "iter/sec",
            "range": "stddev: 0.05320077300958188",
            "extra": "mean: 48.43027073076856 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.0874545430293745,
            "unit": "iter/sec",
            "range": "stddev: 0.01047541296975589",
            "extra": "mean: 244.65103880002061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2002572.411666614,
            "unit": "iter/sec",
            "range": "stddev: 0.000001289263636061765",
            "extra": "mean: 499.3577231835928 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3327.3343038111298,
            "unit": "iter/sec",
            "range": "stddev: 0.00015232367145884718",
            "extra": "mean: 300.540886094493 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.40990383179073,
            "unit": "iter/sec",
            "range": "stddev: 0.00152757947961968",
            "extra": "mean: 14.202547448282278 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 367.54763290951394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005052285880305383",
            "extra": "mean: 2.720735791668637 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.6109750286318,
            "unit": "iter/sec",
            "range": "stddev: 0.0018882679531730129",
            "extra": "mean: 14.365550828568171 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3983672.164475194,
            "unit": "iter/sec",
            "range": "stddev: 3.638204250368515e-7",
            "extra": "mean: 251.02467239089987 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.413300554511302,
            "unit": "iter/sec",
            "range": "stddev: 0.003045590785518175",
            "extra": "mean: 54.30856880001329 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 86.21786121451274,
            "unit": "iter/sec",
            "range": "stddev: 0.001606635451582875",
            "extra": "mean: 11.598524782608198 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.479208249620363,
            "unit": "iter/sec",
            "range": "stddev: 0.003812397974449709",
            "extra": "mean: 87.11402199999914 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8562.712414203135,
            "unit": "iter/sec",
            "range": "stddev: 0.00004792226560432499",
            "extra": "mean: 116.78542401368996 usec\nrounds: 4106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390397.6582457809,
            "unit": "iter/sec",
            "range": "stddev: 0.000002373543619030987",
            "extra": "mean: 2.5614907745436177 usec\nrounds: 1355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.23653772227491,
            "unit": "iter/sec",
            "range": "stddev: 0.00203577353887968",
            "extra": "mean: 20.731172824997657 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 113.99316848457973,
            "unit": "iter/sec",
            "range": "stddev: 0.0009254637068520219",
            "extra": "mean: 8.77245551899256 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1242.1905358073677,
            "unit": "iter/sec",
            "range": "stddev: 0.0003895567511354838",
            "extra": "mean: 805.0294791129166 usec\nrounds: 766"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 121.88384191414795,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480261093512173",
            "extra": "mean: 8.204532974144152 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.684560434273138,
            "unit": "iter/sec",
            "range": "stddev: 0.003488287116835072",
            "extra": "mean: 36.121216458326444 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.115083380318507,
            "unit": "iter/sec",
            "range": "stddev: 0.02119491036287898",
            "extra": "mean: 896.7939237999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.64469209060222,
            "unit": "iter/sec",
            "range": "stddev: 0.0014217897177486475",
            "extra": "mean: 14.567768745763006 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119820.46611274523,
            "unit": "iter/sec",
            "range": "stddev: 0.00001337759942326384",
            "extra": "mean: 8.345819645360491 usec\nrounds: 37454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 846.8494348602734,
            "unit": "iter/sec",
            "range": "stddev: 0.00022240863101070243",
            "extra": "mean: 1.1808474550909935 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54618.114097294514,
            "unit": "iter/sec",
            "range": "stddev: 0.000028533436265495917",
            "extra": "mean: 18.30894413927658 usec\nrounds: 9470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.79125468294538,
            "unit": "iter/sec",
            "range": "stddev: 0.0017454599890266342",
            "extra": "mean: 11.26237041666757 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5410300401891752,
            "unit": "iter/sec",
            "range": "stddev: 0.0463137274208844",
            "extra": "mean: 1.848326203199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 256.02820796398646,
            "unit": "iter/sec",
            "range": "stddev: 0.0004340307635696858",
            "extra": "mean: 3.905819628049197 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.02961142789505,
            "unit": "iter/sec",
            "range": "stddev: 0.0015748052154506693",
            "extra": "mean: 11.900566752686817 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3342.4227807941234,
            "unit": "iter/sec",
            "range": "stddev: 0.00015713422777868688",
            "extra": "mean: 299.1841743498442 usec\nrounds: 2885"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 65.10385382815072,
            "unit": "iter/sec",
            "range": "stddev: 0.03102551459121542",
            "extra": "mean: 15.360073808220594 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.45076777925742,
            "unit": "iter/sec",
            "range": "stddev: 0.001327273191389333",
            "extra": "mean: 11.983113236839035 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.25384031190558,
            "unit": "iter/sec",
            "range": "stddev: 0.0014509719140063625",
            "extra": "mean: 11.079860940477763 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 206.10760470757077,
            "unit": "iter/sec",
            "range": "stddev: 0.0009560842087335679",
            "extra": "mean: 4.851834561945535 msec\nrounds: 226"
          }
        ]
      }
    ]
  }
}