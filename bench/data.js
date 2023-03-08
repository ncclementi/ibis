window.BENCHMARK_DATA = {
  "lastUpdate": 1678310053412,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nicholas.b.crews@gmail.com",
            "name": "Nick Crews",
            "username": "NickCrews"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a475aaf697ca8d34bdabc016c0369d3438791aae",
          "message": "chore: remove unused _create_table_or_temp_view_from_csv()\n\nA grep for this shows it only appears in these\ntwo places, and it's a private method so\nit shouldn't be used by anyone.",
          "timestamp": "2023-03-08T16:04:52-05:00",
          "tree_id": "8a3d1bb99ad49b452f7d324aa6df0cf05318b91d",
          "url": "https://github.com/ibis-project/ibis/commit/a475aaf697ca8d34bdabc016c0369d3438791aae"
        },
        "date": 1678309974414,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2704.94207795325,
            "unit": "iter/sec",
            "range": "stddev: 0.003799000864702101",
            "extra": "mean: 369.6936833326466 usec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.628538674577065,
            "unit": "iter/sec",
            "range": "stddev: 0.0002884050166277245",
            "extra": "mean: 177.66600850000222 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4974.503053673151,
            "unit": "iter/sec",
            "range": "stddev: 0.00009877704756749415",
            "extra": "mean: 201.0251052638523 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6170427.309886889,
            "unit": "iter/sec",
            "range": "stddev: 9.91573317729387e-9",
            "extra": "mean: 162.0633304273421 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.91193766757834,
            "unit": "iter/sec",
            "range": "stddev: 0.00002379953184971732",
            "extra": "mean: 2.9419384528294032 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.88835169443918,
            "unit": "iter/sec",
            "range": "stddev: 0.0005790381567933818",
            "extra": "mean: 9.2688412075494 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 737711.3180876089,
            "unit": "iter/sec",
            "range": "stddev: 2.8578490837279924e-7",
            "extra": "mean: 1.3555437953593148 usec\nrounds: 26738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.76503598239589,
            "unit": "iter/sec",
            "range": "stddev: 0.000729791323011248",
            "extra": "mean: 11.79731699999138 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.17226322403936,
            "unit": "iter/sec",
            "range": "stddev: 0.00036380998799677937",
            "extra": "mean: 10.5072629999978 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.6480958066556,
            "unit": "iter/sec",
            "range": "stddev: 0.0004669655248655738",
            "extra": "mean: 8.35784299999176 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.3703715895589,
            "unit": "iter/sec",
            "range": "stddev: 0.00023693440798359946",
            "extra": "mean: 3.232371590278523 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505594.6353018358,
            "unit": "iter/sec",
            "range": "stddev: 2.4116568468970684e-7",
            "extra": "mean: 1.9778690875606468 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.04188926158557,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476966886326775",
            "extra": "mean: 10.74784710345378 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.0281796852295,
            "unit": "iter/sec",
            "range": "stddev: 0.000268000610666697",
            "extra": "mean: 3.558362015937574 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6757228612204459,
            "unit": "iter/sec",
            "range": "stddev: 0.05990791630062738",
            "extra": "mean: 1.479896652000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.28085132050506,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111915047707493",
            "extra": "mean: 8.383575309275933 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147544.53349402256,
            "unit": "iter/sec",
            "range": "stddev: 5.054309728665749e-7",
            "extra": "mean: 6.777614706006799 usec\nrounds: 34013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4915.562572890388,
            "unit": "iter/sec",
            "range": "stddev: 0.000052807816511563546",
            "extra": "mean: 203.43551428173407 usec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1969230.810699984,
            "unit": "iter/sec",
            "range": "stddev: 9.955666660343231e-8",
            "extra": "mean: 507.81248930618716 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5548.355995218115,
            "unit": "iter/sec",
            "range": "stddev: 0.00009966108451551971",
            "extra": "mean: 180.23356844114838 usec\nrounds: 2199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.79859395892159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006410751371179052",
            "extra": "mean: 9.823318388891758 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.45668894049,
            "unit": "iter/sec",
            "range": "stddev: 0.00021138404157951992",
            "extra": "mean: 3.1700072785226223 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1751171.9630929804,
            "unit": "iter/sec",
            "range": "stddev: 1.1216722698019518e-7",
            "extra": "mean: 571.0461457101936 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.0015098964564,
            "unit": "iter/sec",
            "range": "stddev: 0.00047543998557302936",
            "extra": "mean: 21.73841689655131 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.61855201168655,
            "unit": "iter/sec",
            "range": "stddev: 0.00021038978710040637",
            "extra": "mean: 6.467529200017452 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 262.78047791591933,
            "unit": "iter/sec",
            "range": "stddev: 0.009221672812768273",
            "extra": "mean: 3.8054577262773885 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.309546788425036,
            "unit": "iter/sec",
            "range": "stddev: 0.00014283252278809926",
            "extra": "mean: 65.31871999999777 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7746322989738144,
            "unit": "iter/sec",
            "range": "stddev: 0.002911971507135298",
            "extra": "mean: 563.4970132000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.611540201276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006417837704892634",
            "extra": "mean: 8.80192274682998 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1961372.2429527026,
            "unit": "iter/sec",
            "range": "stddev: 1.048045992939251e-7",
            "extra": "mean: 509.8471254465053 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8488737414583234,
            "unit": "iter/sec",
            "range": "stddev: 0.0032238262019697356",
            "extra": "mean: 1.1780314918000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.38705033992641,
            "unit": "iter/sec",
            "range": "stddev: 0.0011996645460524947",
            "extra": "mean: 17.734568380001292 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11791909.085099285,
            "unit": "iter/sec",
            "range": "stddev: 4.332783509478938e-9",
            "extra": "mean: 84.80391027295977 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.17937866542854,
            "unit": "iter/sec",
            "range": "stddev: 0.0002462558657284286",
            "extra": "mean: 3.1627616077333425 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9021149245800788,
            "unit": "iter/sec",
            "range": "stddev: 0.0038664804359401805",
            "extra": "mean: 1.1085062143999949 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.11991866561078,
            "unit": "iter/sec",
            "range": "stddev: 0.0001294862134979795",
            "extra": "mean: 8.465972642860768 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6871944.362475124,
            "unit": "iter/sec",
            "range": "stddev: 4.211342884736889e-9",
            "extra": "mean: 145.51922239948 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.07064291571484,
            "unit": "iter/sec",
            "range": "stddev: 0.0006937298510287075",
            "extra": "mean: 8.39837574999791 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.88419310674624,
            "unit": "iter/sec",
            "range": "stddev: 0.0195296815984496",
            "extra": "mean: 11.643586134145675 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 283.7875679378117,
            "unit": "iter/sec",
            "range": "stddev: 0.00003284621779775599",
            "extra": "mean: 3.5237625357117017 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12750.735414687913,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016572536944000756",
            "extra": "mean: 78.42684892104916 usec\nrounds: 2085"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.06004083586102,
            "unit": "iter/sec",
            "range": "stddev: 0.0007764197212018365",
            "extra": "mean: 8.470266424778735 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.45117840202208,
            "unit": "iter/sec",
            "range": "stddev: 0.033593193750452784",
            "extra": "mean: 33.95449874193629 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.30193251813044,
            "unit": "iter/sec",
            "range": "stddev: 0.00021137314830348784",
            "extra": "mean: 10.384007608691896 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.27455433214887,
            "unit": "iter/sec",
            "range": "stddev: 0.000703327760636746",
            "extra": "mean: 9.874148611114226 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.717058531720795,
            "unit": "iter/sec",
            "range": "stddev: 0.0019396047432721352",
            "extra": "mean: 27.235297161292884 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.07453793480084,
            "unit": "iter/sec",
            "range": "stddev: 0.00017015554966704266",
            "extra": "mean: 6.28636118000145 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16215711227588966,
            "unit": "iter/sec",
            "range": "stddev: 0.09822667886842894",
            "extra": "mean: 6.166858708600012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2002835.683777322,
            "unit": "iter/sec",
            "range": "stddev: 1.07112828077347e-7",
            "extra": "mean: 499.2920827703714 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71353.94760166334,
            "unit": "iter/sec",
            "range": "stddev: 0.000023526121063283714",
            "extra": "mean: 14.014641566610239 usec\nrounds: 5644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1764.8653919354276,
            "unit": "iter/sec",
            "range": "stddev: 0.000008034457546858687",
            "extra": "mean: 566.6154509967226 usec\nrounds: 1153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 217.5938746800148,
            "unit": "iter/sec",
            "range": "stddev: 0.0038877839162040897",
            "extra": "mean: 4.595717602209904 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.8390318804268,
            "unit": "iter/sec",
            "range": "stddev: 0.000015796972016217945",
            "extra": "mean: 856.2823922658448 usec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 160.8269556173722,
            "unit": "iter/sec",
            "range": "stddev: 0.00018643465919241091",
            "extra": "mean: 6.217863144652985 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 672.9214878047509,
            "unit": "iter/sec",
            "range": "stddev: 0.00004120619451658617",
            "extra": "mean: 1.4860574645376035 msec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.74581649096449,
            "unit": "iter/sec",
            "range": "stddev: 0.0007404965677191554",
            "extra": "mean: 8.421349311923686 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.203371743198094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005795174110464968",
            "extra": "mean: 43.097184800012656 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.46661076630801,
            "unit": "iter/sec",
            "range": "stddev: 0.00020921355033837652",
            "extra": "mean: 13.2508932075488 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.6438224242582,
            "unit": "iter/sec",
            "range": "stddev: 0.00001405099507363",
            "extra": "mean: 1.3556678299202873 msec\nrounds: 635"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.3478541304873,
            "unit": "iter/sec",
            "range": "stddev: 0.003917323319883966",
            "extra": "mean: 6.315210303866482 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 279.700249319158,
            "unit": "iter/sec",
            "range": "stddev: 0.0017508423224136863",
            "extra": "mean: 3.5752560193785476 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.355589594380824,
            "unit": "iter/sec",
            "range": "stddev: 0.0008952368172687532",
            "extra": "mean: 26.76975550000217 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.530645188279336,
            "unit": "iter/sec",
            "range": "stddev: 0.0034174178910484363",
            "extra": "mean: 395.15614619998587 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5369.058180547226,
            "unit": "iter/sec",
            "range": "stddev: 0.00005334685644725516",
            "extra": "mean: 186.25240523992198 usec\nrounds: 1794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.91502924299338,
            "unit": "iter/sec",
            "range": "stddev: 0.00013110378929748122",
            "extra": "mean: 9.097936896229736 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.1471201116574,
            "unit": "iter/sec",
            "range": "stddev: 0.00023605988009251866",
            "extra": "mean: 3.342836794239395 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5556464.988157325,
            "unit": "iter/sec",
            "range": "stddev: 1.2340120776271807e-8",
            "extra": "mean: 179.97053920643617 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.207265398434124,
            "unit": "iter/sec",
            "range": "stddev: 0.0007062138462236121",
            "extra": "mean: 18.794425770835232 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5172.833338715874,
            "unit": "iter/sec",
            "range": "stddev: 0.00011506096055782601",
            "extra": "mean: 193.3176529225363 usec\nrounds: 2207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.2259473986455,
            "unit": "iter/sec",
            "range": "stddev: 0.0002504737944957391",
            "extra": "mean: 3.3872361450997177 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.9977871754,
            "unit": "iter/sec",
            "range": "stddev: 0.00002770819330736936",
            "extra": "mean: 1.8691666096034674 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.586055218888433,
            "unit": "iter/sec",
            "range": "stddev: 0.0002656583419810153",
            "extra": "mean: 94.46389418182187 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.81916247083507,
            "unit": "iter/sec",
            "range": "stddev: 0.00021036707291137031",
            "extra": "mean: 3.217304853570064 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 110.76840898015419,
            "unit": "iter/sec",
            "range": "stddev: 0.0007999858768018137",
            "extra": "mean: 9.027844754718513 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.28423062248106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000277458376941916",
            "extra": "mean: 5.120741172046692 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.18459532405464,
            "unit": "iter/sec",
            "range": "stddev: 0.000731344536310128",
            "extra": "mean: 9.882927305262145 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12029.281849688148,
            "unit": "iter/sec",
            "range": "stddev: 0.000027771949955230718",
            "extra": "mean: 83.13048214311517 usec\nrounds: 5320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.38998311554332,
            "unit": "iter/sec",
            "range": "stddev: 0.0008226546334151111",
            "extra": "mean: 9.579463183676896 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.64965288144447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007357184137418369",
            "extra": "mean: 8.428174678262286 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5078.196211560939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000688094197299202",
            "extra": "mean: 196.92031547016956 usec\nrounds: 2799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8373.403205116581,
            "unit": "iter/sec",
            "range": "stddev: 0.000014472233117102864",
            "extra": "mean: 119.42575503696615 usec\nrounds: 4070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.20670067362149,
            "unit": "iter/sec",
            "range": "stddev: 0.00026196054095028375",
            "extra": "mean: 15.821107403844243 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.904456054626035,
            "unit": "iter/sec",
            "range": "stddev: 0.003982758576125192",
            "extra": "mean: 1.1056369128000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.41353988241278,
            "unit": "iter/sec",
            "range": "stddev: 0.00003662408319237872",
            "extra": "mean: 7.330650614755624 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5634.112382124966,
            "unit": "iter/sec",
            "range": "stddev: 0.00005092259720120012",
            "extra": "mean: 177.49024729656514 usec\nrounds: 2127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.37168206359165,
            "unit": "iter/sec",
            "range": "stddev: 0.022436605043649138",
            "extra": "mean: 11.994480322914095 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5554.440039793504,
            "unit": "iter/sec",
            "range": "stddev: 0.00005453534359812493",
            "extra": "mean: 180.0361499693454 usec\nrounds: 3334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14037.456402189002,
            "unit": "iter/sec",
            "range": "stddev: 0.000001828981831341744",
            "extra": "mean: 71.23797726232367 usec\nrounds: 6553"
          }
        ]
      }
    ]
  }
}