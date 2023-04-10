window.BENCHMARK_DATA = {
  "lastUpdate": 1681155996886,
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
          "id": "c8f2964e224b07d5d676fd57106043883da4d207",
          "message": "docs(selectors): make doctests more complete and actually run them",
          "timestamp": "2023-04-10T14:41:24-05:00",
          "tree_id": "5afe78a2f319e1009357886c577e18bad5e0bfc4",
          "url": "https://github.com/ibis-project/ibis/commit/c8f2964e224b07d5d676fd57106043883da4d207"
        },
        "date": 1681155919213,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.38832595243863,
            "unit": "iter/sec",
            "range": "stddev: 0.00550029568086696",
            "extra": "mean: 4.091848479679893 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.26548065468613,
            "unit": "iter/sec",
            "range": "stddev: 0.0006237844449226472",
            "extra": "mean: 10.176513597018786 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6155979.461967192,
            "unit": "iter/sec",
            "range": "stddev: 8.595888078321456e-9",
            "extra": "mean: 162.4436868540887 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.1804195398722,
            "unit": "iter/sec",
            "range": "stddev: 0.0007567864976168813",
            "extra": "mean: 10.185330279566472 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9177122461614221,
            "unit": "iter/sec",
            "range": "stddev: 0.007734611066792468",
            "extra": "mean: 1.0896661826000127 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 301.64227335911903,
            "unit": "iter/sec",
            "range": "stddev: 0.000021920949201653425",
            "extra": "mean: 3.3151851988910512 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1922610.8770619812,
            "unit": "iter/sec",
            "range": "stddev: 8.582198753545076e-8",
            "extra": "mean: 520.1260493897445 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2703127.189487333,
            "unit": "iter/sec",
            "range": "stddev: 2.3324102765636562e-8",
            "extra": "mean: 369.94189688505514 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.31632047445038,
            "unit": "iter/sec",
            "range": "stddev: 0.00016072379992539457",
            "extra": "mean: 9.679012913040152 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.04285127402154,
            "unit": "iter/sec",
            "range": "stddev: 0.0005603529427713913",
            "extra": "mean: 15.61454526315948 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.0547330899207,
            "unit": "iter/sec",
            "range": "stddev: 0.00013770784573509365",
            "extra": "mean: 1.329690454697841 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.989209700731635,
            "unit": "iter/sec",
            "range": "stddev: 0.0148749866689376",
            "extra": "mean: 25.006745756761084 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70371.40642177963,
            "unit": "iter/sec",
            "range": "stddev: 7.510380446387962e-7",
            "extra": "mean: 14.210317099623925 usec\nrounds: 13141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1851935.084313038,
            "unit": "iter/sec",
            "range": "stddev: 1.1844307844908806e-7",
            "extra": "mean: 539.9757305051234 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.35259768116028,
            "unit": "iter/sec",
            "range": "stddev: 0.0008844718030915441",
            "extra": "mean: 10.065162092783659 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7012529.2598355645,
            "unit": "iter/sec",
            "range": "stddev: 4.177792906467504e-9",
            "extra": "mean: 142.6019005335817 nsec\nrounds: 68023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148503.53395688208,
            "unit": "iter/sec",
            "range": "stddev: 3.370618136997326e-7",
            "extra": "mean: 6.73384648401936 usec\nrounds: 30303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.16452045608844,
            "unit": "iter/sec",
            "range": "stddev: 0.00031141137851697904",
            "extra": "mean: 3.785519714280586 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.79095322858141,
            "unit": "iter/sec",
            "range": "stddev: 0.011057778590387311",
            "extra": "mean: 1.2642972603999851 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 271.8659981903451,
            "unit": "iter/sec",
            "range": "stddev: 0.00033956509196907163",
            "extra": "mean: 3.678282707864986 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.15856562870476,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162880644625222",
            "extra": "mean: 10.399489566652656 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.8192408948314,
            "unit": "iter/sec",
            "range": "stddev: 0.000027123071155189082",
            "extra": "mean: 1.4454642786554377 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.09711971148049,
            "unit": "iter/sec",
            "range": "stddev: 0.000050661514018134306",
            "extra": "mean: 8.920835812497549 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2082.136352588237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008585529719618964",
            "extra": "mean: 480.27594290687637 usec\nrounds: 578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.01588276641199,
            "unit": "iter/sec",
            "range": "stddev: 0.0006612867335391404",
            "extra": "mean: 9.899433362497945 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.492772690094812,
            "unit": "iter/sec",
            "range": "stddev: 0.00026146058409333623",
            "extra": "mean: 95.30369422221459 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 235.93561653402142,
            "unit": "iter/sec",
            "range": "stddev: 0.003938249249284314",
            "extra": "mean: 4.238444431113698 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.35353259605039,
            "unit": "iter/sec",
            "range": "stddev: 0.00008080463607758591",
            "extra": "mean: 13.270777965523205 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.42715504086416,
            "unit": "iter/sec",
            "range": "stddev: 0.0003435474506835587",
            "extra": "mean: 7.224016123894164 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12702.407688126976,
            "unit": "iter/sec",
            "range": "stddev: 0.000002373007517398752",
            "extra": "mean: 78.72523261355457 usec\nrounds: 834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1826288.4983384016,
            "unit": "iter/sec",
            "range": "stddev: 9.363400631359965e-8",
            "extra": "mean: 547.5586145944754 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.33146336857507,
            "unit": "iter/sec",
            "range": "stddev: 0.0003746579156202389",
            "extra": "mean: 19.108963052626915 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.3090953386454,
            "unit": "iter/sec",
            "range": "stddev: 0.000675657421504814",
            "extra": "mean: 10.069571136359524 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.642833183754505,
            "unit": "iter/sec",
            "range": "stddev: 0.0019073135669929414",
            "extra": "mean: 608.7045294000063 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 242.75517852434055,
            "unit": "iter/sec",
            "range": "stddev: 0.00046345637551120666",
            "extra": "mean: 4.119376592000208 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.82141509534725,
            "unit": "iter/sec",
            "range": "stddev: 0.00034617349162522265",
            "extra": "mean: 20.911133600002866 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13822.704725968271,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014017476133917634",
            "extra": "mean: 72.34474148328815 usec\nrounds: 5988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8399.388045074584,
            "unit": "iter/sec",
            "range": "stddev: 0.000013715026439643233",
            "extra": "mean: 119.05629251007183 usec\nrounds: 3405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12006170.6960493,
            "unit": "iter/sec",
            "range": "stddev: 2.9436248849770643e-9",
            "extra": "mean: 83.29050330166018 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.04751681788424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001872751397974078",
            "extra": "mean: 10.096164266678898 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.30114266622386,
            "unit": "iter/sec",
            "range": "stddev: 0.0011759633656956304",
            "extra": "mean: 23.640023341460907 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1778.7528303383542,
            "unit": "iter/sec",
            "range": "stddev: 0.00000799558680743622",
            "extra": "mean: 562.1916563920689 usec\nrounds: 1330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 772781.422740991,
            "unit": "iter/sec",
            "range": "stddev: 1.757602771797956e-7",
            "extra": "mean: 1.294026966193214 usec\nrounds: 25773"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.35538809588297,
            "unit": "iter/sec",
            "range": "stddev: 0.00008226081915910406",
            "extra": "mean: 6.159327458904076 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.343054265167,
            "unit": "iter/sec",
            "range": "stddev: 0.00033384659257421865",
            "extra": "mean: 3.69900385537239 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.96136111052482,
            "unit": "iter/sec",
            "range": "stddev: 0.00010247489542665064",
            "extra": "mean: 6.098997917722269 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.4165149193784,
            "unit": "iter/sec",
            "range": "stddev: 0.00002334343088598395",
            "extra": "mean: 1.8607541306206732 msec\nrounds: 467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4544.415985739035,
            "unit": "iter/sec",
            "range": "stddev: 0.000024525848369082948",
            "extra": "mean: 220.05027777785514 usec\nrounds: 2106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.637922877149144,
            "unit": "iter/sec",
            "range": "stddev: 0.0007591408365440456",
            "extra": "mean: 39.0047198749978 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9022044702930878,
            "unit": "iter/sec",
            "range": "stddev: 0.007590114365887981",
            "extra": "mean: 1.1083961928000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.20012670124694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005964784941569043",
            "extra": "mean: 11.210746407897432 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6807205980438732,
            "unit": "iter/sec",
            "range": "stddev: 0.012365697871974021",
            "extra": "mean: 1.4690314982000132 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2026.2261798009165,
            "unit": "iter/sec",
            "range": "stddev: 0.00009168235869210615",
            "extra": "mean: 493.5283187873198 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.08890015482034,
            "unit": "iter/sec",
            "range": "stddev: 0.000681654504918825",
            "extra": "mean: 10.29983858510474 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.474437396293204,
            "unit": "iter/sec",
            "range": "stddev: 0.00031311043118879806",
            "extra": "mean: 64.62270481248922 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.83731248032859,
            "unit": "iter/sec",
            "range": "stddev: 0.01603440094540198",
            "extra": "mean: 11.6499453571449 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 272.0532654771939,
            "unit": "iter/sec",
            "range": "stddev: 0.0003603179367002277",
            "extra": "mean: 3.675750769783829 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 284.3880215268083,
            "unit": "iter/sec",
            "range": "stddev: 0.000139727149055939",
            "extra": "mean: 3.516322504130974 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.64268251722969,
            "unit": "iter/sec",
            "range": "stddev: 0.00003417776061666317",
            "extra": "mean: 9.204485537637655 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.74578229455062,
            "unit": "iter/sec",
            "range": "stddev: 0.03214505499167091",
            "extra": "mean: 27.975328439026725 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.3528438181588,
            "unit": "iter/sec",
            "range": "stddev: 0.000047869449315128966",
            "extra": "mean: 10.271913595743099 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.86999518772232,
            "unit": "iter/sec",
            "range": "stddev: 0.0008368637095898623",
            "extra": "mean: 10.54074049462391 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17195776404241936,
            "unit": "iter/sec",
            "range": "stddev: 0.13026511927837103",
            "extra": "mean: 5.815381501199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2131.4907472008617,
            "unit": "iter/sec",
            "range": "stddev: 0.00008366405100101362",
            "extra": "mean: 469.1552151062491 usec\nrounds: 1218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.30803166449672,
            "unit": "iter/sec",
            "range": "stddev: 0.0008428038349364648",
            "extra": "mean: 10.069678990098307 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12091.561927043387,
            "unit": "iter/sec",
            "range": "stddev: 0.000034012665787568",
            "extra": "mean: 82.70230149203883 usec\nrounds: 5297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5558235.166043162,
            "unit": "iter/sec",
            "range": "stddev: 1.0597256451294287e-8",
            "extra": "mean: 179.91322247566333 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.56878098636571,
            "unit": "iter/sec",
            "range": "stddev: 0.0009267091670464156",
            "extra": "mean: 10.574314161289372 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 166.46156407148464,
            "unit": "iter/sec",
            "range": "stddev: 0.0038847163063718136",
            "extra": "mean: 6.007392791110407 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 259.6240647452354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004105961611604835",
            "extra": "mean: 3.851723071130878 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1994.7975315931888,
            "unit": "iter/sec",
            "range": "stddev: 0.00009687337987888678",
            "extra": "mean: 501.30400913486596 usec\nrounds: 1642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.6073966129431,
            "unit": "iter/sec",
            "range": "stddev: 0.0006882826542031945",
            "extra": "mean: 9.84180318888927 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2015.289137116182,
            "unit": "iter/sec",
            "range": "stddev: 0.00010238297394156078",
            "extra": "mean: 496.2067137576942 usec\nrounds: 1621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5669623866205744,
            "unit": "iter/sec",
            "range": "stddev: 0.0037581489366858858",
            "extra": "mean: 389.5655055999896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.2688262724005,
            "unit": "iter/sec",
            "range": "stddev: 0.0008005718054742949",
            "extra": "mean: 10.073655925536292 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2131.307356748223,
            "unit": "iter/sec",
            "range": "stddev: 0.00008738987694547002",
            "extra": "mean: 469.195584031446 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 265.3337118808188,
            "unit": "iter/sec",
            "range": "stddev: 0.00039817786869749674",
            "extra": "mean: 3.7688388441540166 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491136.8956004622,
            "unit": "iter/sec",
            "range": "stddev: 1.992982615009552e-7",
            "extra": "mean: 2.036092195389645 usec\nrounds: 2050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.603269925631699,
            "unit": "iter/sec",
            "range": "stddev: 0.0013958626865435732",
            "extra": "mean: 178.46721883334263 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1161.4580018296679,
            "unit": "iter/sec",
            "range": "stddev: 0.000011504635469480226",
            "extra": "mean: 860.9867928282213 usec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.94337318657689,
            "unit": "iter/sec",
            "range": "stddev: 0.00007761737504471322",
            "extra": "mean: 8.337267607477225 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2162.080464688552,
            "unit": "iter/sec",
            "range": "stddev: 0.00008595736648684458",
            "extra": "mean: 462.5174762605563 usec\nrounds: 1369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.6698021787831,
            "unit": "iter/sec",
            "range": "stddev: 0.00040756616721975366",
            "extra": "mean: 17.963060058818037 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 165.1070830563805,
            "unit": "iter/sec",
            "range": "stddev: 0.00007930463512703347",
            "extra": "mean: 6.056675349648819 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.35913532214185,
            "unit": "iter/sec",
            "range": "stddev: 0.0009204971573356632",
            "extra": "mean: 10.71132456989275 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.79401975736081,
            "unit": "iter/sec",
            "range": "stddev: 0.00034385390025026136",
            "extra": "mean: 5.213926905881127 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.80773574357922,
            "unit": "iter/sec",
            "range": "stddev: 0.0008884789568157123",
            "extra": "mean: 10.120665072167515 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2045.8952500274747,
            "unit": "iter/sec",
            "range": "stddev: 0.00011735778939139168",
            "extra": "mean: 488.783577745034 usec\nrounds: 1357"
          }
        ]
      }
    ]
  }
}