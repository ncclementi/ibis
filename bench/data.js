window.BENCHMARK_DATA = {
  "lastUpdate": 1681864977452,
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
          "id": "d41e4e2659ab701aa7f4abdb8dead7bdf1598a9f",
          "message": "chore(flake/nixpkgs): `9a60b3ee` -> `4df48038`",
          "timestamp": "2023-04-19T00:31:43Z",
          "tree_id": "e2743dbaabe940ea1aaf5fd66a995490220b0b13",
          "url": "https://github.com/ibis-project/ibis/commit/d41e4e2659ab701aa7f4abdb8dead7bdf1598a9f"
        },
        "date": 1681864884422,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 162.0142293475168,
            "unit": "iter/sec",
            "range": "stddev: 0.005861723516441335",
            "extra": "mean: 6.172297359480833 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10037.967687620676,
            "unit": "iter/sec",
            "range": "stddev: 0.000013889647883589514",
            "extra": "mean: 99.62175921658425 usec\nrounds: 4801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 266.3299348149555,
            "unit": "iter/sec",
            "range": "stddev: 0.00041791542605870257",
            "extra": "mean: 3.7547412786880083 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11723.009987007928,
            "unit": "iter/sec",
            "range": "stddev: 0.00000900065527221432",
            "extra": "mean: 85.302324326965 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 641.9737207063723,
            "unit": "iter/sec",
            "range": "stddev: 0.00015254938855888",
            "extra": "mean: 1.5576961606772417 msec\nrounds: 473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1958.6452370036795,
            "unit": "iter/sec",
            "range": "stddev: 0.00008338427735845487",
            "extra": "mean: 510.5569814826662 usec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2043.71195464407,
            "unit": "iter/sec",
            "range": "stddev: 0.00010511160631615113",
            "extra": "mean: 489.3057447394335 usec\nrounds: 1093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.60316333604585,
            "unit": "iter/sec",
            "range": "stddev: 0.0007083954240652369",
            "extra": "mean: 10.79876716922854 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 150.3386641777304,
            "unit": "iter/sec",
            "range": "stddev: 0.00039229081202580933",
            "extra": "mean: 6.651648832118128 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.96513232215321,
            "unit": "iter/sec",
            "range": "stddev: 0.015253674148177371",
            "extra": "mean: 12.826246428569934 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1632.2766322441557,
            "unit": "iter/sec",
            "range": "stddev: 0.00006298663150484298",
            "extra": "mean: 612.6412522521613 usec\nrounds: 1221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1988.0182902286076,
            "unit": "iter/sec",
            "range": "stddev: 0.00014685454812178638",
            "extra": "mean: 503.013480768835 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 225.12896067700845,
            "unit": "iter/sec",
            "range": "stddev: 0.00047474753272328093",
            "extra": "mean: 4.441898532258121 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.32027431436538,
            "unit": "iter/sec",
            "range": "stddev: 0.0009878082876128658",
            "extra": "mean: 11.584763926469362 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9782561.742804566,
            "unit": "iter/sec",
            "range": "stddev: 1.7294084268498823e-7",
            "extra": "mean: 102.22271285289374 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2040.7182111925624,
            "unit": "iter/sec",
            "range": "stddev: 0.00008844933335691275",
            "extra": "mean: 490.0235586252824 usec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.02536243232164,
            "unit": "iter/sec",
            "range": "stddev: 0.0015667726009139487",
            "extra": "mean: 18.85889985714552 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 103.81466776866318,
            "unit": "iter/sec",
            "range": "stddev: 0.000644396748458128",
            "extra": "mean: 9.632550211771264 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.1475749861594,
            "unit": "iter/sec",
            "range": "stddev: 0.00032103933964795626",
            "extra": "mean: 3.6081860000035704 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 700.8162780276681,
            "unit": "iter/sec",
            "range": "stddev: 0.00012729345923584103",
            "extra": "mean: 1.4269074953771554 msec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.03292894966292,
            "unit": "iter/sec",
            "range": "stddev: 0.00100641178683336",
            "extra": "mean: 11.359385765431005 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68529.53990965188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026117299443672397",
            "extra": "mean: 14.592247391685135 usec\nrounds: 13513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4183.648484570786,
            "unit": "iter/sec",
            "range": "stddev: 0.00005747029436857728",
            "extra": "mean: 239.02581770145852 usec\nrounds: 757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8080564668734181,
            "unit": "iter/sec",
            "range": "stddev: 0.05101161305664251",
            "extra": "mean: 1.2375372774000084 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.16238226752138,
            "unit": "iter/sec",
            "range": "stddev: 0.001618730479058369",
            "extra": "mean: 47.25365922222914 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.31847773936049,
            "unit": "iter/sec",
            "range": "stddev: 0.001223548014589056",
            "extra": "mean: 26.097070108106262 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10877.346713418958,
            "unit": "iter/sec",
            "range": "stddev: 0.00002411338884476121",
            "extra": "mean: 91.93418453475783 usec\nrounds: 3647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1939.9011666349518,
            "unit": "iter/sec",
            "range": "stddev: 0.00010595589030792103",
            "extra": "mean: 515.4901791902364 usec\nrounds: 1211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 122.70274866737032,
            "unit": "iter/sec",
            "range": "stddev: 0.004594783297691067",
            "extra": "mean: 8.149776682760853 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.46101973284092,
            "unit": "iter/sec",
            "range": "stddev: 0.0012223025394259505",
            "extra": "mean: 11.304414113923588 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.267507017041988,
            "unit": "iter/sec",
            "range": "stddev: 0.0038294759849596483",
            "extra": "mean: 441.01296819999334 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1686346.3539607623,
            "unit": "iter/sec",
            "range": "stddev: 3.7090605289890403e-7",
            "extra": "mean: 592.9979909828583 nsec\nrounds: 123442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7192915699169397,
            "unit": "iter/sec",
            "range": "stddev: 0.02333023498200961",
            "extra": "mean: 1.3902568051999764 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.28195772384029,
            "unit": "iter/sec",
            "range": "stddev: 0.00019714508097373943",
            "extra": "mean: 10.495166387096516 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5725993.071232505,
            "unit": "iter/sec",
            "range": "stddev: 3.697767488114079e-8",
            "extra": "mean: 174.6421952595484 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1044.6690522200333,
            "unit": "iter/sec",
            "range": "stddev: 0.00008399378044317271",
            "extra": "mean: 957.2409538455198 usec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 265.42116300234505,
            "unit": "iter/sec",
            "range": "stddev: 0.00025968475247563995",
            "extra": "mean: 3.767597084906017 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 521719.1293491422,
            "unit": "iter/sec",
            "range": "stddev: 5.141116798430512e-7",
            "extra": "mean: 1.9167401456939586 usec\nrounds: 2055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 90.05273742383977,
            "unit": "iter/sec",
            "range": "stddev: 0.0011526839531549708",
            "extra": "mean: 11.104604130948593 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.41665128196153,
            "unit": "iter/sec",
            "range": "stddev: 0.0011899413550251936",
            "extra": "mean: 11.707319181818383 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.15283768479873,
            "unit": "iter/sec",
            "range": "stddev: 0.0003697509686848273",
            "extra": "mean: 4.079088006665188 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 74.2142534223477,
            "unit": "iter/sec",
            "range": "stddev: 0.02116072189990138",
            "extra": "mean: 13.474500569440155 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1410102.5578188964,
            "unit": "iter/sec",
            "range": "stddev: 3.6985050029987376e-7",
            "extra": "mean: 709.1682760626784 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.4571204398063,
            "unit": "iter/sec",
            "range": "stddev: 0.0007970063020151416",
            "extra": "mean: 21.525225638891737 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.9705180683666,
            "unit": "iter/sec",
            "range": "stddev: 0.000990280780621361",
            "extra": "mean: 12.825360466672464 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 655654.508822463,
            "unit": "iter/sec",
            "range": "stddev: 5.135873840438638e-7",
            "extra": "mean: 1.5251935074708352 usec\nrounds: 22025"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.41276623904696,
            "unit": "iter/sec",
            "range": "stddev: 0.00040646027745039597",
            "extra": "mean: 3.9934066262635683 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 91.62758043777718,
            "unit": "iter/sec",
            "range": "stddev: 0.00031720030143189936",
            "extra": "mean: 10.913744477614836 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.62121721431252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006030590205352691",
            "extra": "mean: 14.36343746938143 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.60417408327506,
            "unit": "iter/sec",
            "range": "stddev: 0.031357191050262724",
            "extra": "mean: 32.675281393935485 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 267.15564890813937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004182438282941185",
            "extra": "mean: 3.743136273131349 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.500716854539633,
            "unit": "iter/sec",
            "range": "stddev: 0.002847901033421328",
            "extra": "mean: 95.23159359998203 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.88866435982117,
            "unit": "iter/sec",
            "range": "stddev: 0.001000935184567433",
            "extra": "mean: 20.454639395340966 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 165.62933453020804,
            "unit": "iter/sec",
            "range": "stddev: 0.004078506531416342",
            "extra": "mean: 6.037577841125822 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 91.27750517546173,
            "unit": "iter/sec",
            "range": "stddev: 0.0011542175686425162",
            "extra": "mean: 10.955601800002214 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 90.9448533921072,
            "unit": "iter/sec",
            "range": "stddev: 0.0011420492648823056",
            "extra": "mean: 10.995674441174991 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.01186348926771,
            "unit": "iter/sec",
            "range": "stddev: 0.000289312635979167",
            "extra": "mean: 8.546141990907781 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.495339235911,
            "unit": "iter/sec",
            "range": "stddev: 0.0004404132332756424",
            "extra": "mean: 9.30272890999845 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4844689.610174859,
            "unit": "iter/sec",
            "range": "stddev: 4.903939360771798e-8",
            "extra": "mean: 206.41157235338844 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5481714.312616831,
            "unit": "iter/sec",
            "range": "stddev: 5.117939696621431e-8",
            "extra": "mean: 182.42468377070628 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.51386013990327,
            "unit": "iter/sec",
            "range": "stddev: 0.0012372987410739207",
            "extra": "mean: 11.558841535713242 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.683681004584734,
            "unit": "iter/sec",
            "range": "stddev: 0.001091819166273008",
            "extra": "mean: 23.428157470593693 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 83.97024702905685,
            "unit": "iter/sec",
            "range": "stddev: 0.0010675840492655282",
            "extra": "mean: 11.908980089744912 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.5584686495925,
            "unit": "iter/sec",
            "range": "stddev: 0.00048299436177266694",
            "extra": "mean: 6.470043399997394 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 246.19013394191728,
            "unit": "iter/sec",
            "range": "stddev: 0.0004180522257836334",
            "extra": "mean: 4.061901198022526 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1755107.5363988115,
            "unit": "iter/sec",
            "range": "stddev: 4.4260703527842937e-7",
            "extra": "mean: 569.7656578079732 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.532865787378883,
            "unit": "iter/sec",
            "range": "stddev: 0.012371089521057447",
            "extra": "mean: 652.37283539999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 254.49433917380384,
            "unit": "iter/sec",
            "range": "stddev: 0.00044236694529784323",
            "extra": "mean: 3.9293604849774755 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 94.1662849249926,
            "unit": "iter/sec",
            "range": "stddev: 0.0011152088103391835",
            "extra": "mean: 10.61951207692373 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 89.46844702310906,
            "unit": "iter/sec",
            "range": "stddev: 0.001295201299700783",
            "extra": "mean: 11.177124821912992 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1949.4730543670205,
            "unit": "iter/sec",
            "range": "stddev: 0.00011973661471546117",
            "extra": "mean: 512.9591290117588 usec\nrounds: 1589"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 66.47865495794292,
            "unit": "iter/sec",
            "range": "stddev: 0.026336055518610985",
            "extra": "mean: 15.04242227272258 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.72608457960546,
            "unit": "iter/sec",
            "range": "stddev: 0.001080202081173752",
            "extra": "mean: 11.665060931033162 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.398268157663026,
            "unit": "iter/sec",
            "range": "stddev: 0.0021960196036747994",
            "extra": "mean: 27.47383462499897 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 484.6218436142398,
            "unit": "iter/sec",
            "range": "stddev: 0.00017737431533429063",
            "extra": "mean: 2.0634645614447424 msec\nrounds: 415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6465806561697494,
            "unit": "iter/sec",
            "range": "stddev: 0.041953038466105964",
            "extra": "mean: 1.5465974591999951 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.60431426807018,
            "unit": "iter/sec",
            "range": "stddev: 0.00047644859349492544",
            "extra": "mean: 12.105905228566728 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1684577.795003664,
            "unit": "iter/sec",
            "range": "stddev: 4.0342298289224896e-7",
            "extra": "mean: 593.6205516693427 nsec\nrounds: 114930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15007074528523992,
            "unit": "iter/sec",
            "range": "stddev: 0.14178796570225863",
            "extra": "mean: 6.663523914000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8214190519327735,
            "unit": "iter/sec",
            "range": "stddev: 0.01932226680914126",
            "extra": "mean: 1.2174054127999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7836.919390427576,
            "unit": "iter/sec",
            "range": "stddev: 0.000020284509439515208",
            "extra": "mean: 127.60115935624556 usec\nrounds: 3351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1884.6604790404708,
            "unit": "iter/sec",
            "range": "stddev: 0.00010891762064180713",
            "extra": "mean: 530.599548895473 usec\nrounds: 951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1925.536770508698,
            "unit": "iter/sec",
            "range": "stddev: 0.00009946861506073153",
            "extra": "mean: 519.3357069653958 usec\nrounds: 1249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.01857977989076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005103723735365881",
            "extra": "mean: 3.999702745613432 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.342958052481849,
            "unit": "iter/sec",
            "range": "stddev: 0.004849396904716542",
            "extra": "mean: 187.16224049999633 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 151.05516157404048,
            "unit": "iter/sec",
            "range": "stddev: 0.00040731818101619833",
            "extra": "mean: 6.620098178570645 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146754.04038870987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013065458551802083",
            "extra": "mean: 6.814122441544256 usec\nrounds: 40158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.647187953113809,
            "unit": "iter/sec",
            "range": "stddev: 0.005519787934773351",
            "extra": "mean: 73.27516873333859 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}