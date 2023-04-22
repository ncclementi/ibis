window.BENCHMARK_DATA = {
  "lastUpdate": 1682170854327,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "cd67684641fe80a8fdf59f3258f623232b7639bc",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.8",
          "timestamp": "2023-04-22T09:34:09-04:00",
          "tree_id": "bf9aa35fe2ce99c75976a78e2128d87d4e82e9ed",
          "url": "https://github.com/ibis-project/ibis/commit/cd67684641fe80a8fdf59f3258f623232b7639bc"
        },
        "date": 1682170775147,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1919281.5081009762,
            "unit": "iter/sec",
            "range": "stddev: 1.0302831793961481e-7",
            "extra": "mean: 521.0283096977499 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 78.69337178158598,
            "unit": "iter/sec",
            "range": "stddev: 0.013263380899280202",
            "extra": "mean: 12.707550551722543 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9379994788013245,
            "unit": "iter/sec",
            "range": "stddev: 0.0043622455617393805",
            "extra": "mean: 1.0660986734000175 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.20042344390066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007498097953651182",
            "extra": "mean: 9.881381578945062 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.59589198159709,
            "unit": "iter/sec",
            "range": "stddev: 0.01107206646722722",
            "extra": "mean: 11.547891904762812 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8339.827885256802,
            "unit": "iter/sec",
            "range": "stddev: 0.000014758454445203834",
            "extra": "mean: 119.90655128120882 usec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2157.9877640629297,
            "unit": "iter/sec",
            "range": "stddev: 0.00008441702856560145",
            "extra": "mean: 463.3946571213453 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1721526.6256466536,
            "unit": "iter/sec",
            "range": "stddev: 8.43372570727894e-8",
            "extra": "mean: 580.8797756028735 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 106.4550716456753,
            "unit": "iter/sec",
            "range": "stddev: 0.00007062341301924439",
            "extra": "mean: 9.393634183333196 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 636.8892008053332,
            "unit": "iter/sec",
            "range": "stddev: 0.01066828332285757",
            "extra": "mean: 1.5701318200018477 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.2285225792464,
            "unit": "iter/sec",
            "range": "stddev: 0.000030608946894074016",
            "extra": "mean: 1.3311528648654456 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.67717586178699,
            "unit": "iter/sec",
            "range": "stddev: 0.0007346651376471631",
            "extra": "mean: 9.932737896549995 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1771.9924573048356,
            "unit": "iter/sec",
            "range": "stddev: 0.000014799634150330351",
            "extra": "mean: 564.3364879334642 usec\nrounds: 1326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.651871410027317,
            "unit": "iter/sec",
            "range": "stddev: 0.0003988581764485758",
            "extra": "mean: 85.82312358334339 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17424778958558063,
            "unit": "iter/sec",
            "range": "stddev: 0.1111647861006146",
            "extra": "mean: 5.73895371860001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.00316605130955,
            "unit": "iter/sec",
            "range": "stddev: 0.00012413000140532623",
            "extra": "mean: 62.487635058824466 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 76190.89382367845,
            "unit": "iter/sec",
            "range": "stddev: 4.990835983654009e-7",
            "extra": "mean: 13.124928056549749 usec\nrounds: 14706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.72156649301223,
            "unit": "iter/sec",
            "range": "stddev: 0.01350272776611495",
            "extra": "mean: 11.399705226190397 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.359266546787445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007406680934413752",
            "extra": "mean: 23.063120750000127 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.87048052655575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002505554598603651",
            "extra": "mean: 3.5351868393567507 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6205357416163373,
            "unit": "iter/sec",
            "range": "stddev: 0.0021853007535646827",
            "extra": "mean: 617.0798794000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.81248698759547,
            "unit": "iter/sec",
            "range": "stddev: 0.0002828003595260622",
            "extra": "mean: 17.60176420754722 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7147670987968026,
            "unit": "iter/sec",
            "range": "stddev: 0.0741572821516513",
            "extra": "mean: 1.3990571218000127 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2241.5850982477364,
            "unit": "iter/sec",
            "range": "stddev: 0.000081851253316293",
            "extra": "mean: 446.11288716261873 usec\nrounds: 1480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.9858361658217,
            "unit": "iter/sec",
            "range": "stddev: 0.00003097855621386932",
            "extra": "mean: 7.519597792001605 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.98157781161606,
            "unit": "iter/sec",
            "range": "stddev: 0.00013515574235850833",
            "extra": "mean: 9.902796348315409 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2152.8546017465196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000822779481321254",
            "extra": "mean: 464.49955291395077 usec\nrounds: 1304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2741462.5349805583,
            "unit": "iter/sec",
            "range": "stddev: 1.4444113605300173e-8",
            "extra": "mean: 364.7688003170575 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.025817162903272,
            "unit": "iter/sec",
            "range": "stddev: 0.0002126322523661446",
            "extra": "mean: 165.95259580000175 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 166.1965189687917,
            "unit": "iter/sec",
            "range": "stddev: 0.00004439712466667392",
            "extra": "mean: 6.016973196579283 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.1661156312788,
            "unit": "iter/sec",
            "range": "stddev: 0.0003372970065784383",
            "extra": "mean: 3.8436980833324697 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.94583842611111,
            "unit": "iter/sec",
            "range": "stddev: 0.013981120317618447",
            "extra": "mean: 11.772207073685374 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7799041576591671,
            "unit": "iter/sec",
            "range": "stddev: 0.0020170808606184035",
            "extra": "mean: 1.2822088332000134 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.54908859480055,
            "unit": "iter/sec",
            "range": "stddev: 0.000717187163972211",
            "extra": "mean: 10.357425580647613 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5561103.1310386425,
            "unit": "iter/sec",
            "range": "stddev: 8.316038712767442e-9",
            "extra": "mean: 179.82043785855646 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.892194180726754,
            "unit": "iter/sec",
            "range": "stddev: 0.0003015679554169036",
            "extra": "mean: 20.453162652172377 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.97502261090472,
            "unit": "iter/sec",
            "range": "stddev: 0.00039245703248032526",
            "extra": "mean: 38.49852279166773 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.71192478598677,
            "unit": "iter/sec",
            "range": "stddev: 0.000791362322626438",
            "extra": "mean: 9.929310775511478 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4554.969286713862,
            "unit": "iter/sec",
            "range": "stddev: 0.000058251147864078615",
            "extra": "mean: 219.54044847609504 usec\nrounds: 2067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 280.1361968138616,
            "unit": "iter/sec",
            "range": "stddev: 0.00024169233271183457",
            "extra": "mean: 3.5696922117653247 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.8443539477116,
            "unit": "iter/sec",
            "range": "stddev: 0.0008381801654035982",
            "extra": "mean: 10.01558886868755 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.137391783347255,
            "unit": "iter/sec",
            "range": "stddev: 0.030071894581478433",
            "extra": "mean: 27.672168650002504 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.45404446564407,
            "unit": "iter/sec",
            "range": "stddev: 0.0007002363126545945",
            "extra": "mean: 10.367631606740861 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.113308651729895,
            "unit": "iter/sec",
            "range": "stddev: 0.00017229002638565074",
            "extra": "mean: 18.82767286363415 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 308.1074786799071,
            "unit": "iter/sec",
            "range": "stddev: 0.00014970034017497365",
            "extra": "mean: 3.24562066550452 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.9654391048715,
            "unit": "iter/sec",
            "range": "stddev: 0.000033954535776114074",
            "extra": "mean: 1.455677306420274 msec\nrounds: 545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.51541446014113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004167256519978101",
            "extra": "mean: 6.078457774194042 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12554.957833315982,
            "unit": "iter/sec",
            "range": "stddev: 0.000011742961826848922",
            "extra": "mean: 79.64980952356433 usec\nrounds: 5754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7152621.866743106,
            "unit": "iter/sec",
            "range": "stddev: 4.625358607593952e-9",
            "extra": "mean: 139.80887269460712 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9426680750886935,
            "unit": "iter/sec",
            "range": "stddev: 0.005165254404326284",
            "extra": "mean: 1.0608187827999926 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13945.049865422257,
            "unit": "iter/sec",
            "range": "stddev: 0.000001344068817004131",
            "extra": "mean: 71.71003400135349 usec\nrounds: 6235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 71.69224350470705,
            "unit": "iter/sec",
            "range": "stddev: 0.021811134094042423",
            "extra": "mean: 13.948510342466038 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.06727960275659,
            "unit": "iter/sec",
            "range": "stddev: 0.0001405683301610224",
            "extra": "mean: 8.328663756757933 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495236.41624066513,
            "unit": "iter/sec",
            "range": "stddev: 3.083490589166191e-7",
            "extra": "mean: 2.0192376150182785 usec\nrounds: 2180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10446.835366732439,
            "unit": "iter/sec",
            "range": "stddev: 0.000001763975408789833",
            "extra": "mean: 95.72276817766873 usec\nrounds: 6354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 113.10758371406142,
            "unit": "iter/sec",
            "range": "stddev: 0.00010729109553545546",
            "extra": "mean: 8.841140153148556 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.85052991687287,
            "unit": "iter/sec",
            "range": "stddev: 0.0007780645412748794",
            "extra": "mean: 10.432910499996796 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.3499628025779,
            "unit": "iter/sec",
            "range": "stddev: 0.0003104080789175785",
            "extra": "mean: 3.6717464166678946 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.49776056932616,
            "unit": "iter/sec",
            "range": "stddev: 0.0007290037860166486",
            "extra": "mean: 9.950470481480751 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 206.23156057196732,
            "unit": "iter/sec",
            "range": "stddev: 0.000022311465175435732",
            "extra": "mean: 4.8489183577265145 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2187.992499672105,
            "unit": "iter/sec",
            "range": "stddev: 0.00008082066209490771",
            "extra": "mean: 457.0399579294084 usec\nrounds: 1236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.84071855562007,
            "unit": "iter/sec",
            "range": "stddev: 0.0007865480442790448",
            "extra": "mean: 9.916629059405565 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.6587660616207,
            "unit": "iter/sec",
            "range": "stddev: 0.0007450683614704495",
            "extra": "mean: 10.135946757892917 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11558406.885198677,
            "unit": "iter/sec",
            "range": "stddev: 3.6244311254264923e-9",
            "extra": "mean: 86.51711346834459 nsec\nrounds: 114719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1957499.8301922705,
            "unit": "iter/sec",
            "range": "stddev: 8.355025393742033e-8",
            "extra": "mean: 510.85572758480276 nsec\nrounds: 96900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.93654369778216,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942360339533448",
            "extra": "mean: 3.7602955430466465 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.43026348824094,
            "unit": "iter/sec",
            "range": "stddev: 0.00006769230386446715",
            "extra": "mean: 6.08160553164542 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 231.92913167416236,
            "unit": "iter/sec",
            "range": "stddev: 0.004113012759035701",
            "extra": "mean: 4.311661897673561 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2069.389157359198,
            "unit": "iter/sec",
            "range": "stddev: 0.00009272883156633426",
            "extra": "mean: 483.23438655498046 usec\nrounds: 1190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.09415623282132,
            "unit": "iter/sec",
            "range": "stddev: 0.0042170941949593345",
            "extra": "mean: 6.1314275330164065 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.553814205615,
            "unit": "iter/sec",
            "range": "stddev: 0.00027220689820082653",
            "extra": "mean: 3.5391488266100626 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.09910948462855,
            "unit": "iter/sec",
            "range": "stddev: 0.000616712705421574",
            "extra": "mean: 24.33142743333671 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2172.143889347151,
            "unit": "iter/sec",
            "range": "stddev: 0.00009222129986954919",
            "extra": "mean: 460.3746579148379 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2120.496180479765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000924218623903178",
            "extra": "mean: 471.58773932511815 usec\nrounds: 1780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.8142370620592,
            "unit": "iter/sec",
            "range": "stddev: 0.023692269444606166",
            "extra": "mean: 12.688062934779014 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.3898239515966,
            "unit": "iter/sec",
            "range": "stddev: 0.0006321478719769172",
            "extra": "mean: 13.264389642852084 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1190.6240189489135,
            "unit": "iter/sec",
            "range": "stddev: 0.000010359734023334912",
            "extra": "mean: 839.8957051805513 usec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.578992538878131,
            "unit": "iter/sec",
            "range": "stddev: 0.0029073883802960936",
            "extra": "mean: 387.74831059999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6139154.978091484,
            "unit": "iter/sec",
            "range": "stddev: 7.928120806113294e-9",
            "extra": "mean: 162.88886720846736 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.40154582457336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002368527655214201",
            "extra": "mean: 3.644294338776453 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147951.317643481,
            "unit": "iter/sec",
            "range": "stddev: 2.970363133277024e-7",
            "extra": "mean: 6.758980020777543 usec\nrounds: 39341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.31320199075725,
            "unit": "iter/sec",
            "range": "stddev: 0.00004786742100672928",
            "extra": "mean: 9.148025872342052 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.8883809864669,
            "unit": "iter/sec",
            "range": "stddev: 0.00004778811575266481",
            "extra": "mean: 1.8695489293593401 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 300.33822514738483,
            "unit": "iter/sec",
            "range": "stddev: 0.000023219543165829435",
            "extra": "mean: 3.3295795082669564 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 238.22725726348887,
            "unit": "iter/sec",
            "range": "stddev: 0.011106868922860964",
            "extra": "mean: 4.1976724724407175 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.41476450601186,
            "unit": "iter/sec",
            "range": "stddev: 0.00013639068183075506",
            "extra": "mean: 9.958694868423754 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.321851667719706,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984263839826716",
            "extra": "mean: 16.04573633870319 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745492.6976658201,
            "unit": "iter/sec",
            "range": "stddev: 1.627218461956824e-7",
            "extra": "mean: 1.3413947623243752 usec\nrounds: 23979"
          }
        ]
      }
    ]
  }
}