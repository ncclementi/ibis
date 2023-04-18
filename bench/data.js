window.BENCHMARK_DATA = {
  "lastUpdate": 1681815213669,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7e6e404bbadd505e6de4ce2bbd40d01f92af2000",
          "message": "chore(deps): pre-commit.ci autoupdate\n\nupdates:\n- [github.com/kynan/nbstripout: 0.6.0 → 0.6.1](https://github.com/kynan/nbstripout/compare/0.6.0...0.6.1)",
          "timestamp": "2023-04-18T06:47:54-04:00",
          "tree_id": "fe1c32cf5559ee2daa4e84c0ea83112794fd7c04",
          "url": "https://github.com/ibis-project/ibis/commit/7e6e404bbadd505e6de4ce2bbd40d01f92af2000"
        },
        "date": 1681815126833,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6836144.02325897,
            "unit": "iter/sec",
            "range": "stddev: 1.0782414937074007e-8",
            "extra": "mean: 146.28129492295037 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.55200216130503,
            "unit": "iter/sec",
            "range": "stddev: 0.0005197942915879053",
            "extra": "mean: 15.491386270268762 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.82704354560475,
            "unit": "iter/sec",
            "range": "stddev: 0.007107834617712855",
            "extra": "mean: 11.132504873015273 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.258532160161735,
            "unit": "iter/sec",
            "range": "stddev: 0.00023610403761394224",
            "extra": "mean: 20.301051536585547 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.3975929794677,
            "unit": "iter/sec",
            "range": "stddev: 0.00031246918769612894",
            "extra": "mean: 3.6711043921572992 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.16159792482354,
            "unit": "iter/sec",
            "range": "stddev: 0.00007397759794689867",
            "extra": "mean: 9.07757348148145 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7064602719188683,
            "unit": "iter/sec",
            "range": "stddev: 0.02977345630144751",
            "extra": "mean: 1.415507764199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.0042029257609,
            "unit": "iter/sec",
            "range": "stddev: 0.0007258974060952181",
            "extra": "mean: 10.41621063999969 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67821.1258600885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029810836831522113",
            "extra": "mean: 14.744668233065736 usec\nrounds: 13193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2281.7769722201006,
            "unit": "iter/sec",
            "range": "stddev: 0.00017085369404358473",
            "extra": "mean: 438.2549268288171 usec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 244.2510466124053,
            "unit": "iter/sec",
            "range": "stddev: 0.006978067481793658",
            "extra": "mean: 4.094148270270751 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.97064619030067,
            "unit": "iter/sec",
            "range": "stddev: 0.00007410515110823763",
            "extra": "mean: 8.405434718749364 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.309852812812835,
            "unit": "iter/sec",
            "range": "stddev: 0.014000394708721085",
            "extra": "mean: 25.438914888891556 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.95250269723336,
            "unit": "iter/sec",
            "range": "stddev: 0.0006819688901498673",
            "extra": "mean: 10.00475198734248 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.72478843099923,
            "unit": "iter/sec",
            "range": "stddev: 0.000827993029938615",
            "extra": "mean: 9.9280426951211 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 381.234032673798,
            "unit": "iter/sec",
            "range": "stddev: 0.00004838263246152457",
            "extra": "mean: 2.6230606774176626 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 103.29235278450311,
            "unit": "iter/sec",
            "range": "stddev: 0.00006186799423641749",
            "extra": "mean: 9.6812588061217 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.127259982854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006661349175570479",
            "extra": "mean: 10.40287635555583 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2407.6708194235453,
            "unit": "iter/sec",
            "range": "stddev: 0.00007984885577539719",
            "extra": "mean: 415.3391700944501 usec\nrounds: 1799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2570906.647132602,
            "unit": "iter/sec",
            "range": "stddev: 1.7938986299501372e-8",
            "extra": "mean: 388.9678379085709 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.65746731908425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006735335884009359",
            "extra": "mean: 10.03437099999933 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4700.307098886719,
            "unit": "iter/sec",
            "range": "stddev: 0.000054118234333475285",
            "extra": "mean: 212.75205618731866 usec\nrounds: 1584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1171.4379612541345,
            "unit": "iter/sec",
            "range": "stddev: 0.000012353061209156494",
            "extra": "mean: 853.6516939654285 usec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2305.940618787344,
            "unit": "iter/sec",
            "range": "stddev: 0.00008188820417700771",
            "extra": "mean: 433.6625114509165 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.3926573016824,
            "unit": "iter/sec",
            "range": "stddev: 0.000012970435429906383",
            "extra": "mean: 1.3290932471168917 msec\nrounds: 607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.1903282008869,
            "unit": "iter/sec",
            "range": "stddev: 0.00009270928326069613",
            "extra": "mean: 6.361714562501675 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9343187699039804,
            "unit": "iter/sec",
            "range": "stddev: 0.005339576369567458",
            "extra": "mean: 1.0702985236000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.7838888928218,
            "unit": "iter/sec",
            "range": "stddev: 0.0002425881528637699",
            "extra": "mean: 3.5362693536583025 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.46757545313232,
            "unit": "iter/sec",
            "range": "stddev: 0.020605578832681357",
            "extra": "mean: 25.995919634144045 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2311.117370516922,
            "unit": "iter/sec",
            "range": "stddev: 0.00008067799046084339",
            "extra": "mean: 432.6911357930439 usec\nrounds: 1274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2379.699492393256,
            "unit": "iter/sec",
            "range": "stddev: 0.00008022645218178835",
            "extra": "mean: 420.22112590119656 usec\nrounds: 1803"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6355807.875318607,
            "unit": "iter/sec",
            "range": "stddev: 1.2026666610971216e-8",
            "extra": "mean: 157.33641098313342 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.72577982549392,
            "unit": "iter/sec",
            "range": "stddev: 0.0007303408352041787",
            "extra": "mean: 9.92794497826164 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495741.35631566687,
            "unit": "iter/sec",
            "range": "stddev: 2.8331021753741144e-7",
            "extra": "mean: 2.017180909480634 usec\nrounds: 2001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9329988311092073,
            "unit": "iter/sec",
            "range": "stddev: 0.0031332684150809716",
            "extra": "mean: 1.0718127040000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138617.94934569855,
            "unit": "iter/sec",
            "range": "stddev: 3.343479846456729e-7",
            "extra": "mean: 7.214072958950687 usec\nrounds: 39063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.061774584422295,
            "unit": "iter/sec",
            "range": "stddev: 0.0005217190843299438",
            "extra": "mean: 38.37037254545676 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11495.850691534175,
            "unit": "iter/sec",
            "range": "stddev: 0.000016151037799964976",
            "extra": "mean: 86.98790779671698 usec\nrounds: 4425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.73352012553644,
            "unit": "iter/sec",
            "range": "stddev: 0.00017102036754054097",
            "extra": "mean: 10.23190404597648 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.955492695611955,
            "unit": "iter/sec",
            "range": "stddev: 0.00009586885641622613",
            "extra": "mean: 62.67434162500152 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.808087382023863,
            "unit": "iter/sec",
            "range": "stddev: 0.00019919246825251616",
            "extra": "mean: 172.17371816667537 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.8852849713469,
            "unit": "iter/sec",
            "range": "stddev: 0.00002016533465894704",
            "extra": "mean: 1.453730762741427 msec\nrounds: 569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.08217344731239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000341065981520375",
            "extra": "mean: 9.338622553193037 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.20439537850586,
            "unit": "iter/sec",
            "range": "stddev: 0.0002398067547777484",
            "extra": "mean: 3.673709965665614 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.87269519439832,
            "unit": "iter/sec",
            "range": "stddev: 0.015147563259725128",
            "extra": "mean: 11.380099333333613 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.90366411043419,
            "unit": "iter/sec",
            "range": "stddev: 0.000732117045110135",
            "extra": "mean: 10.214122311826978 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7979.375113806667,
            "unit": "iter/sec",
            "range": "stddev: 0.000011641963834571604",
            "extra": "mean: 125.3230968261795 usec\nrounds: 3718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.77980654182329,
            "unit": "iter/sec",
            "range": "stddev: 0.00017267497277448466",
            "extra": "mean: 18.25490200000104 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 278.573583173081,
            "unit": "iter/sec",
            "range": "stddev: 0.00023716340166081648",
            "extra": "mean: 3.5897158252033123 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2344.507218171666,
            "unit": "iter/sec",
            "range": "stddev: 0.00008170673844205241",
            "extra": "mean: 426.52886382659005 usec\nrounds: 1667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.01666876341093,
            "unit": "iter/sec",
            "range": "stddev: 0.0007302380913190932",
            "extra": "mean: 10.52446915909012 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.5771490455101,
            "unit": "iter/sec",
            "range": "stddev: 0.000024982023751908974",
            "extra": "mean: 5.274897344088336 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1770.676209503618,
            "unit": "iter/sec",
            "range": "stddev: 0.00000497709891807402",
            "extra": "mean: 564.7559924467131 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8080486690958508,
            "unit": "iter/sec",
            "range": "stddev: 0.003390547776122587",
            "extra": "mean: 1.2375492198000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1612044.798200353,
            "unit": "iter/sec",
            "range": "stddev: 1.0310415614850136e-7",
            "extra": "mean: 620.330155288721 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.48083059890504,
            "unit": "iter/sec",
            "range": "stddev: 0.012519861995307156",
            "extra": "mean: 11.698529284211347 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2275.422548581539,
            "unit": "iter/sec",
            "range": "stddev: 0.00008413461146891479",
            "extra": "mean: 439.4788126817955 usec\nrounds: 1719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.28012996664123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006527553116329732",
            "extra": "mean: 11.327577342465107 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 180.10062710531284,
            "unit": "iter/sec",
            "range": "stddev: 0.004152850342944418",
            "extra": "mean: 5.552451515980872 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2305.3045721074895,
            "unit": "iter/sec",
            "range": "stddev: 0.00008425831158525042",
            "extra": "mean: 433.78216141123977 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.3669333087932,
            "unit": "iter/sec",
            "range": "stddev: 0.00006289129498759782",
            "extra": "mean: 6.3144494820149175 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.1168370753982,
            "unit": "iter/sec",
            "range": "stddev: 0.0002499474625540525",
            "extra": "mean: 3.5956111485939894 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.15357630322606,
            "unit": "iter/sec",
            "range": "stddev: 0.0008297317790186775",
            "extra": "mean: 9.984665919191833 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12298988.636881007,
            "unit": "iter/sec",
            "range": "stddev: 3.2351290061828424e-9",
            "extra": "mean: 81.30749848810304 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.2830560911078,
            "unit": "iter/sec",
            "range": "stddev: 0.0002512087348060903",
            "extra": "mean: 3.6458686666661353 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6922806698137438,
            "unit": "iter/sec",
            "range": "stddev: 0.0016072558923645275",
            "extra": "mean: 590.9185266000009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.52272593390205,
            "unit": "iter/sec",
            "range": "stddev: 0.00017763782869855563",
            "extra": "mean: 8.58201687254771 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.569909489411968,
            "unit": "iter/sec",
            "range": "stddev: 0.0033448627660360255",
            "extra": "mean: 389.1187623999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1783407.8520195656,
            "unit": "iter/sec",
            "range": "stddev: 1.0156378953741757e-7",
            "extra": "mean: 560.7242330281211 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 262.33691903380236,
            "unit": "iter/sec",
            "range": "stddev: 0.0038363790396902394",
            "extra": "mean: 3.8118919886802094 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.271458895799169,
            "unit": "iter/sec",
            "range": "stddev: 0.000404906749389019",
            "extra": "mean: 88.7196599166676 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.3379920357233,
            "unit": "iter/sec",
            "range": "stddev: 0.000022021695551693066",
            "extra": "mean: 1.8370938913526595 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2547980.568662899,
            "unit": "iter/sec",
            "range": "stddev: 1.596777162045397e-8",
            "extra": "mean: 392.4676711819818 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.82052362209407,
            "unit": "iter/sec",
            "range": "stddev: 0.00036092265133744146",
            "extra": "mean: 7.528956916667768 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.35488703797144,
            "unit": "iter/sec",
            "range": "stddev: 0.0008110049679436063",
            "extra": "mean: 10.378300787233771 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13523.673256211645,
            "unit": "iter/sec",
            "range": "stddev: 0.000006849385931966413",
            "extra": "mean: 73.94440704493385 usec\nrounds: 7154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5752594.495112964,
            "unit": "iter/sec",
            "range": "stddev: 1.0226276334107114e-8",
            "extra": "mean: 173.8346064284256 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 254.20179314957096,
            "unit": "iter/sec",
            "range": "stddev: 0.00025064892404010346",
            "extra": "mean: 3.933882556885055 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.92816911259472,
            "unit": "iter/sec",
            "range": "stddev: 0.018678671183229634",
            "extra": "mean: 11.914950731957937 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17989996356911672,
            "unit": "iter/sec",
            "range": "stddev: 0.05952875122869202",
            "extra": "mean: 5.558644816600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.7847378078529,
            "unit": "iter/sec",
            "range": "stddev: 0.00009289619412491102",
            "extra": "mean: 13.37171232142761 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.19181480369915,
            "unit": "iter/sec",
            "range": "stddev: 0.0006630888587962168",
            "extra": "mean: 10.395894931816423 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.71590452216992,
            "unit": "iter/sec",
            "range": "stddev: 0.00019701978284391897",
            "extra": "mean: 6.14568073684371 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9737.442235149265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016849712480468736",
            "extra": "mean: 102.69637301572871 usec\nrounds: 5166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.48045468277155,
            "unit": "iter/sec",
            "range": "stddev: 0.0006640702345874696",
            "extra": "mean: 21.514419487179843 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.171122568826775,
            "unit": "iter/sec",
            "range": "stddev: 0.00020365998637070435",
            "extra": "mean: 16.900135684206738 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 746146.1291682823,
            "unit": "iter/sec",
            "range": "stddev: 1.5655476517987638e-7",
            "extra": "mean: 1.3402200465942038 usec\nrounds: 22677"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 300.71801637416416,
            "unit": "iter/sec",
            "range": "stddev: 0.00006370820533859727",
            "extra": "mean: 3.3253744223816777 msec\nrounds: 277"
          }
        ]
      }
    ]
  }
}