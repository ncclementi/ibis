window.BENCHMARK_DATA = {
  "lastUpdate": 1678815581169,
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
          "id": "3f918deec3d90be8df22999f2a0bc1c2a11afc19",
          "message": "chore(clickhouse): remove unused `_table_command` method",
          "timestamp": "2023-03-14T13:34:28-04:00",
          "tree_id": "96feac1c0a8f9da0edc11e1d9b4f1b2f294031f9",
          "url": "https://github.com/ibis-project/ibis/commit/3f918deec3d90be8df22999f2a0bc1c2a11afc19"
        },
        "date": 1678815494923,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5218.402556589994,
            "unit": "iter/sec",
            "range": "stddev: 0.00004674035916071153",
            "extra": "mean: 191.6295243909772 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 270.63357267917655,
            "unit": "iter/sec",
            "range": "stddev: 0.005055092127287769",
            "extra": "mean: 3.695033066667798 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.353211456190808,
            "unit": "iter/sec",
            "range": "stddev: 0.00027539496751887056",
            "extra": "mean: 96.5883875000003 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.6669287803005,
            "unit": "iter/sec",
            "range": "stddev: 0.000034313613830325885",
            "extra": "mean: 3.070621888888859 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9281497708862928,
            "unit": "iter/sec",
            "range": "stddev: 0.0027888259828121593",
            "extra": "mean: 1.0774123222000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1868399.065214386,
            "unit": "iter/sec",
            "range": "stddev: 1.4086223372286205e-7",
            "extra": "mean: 535.2175659996152 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8566143969875823,
            "unit": "iter/sec",
            "range": "stddev: 0.002417053121773891",
            "extra": "mean: 1.1673864034000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 290.35424669863323,
            "unit": "iter/sec",
            "range": "stddev: 0.003430042077367382",
            "extra": "mean: 3.4440687931040586 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5351.171306057537,
            "unit": "iter/sec",
            "range": "stddev: 0.000020301917574141903",
            "extra": "mean: 186.87497424498406 usec\nrounds: 1359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.8596083289858,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653318163791115",
            "extra": "mean: 7.2015182242974705 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.33253049945705,
            "unit": "iter/sec",
            "range": "stddev: 0.0001931286876511189",
            "extra": "mean: 3.232767010910141 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11681.321545133198,
            "unit": "iter/sec",
            "range": "stddev: 0.000014104997015156213",
            "extra": "mean: 85.6067522956451 usec\nrounds: 4465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5567.896321836391,
            "unit": "iter/sec",
            "range": "stddev: 0.00004550212973105685",
            "extra": "mean: 179.60104538551866 usec\nrounds: 661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.00490370871966,
            "unit": "iter/sec",
            "range": "stddev: 0.00026170957421728076",
            "extra": "mean: 20.40612110869357 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.58016444502634,
            "unit": "iter/sec",
            "range": "stddev: 0.0023928304017476836",
            "extra": "mean: 387.5721960000078 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 110.02061073037959,
            "unit": "iter/sec",
            "range": "stddev: 0.0073442461002961685",
            "extra": "mean: 9.089206043862413 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.80811987135405,
            "unit": "iter/sec",
            "range": "stddev: 0.00017500943591020903",
            "extra": "mean: 3.313363472216224 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5652.974459449563,
            "unit": "iter/sec",
            "range": "stddev: 0.00004222776763692452",
            "extra": "mean: 176.89802194814288 usec\nrounds: 2187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.23931788294072,
            "unit": "iter/sec",
            "range": "stddev: 0.004210689786020326",
            "extra": "mean: 5.874083686634693 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.6592194509853,
            "unit": "iter/sec",
            "range": "stddev: 0.000053097349193068385",
            "extra": "mean: 1.842777131865025 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 734.5309328046399,
            "unit": "iter/sec",
            "range": "stddev: 0.000026088447784426083",
            "extra": "mean: 1.3614130533369462 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1671996.8139259256,
            "unit": "iter/sec",
            "range": "stddev: 1.4205056358346844e-7",
            "extra": "mean: 598.0872640851234 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 357.8759708495513,
            "unit": "iter/sec",
            "range": "stddev: 0.000053238300046617225",
            "extra": "mean: 2.7942641625983695 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.4531245712054,
            "unit": "iter/sec",
            "range": "stddev: 0.00010767038975824852",
            "extra": "mean: 8.514034885412988 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1746.3604121348155,
            "unit": "iter/sec",
            "range": "stddev: 0.000005425641856770329",
            "extra": "mean: 572.6194851024841 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.1547769317367,
            "unit": "iter/sec",
            "range": "stddev: 0.00004451256678963212",
            "extra": "mean: 3.411167337835527 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.58262147966327,
            "unit": "iter/sec",
            "range": "stddev: 0.010066064922492174",
            "extra": "mean: 10.462152894736894 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.97967450971882,
            "unit": "iter/sec",
            "range": "stddev: 0.0005810672396775815",
            "extra": "mean: 8.404796904351215 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5709.772126065053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000622174065764723",
            "extra": "mean: 175.13833790932037 usec\nrounds: 2841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.88604347285231,
            "unit": "iter/sec",
            "range": "stddev: 0.0004668405522583461",
            "extra": "mean: 15.177721218182423 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12382159.385836855,
            "unit": "iter/sec",
            "range": "stddev: 5.041685218252691e-9",
            "extra": "mean: 80.76135743674509 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5691.783006215177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000638453131576148",
            "extra": "mean: 175.6918700006736 usec\nrounds: 2500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71242.5462872224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016587291377025605",
            "extra": "mean: 14.036556132741056 usec\nrounds: 13477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.45638012249515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776423701775385",
            "extra": "mean: 9.954569324323787 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 100.5351922740385,
            "unit": "iter/sec",
            "range": "stddev: 0.011251837200160314",
            "extra": "mean: 9.946765678571571 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139623.94789784143,
            "unit": "iter/sec",
            "range": "stddev: 3.464156768801063e-7",
            "extra": "mean: 7.162095149548912 usec\nrounds: 38760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.9904491489575,
            "unit": "iter/sec",
            "range": "stddev: 0.00017978645073428033",
            "extra": "mean: 9.091698485981482 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.99457937635715,
            "unit": "iter/sec",
            "range": "stddev: 0.000614234086082732",
            "extra": "mean: 9.70924883673591 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 117.85561080744012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006656219651842515",
            "extra": "mean: 8.484958782606139 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2522998.099456282,
            "unit": "iter/sec",
            "range": "stddev: 1.6596481823154698e-8",
            "extra": "mean: 396.35384593251666 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6445568.130195122,
            "unit": "iter/sec",
            "range": "stddev: 8.516173225355986e-9",
            "extra": "mean: 155.14536186738403 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4899.872672554615,
            "unit": "iter/sec",
            "range": "stddev: 0.00024136039643468083",
            "extra": "mean: 204.08693589146606 usec\nrounds: 2215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7341229.539367091,
            "unit": "iter/sec",
            "range": "stddev: 4.996795449253146e-9",
            "extra": "mean: 136.21696401639417 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5226.88485879889,
            "unit": "iter/sec",
            "range": "stddev: 0.00005257915373184541",
            "extra": "mean: 191.31854383909172 usec\nrounds: 2532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.09885836482084,
            "unit": "iter/sec",
            "range": "stddev: 0.00007758207494807377",
            "extra": "mean: 10.515373340905658 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9208355382034336,
            "unit": "iter/sec",
            "range": "stddev: 0.003265317794271048",
            "extra": "mean: 1.0859702503999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5865345.641844972,
            "unit": "iter/sec",
            "range": "stddev: 9.708820144255364e-9",
            "extra": "mean: 170.4929361474027 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.06316138079612,
            "unit": "iter/sec",
            "range": "stddev: 0.00010886012540265336",
            "extra": "mean: 6.619747600007031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.1450235252855,
            "unit": "iter/sec",
            "range": "stddev: 0.0006568272399068642",
            "extra": "mean: 8.464173692309428 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.6709905832718,
            "unit": "iter/sec",
            "range": "stddev: 0.00009638283229851186",
            "extra": "mean: 1.4626918704666014 msec\nrounds: 579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2484977.4877934046,
            "unit": "iter/sec",
            "range": "stddev: 1.7725703070705087e-8",
            "extra": "mean: 402.41813252316547 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.43405428128634,
            "unit": "iter/sec",
            "range": "stddev: 0.00011289665885408298",
            "extra": "mean: 9.222195062502436 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.30674348260456,
            "unit": "iter/sec",
            "range": "stddev: 0.00017654616411180344",
            "extra": "mean: 13.641309823526626 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 731452.6507910237,
            "unit": "iter/sec",
            "range": "stddev: 2.71044095122687e-7",
            "extra": "mean: 1.3671424922974273 usec\nrounds: 25840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 118.34965742902901,
            "unit": "iter/sec",
            "range": "stddev: 0.000656365768612531",
            "extra": "mean: 8.44953861061805 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.85356319292305,
            "unit": "iter/sec",
            "range": "stddev: 0.0001090393562219253",
            "extra": "mean: 5.212308717948728 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7968.934393897126,
            "unit": "iter/sec",
            "range": "stddev: 0.000012779552730030988",
            "extra": "mean: 125.48729234938024 usec\nrounds: 4026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1797519466628826,
            "unit": "iter/sec",
            "range": "stddev: 0.12550039071235325",
            "extra": "mean: 5.563222087800023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.65538830766549,
            "unit": "iter/sec",
            "range": "stddev: 0.0006123585495969911",
            "extra": "mean: 8.427767286952589 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11807.502235612135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023860512308458427",
            "extra": "mean: 84.69191705794812 usec\nrounds: 5956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.60038003254286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006873567863182141",
            "extra": "mean: 10.916985275003555 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.2399277126336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002538493813527431",
            "extra": "mean: 3.3756421955721185 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.1028387675002,
            "unit": "iter/sec",
            "range": "stddev: 0.0005750703423924068",
            "extra": "mean: 9.514490871289567 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 257.8989829522538,
            "unit": "iter/sec",
            "range": "stddev: 0.003703529840552878",
            "extra": "mean: 3.8774871794866104 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.65655810657225,
            "unit": "iter/sec",
            "range": "stddev: 0.00007841021174523557",
            "extra": "mean: 6.147923032680933 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6728705168626739,
            "unit": "iter/sec",
            "range": "stddev: 0.0022680209763116864",
            "extra": "mean: 1.4861700356000143 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5799.252414716577,
            "unit": "iter/sec",
            "range": "stddev: 0.000042299098694554634",
            "extra": "mean: 172.436019074171 usec\nrounds: 2464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.590428164645227,
            "unit": "iter/sec",
            "range": "stddev: 0.00013075194603136124",
            "extra": "mean: 64.14192024999821 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.1188152063804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002542951208272805",
            "extra": "mean: 3.5446058401615748 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.027901573850954,
            "unit": "iter/sec",
            "range": "stddev: 0.0006343507334281902",
            "extra": "mean: 22.208452205126296 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.85200168990826,
            "unit": "iter/sec",
            "range": "stddev: 0.00015862838489305359",
            "extra": "mean: 13.917496749995925 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.0329293069435,
            "unit": "iter/sec",
            "range": "stddev: 0.0005883724070476045",
            "extra": "mean: 9.897763104165236 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.101838130702,
            "unit": "iter/sec",
            "range": "stddev: 0.000012220797444503024",
            "extra": "mean: 853.1681868145738 usec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.25150558155832,
            "unit": "iter/sec",
            "range": "stddev: 0.013978590137814134",
            "extra": "mean: 11.461120279067854 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.49443645592685,
            "unit": "iter/sec",
            "range": "stddev: 0.0007344349417109524",
            "extra": "mean: 26.67062355172236 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.14522397641358,
            "unit": "iter/sec",
            "range": "stddev: 0.000645733778621803",
            "extra": "mean: 9.51065547422603 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.09512050156714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282561010562197",
            "extra": "mean: 17.213149596152824 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.85017217471835,
            "unit": "iter/sec",
            "range": "stddev: 0.00009308311394818566",
            "extra": "mean: 10.116320265305083 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.160306292085924,
            "unit": "iter/sec",
            "range": "stddev: 0.00043071778200541756",
            "extra": "mean: 36.81843603845454 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 307.48405315944603,
            "unit": "iter/sec",
            "range": "stddev: 0.00021071651633492152",
            "extra": "mean: 3.252201178320781 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.438914597439745,
            "unit": "iter/sec",
            "range": "stddev: 0.0007631065139087091",
            "extra": "mean: 183.86021366666228 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13216.937313065868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026219789383740943",
            "extra": "mean: 75.6604935253366 usec\nrounds: 6873"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498258.453866749,
            "unit": "iter/sec",
            "range": "stddev: 3.722575048572168e-7",
            "extra": "mean: 2.0069905332051494 usec\nrounds: 2007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.443634055590337,
            "unit": "iter/sec",
            "range": "stddev: 0.028070404050578326",
            "extra": "mean: 32.847589685712 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.097248960141,
            "unit": "iter/sec",
            "range": "stddev: 0.000238017577140373",
            "extra": "mean: 3.2992711198494105 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7787875016806378,
            "unit": "iter/sec",
            "range": "stddev: 0.0016426740995016797",
            "extra": "mean: 562.1806983999932 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.13551856876032,
            "unit": "iter/sec",
            "range": "stddev: 0.00010858636263148755",
            "extra": "mean: 6.363933559441648 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.32697202897904,
            "unit": "iter/sec",
            "range": "stddev: 0.0006327242202576391",
            "extra": "mean: 8.982549168225777 msec\nrounds: 107"
          }
        ]
      }
    ]
  }
}