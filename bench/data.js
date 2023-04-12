window.BENCHMARK_DATA = {
  "lastUpdate": 1681261433182,
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
          "id": "5c1bff3c2c93abd2d75fe8b5a0186f209ab29eed",
          "message": "chore(flake/nixpkgs): `3bf7fcf1` -> `10193ca1`",
          "timestamp": "2023-04-12T00:58:08Z",
          "tree_id": "149e271bab68fdeb1472fd4f16081c2cc661af6b",
          "url": "https://github.com/ibis-project/ibis/commit/5c1bff3c2c93abd2d75fe8b5a0186f209ab29eed"
        },
        "date": 1681261337739,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6240603929083296,
            "unit": "iter/sec",
            "range": "stddev: 0.03790368607130297",
            "extra": "mean: 1.6024090158000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1892.0442305473084,
            "unit": "iter/sec",
            "range": "stddev: 0.00010247431382926045",
            "extra": "mean: 528.5288704433361 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1637862.754394018,
            "unit": "iter/sec",
            "range": "stddev: 3.1761856219714986e-7",
            "extra": "mean: 610.5517677334224 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1647.377534461513,
            "unit": "iter/sec",
            "range": "stddev: 0.002037460658053329",
            "extra": "mean: 607.0253958676664 usec\nrounds: 1210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 507.2896097718818,
            "unit": "iter/sec",
            "range": "stddev: 0.0001943414665554871",
            "extra": "mean: 1.9712605595247268 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1970.7324313465967,
            "unit": "iter/sec",
            "range": "stddev: 0.00010314357717447557",
            "extra": "mean: 507.4255561505639 usec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.09414838495773,
            "unit": "iter/sec",
            "range": "stddev: 0.0006439655645114866",
            "extra": "mean: 11.099500000012894 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.19090411738331,
            "unit": "iter/sec",
            "range": "stddev: 0.0004949645875565803",
            "extra": "mean: 10.395993354836168 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 78.47160306099849,
            "unit": "iter/sec",
            "range": "stddev: 0.011769852064933728",
            "extra": "mean: 12.743463380283796 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.14596155653357,
            "unit": "iter/sec",
            "range": "stddev: 0.022789176544752012",
            "extra": "mean: 29.286040117638965 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 441883.7489773578,
            "unit": "iter/sec",
            "range": "stddev: 7.619918293707577e-7",
            "extra": "mean: 2.2630386437932577 usec\nrounds: 2122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 76.89923386908913,
            "unit": "iter/sec",
            "range": "stddev: 0.016900938487690476",
            "extra": "mean: 13.004030725486407 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1657161.8206027437,
            "unit": "iter/sec",
            "range": "stddev: 4.212168045037804e-7",
            "extra": "mean: 603.441370400556 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.25281160683938,
            "unit": "iter/sec",
            "range": "stddev: 0.0013302043126104729",
            "extra": "mean: 23.667064083331486 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 676763.4547033253,
            "unit": "iter/sec",
            "range": "stddev: 6.649627763442999e-7",
            "extra": "mean: 1.477621158545526 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.36844012777273,
            "unit": "iter/sec",
            "range": "stddev: 0.0011351524113020132",
            "extra": "mean: 11.852773365082237 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 86.22279797716224,
            "unit": "iter/sec",
            "range": "stddev: 0.001088978137256132",
            "extra": "mean: 11.597860698801135 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1168.4445050296288,
            "unit": "iter/sec",
            "range": "stddev: 0.00015800390838521374",
            "extra": "mean: 855.8386775712917 usec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12730.175565279083,
            "unit": "iter/sec",
            "range": "stddev: 0.000011792970311197865",
            "extra": "mean: 78.55351207625525 usec\nrounds: 4927"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.758226355125,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895835104332746",
            "extra": "mean: 9.194706768522776 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2023.5321002263645,
            "unit": "iter/sec",
            "range": "stddev: 0.00011133359612290882",
            "extra": "mean: 494.18538993680113 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.99581177490208,
            "unit": "iter/sec",
            "range": "stddev: 0.0004646678231413422",
            "extra": "mean: 11.111628200001178 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 282.90985576025366,
            "unit": "iter/sec",
            "range": "stddev: 0.00030862981328860756",
            "extra": "mean: 3.5346948140521133 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11732.365763303427,
            "unit": "iter/sec",
            "range": "stddev: 0.000019477543199910986",
            "extra": "mean: 85.23430143371482 usec\nrounds: 3835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.34029764290065,
            "unit": "iter/sec",
            "range": "stddev: 0.00035221459153907006",
            "extra": "mean: 6.696116291338717 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1821.717263826429,
            "unit": "iter/sec",
            "range": "stddev: 0.00009920981529186035",
            "extra": "mean: 548.932603240279 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8295874271235241,
            "unit": "iter/sec",
            "range": "stddev: 0.038400082275236516",
            "extra": "mean: 1.2054184613999723 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.959950829405399,
            "unit": "iter/sec",
            "range": "stddev: 0.001809202550920132",
            "extra": "mean: 71.63349013333118 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 227.39636466111023,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890890020758133",
            "extra": "mean: 4.3976076815929055 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.318675697591,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995438614384019",
            "extra": "mean: 11.584978475612877 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3108255884593696,
            "unit": "iter/sec",
            "range": "stddev: 0.007168384680838055",
            "extra": "mean: 432.7457705999791 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.51087226871312,
            "unit": "iter/sec",
            "range": "stddev: 0.0008336102274691061",
            "extra": "mean: 18.014489038458457 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.47641266885401,
            "unit": "iter/sec",
            "range": "stddev: 0.0011436338933794802",
            "extra": "mean: 18.699833255315287 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.01269537085382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005248379349312431",
            "extra": "mean: 11.7629490000013 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.21734791275455,
            "unit": "iter/sec",
            "range": "stddev: 0.0010071100313378903",
            "extra": "mean: 11.208582449434585 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.66282377385656,
            "unit": "iter/sec",
            "range": "stddev: 0.0003408963454617689",
            "extra": "mean: 4.172528656107257 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.537562689721244,
            "unit": "iter/sec",
            "range": "stddev: 0.020352036744646366",
            "extra": "mean: 650.3799856 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 92.94858697627821,
            "unit": "iter/sec",
            "range": "stddev: 0.0010931688818567409",
            "extra": "mean: 10.7586358494639 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 204.52251641554585,
            "unit": "iter/sec",
            "range": "stddev: 0.0037300605292805333",
            "extra": "mean: 4.889437200001073 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4813564.373945331,
            "unit": "iter/sec",
            "range": "stddev: 4.806089671954946e-8",
            "extra": "mean: 207.74626084028927 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.25823004399797,
            "unit": "iter/sec",
            "range": "stddev: 0.0005150016278083863",
            "extra": "mean: 3.6329522275870096 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 215.58653622840512,
            "unit": "iter/sec",
            "range": "stddev: 0.013833927017114526",
            "extra": "mean: 4.638508589147427 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 48.46084793175332,
            "unit": "iter/sec",
            "range": "stddev: 0.0013183319701893367",
            "extra": "mean: 20.635214666658015 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 246.1272402482381,
            "unit": "iter/sec",
            "range": "stddev: 0.0005502857913902764",
            "extra": "mean: 4.062939148837909 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.54104226727567,
            "unit": "iter/sec",
            "range": "stddev: 0.0011536501868012919",
            "extra": "mean: 11.423213319152095 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5873052.070575418,
            "unit": "iter/sec",
            "range": "stddev: 3.4973468207314975e-8",
            "extra": "mean: 170.26922083813642 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 74.26917890140098,
            "unit": "iter/sec",
            "range": "stddev: 0.02138337492722333",
            "extra": "mean: 13.464535555557847 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10348086.472642072,
            "unit": "iter/sec",
            "range": "stddev: 1.6740893127449765e-8",
            "extra": "mean: 96.6362237737024 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.62117133094523,
            "unit": "iter/sec",
            "range": "stddev: 0.00012566940331211647",
            "extra": "mean: 15.474804609756873 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.0799021778107,
            "unit": "iter/sec",
            "range": "stddev: 0.0011024272885413946",
            "extra": "mean: 28.50635087097067 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7266.975602126929,
            "unit": "iter/sec",
            "range": "stddev: 0.000014359455976642846",
            "extra": "mean: 137.60882858989038 usec\nrounds: 3092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.061677978624448,
            "unit": "iter/sec",
            "range": "stddev: 0.005506643385639652",
            "extra": "mean: 197.5629433999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1675428.8162660226,
            "unit": "iter/sec",
            "range": "stddev: 3.4843807427474156e-7",
            "extra": "mean: 596.8621228735159 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.84037347641205,
            "unit": "iter/sec",
            "range": "stddev: 0.0004336454640796884",
            "extra": "mean: 8.207460068181728 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7035991639197611,
            "unit": "iter/sec",
            "range": "stddev: 0.02556089559398279",
            "extra": "mean: 1.4212637695999888 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.92024636632516,
            "unit": "iter/sec",
            "range": "stddev: 0.0003397687259042496",
            "extra": "mean: 4.06635897115356 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144611.08720238617,
            "unit": "iter/sec",
            "range": "stddev: 8.29745388228887e-7",
            "extra": "mean: 6.915099107169284 usec\nrounds: 32258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.47520248519078,
            "unit": "iter/sec",
            "range": "stddev: 0.0010786614756420642",
            "extra": "mean: 27.415886187499794 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 611.9027645014639,
            "unit": "iter/sec",
            "range": "stddev: 0.00014475496725003173",
            "extra": "mean: 1.634246579707367 msec\nrounds: 483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8249422264168345,
            "unit": "iter/sec",
            "range": "stddev: 0.022101733609716123",
            "extra": "mean: 1.2122061012000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.67195342747,
            "unit": "iter/sec",
            "range": "stddev: 0.0007702955332834693",
            "extra": "mean: 9.645810336733074 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12953.734242092789,
            "unit": "iter/sec",
            "range": "stddev: 0.000009996113213875338",
            "extra": "mean: 77.19781657636055 usec\nrounds: 6117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4248.509546870197,
            "unit": "iter/sec",
            "range": "stddev: 0.00004100699296395938",
            "extra": "mean: 235.3766630315525 usec\nrounds: 1834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.41108318189418,
            "unit": "iter/sec",
            "range": "stddev: 0.000530360362904181",
            "extra": "mean: 6.692943914894134 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 89.17913610551332,
            "unit": "iter/sec",
            "range": "stddev: 0.0012187081101302216",
            "extra": "mean: 11.21338514444498 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14960496888751965,
            "unit": "iter/sec",
            "range": "stddev: 0.29859787020388523",
            "extra": "mean: 6.684269963999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.7498775948111,
            "unit": "iter/sec",
            "range": "stddev: 0.0008416452090967094",
            "extra": "mean: 11.39602729268232 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.36663097621543,
            "unit": "iter/sec",
            "range": "stddev: 0.00015172419089938376",
            "extra": "mean: 10.377036012048748 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 245.34447440554277,
            "unit": "iter/sec",
            "range": "stddev: 0.00027559982820545893",
            "extra": "mean: 4.07590186175152 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1841.8818484291269,
            "unit": "iter/sec",
            "range": "stddev: 0.00009911995172244994",
            "extra": "mean: 542.9229897959324 usec\nrounds: 1176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.728222772483264,
            "unit": "iter/sec",
            "range": "stddev: 0.000772498590742095",
            "extra": "mean: 46.0230921999937 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1568.3185269635362,
            "unit": "iter/sec",
            "range": "stddev: 0.00004786751935075",
            "extra": "mean: 637.6255733815292 usec\nrounds: 1097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 147.90084776890617,
            "unit": "iter/sec",
            "range": "stddev: 0.00050351082910092",
            "extra": "mean: 6.761286463769914 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 646.2456968450123,
            "unit": "iter/sec",
            "range": "stddev: 0.00006872553339031293",
            "extra": "mean: 1.547399085026059 msec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.143094001818387,
            "unit": "iter/sec",
            "range": "stddev: 0.0016894387773647066",
            "extra": "mean: 109.37216655555757 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1649183.0929361235,
            "unit": "iter/sec",
            "range": "stddev: 3.8850888861851094e-7",
            "extra": "mean: 606.3608123823594 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.06982762540976,
            "unit": "iter/sec",
            "range": "stddev: 0.0008567300732469815",
            "extra": "mean: 12.038065186668518 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5205941.236724204,
            "unit": "iter/sec",
            "range": "stddev: 4.4954445672801817e-8",
            "extra": "mean: 192.08822276830733 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 252.61502196628322,
            "unit": "iter/sec",
            "range": "stddev: 0.00008749748281683726",
            "extra": "mean: 3.9585927717848506 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1836.5547109311192,
            "unit": "iter/sec",
            "range": "stddev: 0.00009732610241410581",
            "extra": "mean: 544.4978001733516 usec\nrounds: 1151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.42905323976618,
            "unit": "iter/sec",
            "range": "stddev: 0.00004461659473761695",
            "extra": "mean: 5.799486694446319 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 63199.93279282274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011292859567372107",
            "extra": "mean: 15.822801636168263 usec\nrounds: 12225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1837.4806420183377,
            "unit": "iter/sec",
            "range": "stddev: 0.00009963997046759902",
            "extra": "mean: 544.2234204446221 usec\nrounds: 1125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 141.6886191953985,
            "unit": "iter/sec",
            "range": "stddev: 0.004355027213734771",
            "extra": "mean: 7.05772987046285 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.46801446856514,
            "unit": "iter/sec",
            "range": "stddev: 0.00038392890451258485",
            "extra": "mean: 4.175923044333211 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.41244220385816,
            "unit": "iter/sec",
            "range": "stddev: 0.0010045519129803279",
            "extra": "mean: 11.988619126580925 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.16238190142283,
            "unit": "iter/sec",
            "range": "stddev: 0.000992164593284094",
            "extra": "mean: 12.024667609753623 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.86000236354668,
            "unit": "iter/sec",
            "range": "stddev: 0.0008826813409373764",
            "extra": "mean: 11.924635962503771 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}