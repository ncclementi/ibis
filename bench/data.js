window.BENCHMARK_DATA = {
  "lastUpdate": 1675467937155,
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
          "id": "3cb768220f1a5dee0fbcbcf210fe9547401f1be6",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.1.3.5",
          "timestamp": "2023-02-03T18:40:02-05:00",
          "tree_id": "9701a221ca66a338998d0f70f1fdc1059cae8f4b",
          "url": "https://github.com/ibis-project/ibis/commit/3cb768220f1a5dee0fbcbcf210fe9547401f1be6"
        },
        "date": 1675467848568,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 93.0447243814489,
            "unit": "iter/sec",
            "range": "stddev: 0.008290019650494236",
            "extra": "mean: 10.74751961111057 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5089306938295144,
            "unit": "iter/sec",
            "range": "stddev: 0.035037369372108114",
            "extra": "mean: 1.9649040864 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 184.9450401704614,
            "unit": "iter/sec",
            "range": "stddev: 0.00028266381935295164",
            "extra": "mean: 5.4070117213109 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1427337.4726555073,
            "unit": "iter/sec",
            "range": "stddev: 2.4610181762168564e-7",
            "extra": "mean: 700.6051611183009 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.03466087284315,
            "unit": "iter/sec",
            "range": "stddev: 0.0005692706933009898",
            "extra": "mean: 15.376416000003701 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 218.71094941852365,
            "unit": "iter/sec",
            "range": "stddev: 0.00026128435948196695",
            "extra": "mean: 4.5722447945960285 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.01347170029338,
            "unit": "iter/sec",
            "range": "stddev: 0.00030518020887486944",
            "extra": "mean: 18.86312984090921 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3616071.800227504,
            "unit": "iter/sec",
            "range": "stddev: 2.853018165516628e-8",
            "extra": "mean: 276.5431814540812 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11655534313894146,
            "unit": "iter/sec",
            "range": "stddev: 0.12555888076996868",
            "extra": "mean: 8.579615254600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 134.89278109649374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008370313261831237",
            "extra": "mean: 7.4132951509440925 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 47907.346182174064,
            "unit": "iter/sec",
            "range": "stddev: 6.392577444713432e-7",
            "extra": "mean: 20.873625439350505 usec\nrounds: 10810"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.945141467732695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004101682671425093",
            "extra": "mean: 125.86308300000226 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4140.850417889977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006202477883271299",
            "extra": "mean: 241.4962867723106 usec\nrounds: 1890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.907557132750537,
            "unit": "iter/sec",
            "range": "stddev: 0.0008023273597855742",
            "extra": "mean: 33.43636511538888 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3854.1734917687177,
            "unit": "iter/sec",
            "range": "stddev: 0.00006890101092529115",
            "extra": "mean: 259.4589999997873 usec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 134.7016479295615,
            "unit": "iter/sec",
            "range": "stddev: 0.0008667083535713265",
            "extra": "mean: 7.423814150536023 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 213.46633859141716,
            "unit": "iter/sec",
            "range": "stddev: 0.00031974233531744084",
            "extra": "mean: 4.684579342104326 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 431.4346326968027,
            "unit": "iter/sec",
            "range": "stddev: 0.00007098185630102936",
            "extra": "mean: 2.317848230563274 msec\nrounds: 373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7016341794369468,
            "unit": "iter/sec",
            "range": "stddev: 0.012936335127487856",
            "extra": "mean: 1.42524413619999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 184.04399234190703,
            "unit": "iter/sec",
            "range": "stddev: 0.009349213643687052",
            "extra": "mean: 5.4334835235602466 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3413838606907869,
            "unit": "iter/sec",
            "range": "stddev: 0.0025132149626810496",
            "extra": "mean: 745.4987563999907 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9325526277572715,
            "unit": "iter/sec",
            "range": "stddev: 0.005667751863789452",
            "extra": "mean: 517.4503325999979 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 60.174596612825965,
            "unit": "iter/sec",
            "range": "stddev: 0.00013476077864762253",
            "extra": "mean: 16.618308327585105 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 225.91817803581725,
            "unit": "iter/sec",
            "range": "stddev: 0.00002305830324985551",
            "extra": "mean: 4.426381306250882 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 119.36229514521145,
            "unit": "iter/sec",
            "range": "stddev: 0.00023127791249412047",
            "extra": "mean: 8.377854989998639 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.80371739727169,
            "unit": "iter/sec",
            "range": "stddev: 0.0005637293955801055",
            "extra": "mean: 23.362456833334296 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 211.85311853350277,
            "unit": "iter/sec",
            "range": "stddev: 0.0002860736625331444",
            "extra": "mean: 4.720251497463128 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3654230.453567113,
            "unit": "iter/sec",
            "range": "stddev: 3.948777189457068e-8",
            "extra": "mean: 273.65542833356653 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 147.75203010901558,
            "unit": "iter/sec",
            "range": "stddev: 0.00034445189826109003",
            "extra": "mean: 6.7680965145600505 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.82636868927229,
            "unit": "iter/sec",
            "range": "stddev: 0.0005632955370351705",
            "extra": "mean: 29.562735781246907 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 130.8372625863954,
            "unit": "iter/sec",
            "range": "stddev: 0.0009368243037158192",
            "extra": "mean: 7.643082560976638 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1270648.353380349,
            "unit": "iter/sec",
            "range": "stddev: 2.851883016251977e-7",
            "extra": "mean: 786.9998000152175 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7180648437045611,
            "unit": "iter/sec",
            "range": "stddev: 0.006320345930133156",
            "extra": "mean: 1.3926318894000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 77.32868227911489,
            "unit": "iter/sec",
            "range": "stddev: 0.0003674133353211749",
            "extra": "mean: 12.931812239998331 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.32140064684615,
            "unit": "iter/sec",
            "range": "stddev: 0.00042854065892408954",
            "extra": "mean: 231.40645400000608 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 105.4504201630933,
            "unit": "iter/sec",
            "range": "stddev: 0.0236274049236924",
            "extra": "mean: 9.483129592593043 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1230863.737969389,
            "unit": "iter/sec",
            "range": "stddev: 1.8903121774367485e-7",
            "extra": "mean: 812.4376152714881 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.497238239467983,
            "unit": "iter/sec",
            "range": "stddev: 0.0007251676107923407",
            "extra": "mean: 31.748815321431525 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1257.3314434497822,
            "unit": "iter/sec",
            "range": "stddev: 0.000020741392151653405",
            "extra": "mean: 795.3352357563465 usec\nrounds: 1018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 124.00035563304913,
            "unit": "iter/sec",
            "range": "stddev: 0.00013235285091400267",
            "extra": "mean: 8.064492999998103 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.003439465544002,
            "unit": "iter/sec",
            "range": "stddev: 0.00021878977691891497",
            "extra": "mean: 83.30945500000315 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.09900717448608,
            "unit": "iter/sec",
            "range": "stddev: 0.00018755726758676468",
            "extra": "mean: 11.350865714291558 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 121.15002094387631,
            "unit": "iter/sec",
            "range": "stddev: 0.0008674408295744164",
            "extra": "mean: 8.254228866070587 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4643.090883812238,
            "unit": "iter/sec",
            "range": "stddev: 0.00007999200196435872",
            "extra": "mean: 215.37377256310435 usec\nrounds: 2770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8269.321983424074,
            "unit": "iter/sec",
            "range": "stddev: 0.000019151401893548684",
            "extra": "mean: 120.92889864544016 usec\nrounds: 3986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 134.67055076958417,
            "unit": "iter/sec",
            "range": "stddev: 0.000891289028411102",
            "extra": "mean: 7.425528404580147 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 106.01254615027416,
            "unit": "iter/sec",
            "range": "stddev: 0.015171734871890184",
            "extra": "mean: 9.432845793388331 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16504.723025233252,
            "unit": "iter/sec",
            "range": "stddev: 0.00003608905151546051",
            "extra": "mean: 60.5887174520378 usec\nrounds: 6452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 347.1624241945695,
            "unit": "iter/sec",
            "range": "stddev: 0.00005602033581439663",
            "extra": "mean: 2.8804960741936267 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 223.27010000908373,
            "unit": "iter/sec",
            "range": "stddev: 0.00012789336766765721",
            "extra": "mean: 4.478880064815284 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 816.5691599733171,
            "unit": "iter/sec",
            "range": "stddev: 0.000021979544560161705",
            "extra": "mean: 1.224636012499758 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 133.58711111747218,
            "unit": "iter/sec",
            "range": "stddev: 0.0008693116140801352",
            "extra": "mean: 7.485752118111399 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4638.2311414950345,
            "unit": "iter/sec",
            "range": "stddev: 0.00007576653123148612",
            "extra": "mean: 215.5994320881713 usec\nrounds: 3291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1264133.024209474,
            "unit": "iter/sec",
            "range": "stddev: 1.429493204365507e-7",
            "extra": "mean: 791.0559892423904 nsec\nrounds: 99001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 246.0108201403227,
            "unit": "iter/sec",
            "range": "stddev: 0.0001414840849040525",
            "extra": "mean: 4.064861860261299 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 64.92705473915443,
            "unit": "iter/sec",
            "range": "stddev: 0.019783882242229225",
            "extra": "mean: 15.401899932432134 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 212.99290458439492,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907992582432718",
            "extra": "mean: 4.69499207943693 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9383.734478023418,
            "unit": "iter/sec",
            "range": "stddev: 0.000003997607678285677",
            "extra": "mean: 106.56738021967553 usec\nrounds: 4550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 235.5648003500257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007738579027308083",
            "extra": "mean: 4.245116411764831 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9164832.59979567,
            "unit": "iter/sec",
            "range": "stddev: 7.189917477580782e-9",
            "extra": "mean: 109.11274037040909 nsec\nrounds: 86200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3480.125385926481,
            "unit": "iter/sec",
            "range": "stddev: 0.000064211394874009",
            "extra": "mean: 287.34596863778785 usec\nrounds: 1116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3931.609320027969,
            "unit": "iter/sec",
            "range": "stddev: 0.0000618494089704356",
            "extra": "mean: 254.34877135576795 usec\nrounds: 1194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 77.84463985364334,
            "unit": "iter/sec",
            "range": "stddev: 0.000942550682053541",
            "extra": "mean: 12.846099640002347 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.26073066696902,
            "unit": "iter/sec",
            "range": "stddev: 0.001000112380146232",
            "extra": "mean: 13.11290871794823 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 61.81021519214305,
            "unit": "iter/sec",
            "range": "stddev: 0.021049619169910914",
            "extra": "mean: 16.17855554929558 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6392959281943762,
            "unit": "iter/sec",
            "range": "stddev: 0.0036014011382273247",
            "extra": "mean: 1.5642208184000084 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4355084.502439543,
            "unit": "iter/sec",
            "range": "stddev: 3.000285982187024e-8",
            "extra": "mean: 229.6166697662118 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9374.235908241666,
            "unit": "iter/sec",
            "range": "stddev: 0.000004646145365168545",
            "extra": "mean: 106.67536104151351 usec\nrounds: 1961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 531.3228493440544,
            "unit": "iter/sec",
            "range": "stddev: 0.00012235323103800227",
            "extra": "mean: 1.882094852940264 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 78.2662936701145,
            "unit": "iter/sec",
            "range": "stddev: 0.0003870037527962815",
            "extra": "mean: 12.776892236840952 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 74.49562824081937,
            "unit": "iter/sec",
            "range": "stddev: 0.0008875455596704778",
            "extra": "mean: 13.42360650704677 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 501077.49824717233,
            "unit": "iter/sec",
            "range": "stddev: 4.185920974612899e-7",
            "extra": "mean: 1.9956992750584828 usec\nrounds: 20833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 335749.0445672641,
            "unit": "iter/sec",
            "range": "stddev: 7.87240106091969e-7",
            "extra": "mean: 2.978415028072134 usec\nrounds: 1730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4497.686035565641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007542586303449527",
            "extra": "mean: 222.33655086025527 usec\nrounds: 2035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.27579996726249,
            "unit": "iter/sec",
            "range": "stddev: 0.0008203805915386844",
            "extra": "mean: 49.319878950009866 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 123.74036744455319,
            "unit": "iter/sec",
            "range": "stddev: 0.00017489817369142194",
            "extra": "mean: 8.081437130434335 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.92678409488221,
            "unit": "iter/sec",
            "range": "stddev: 0.0008669074700364362",
            "extra": "mean: 14.508148220341093 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4625.18313583454,
            "unit": "iter/sec",
            "range": "stddev: 0.00007388273454350094",
            "extra": "mean: 216.20765505527729 usec\nrounds: 2928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.403403723950618,
            "unit": "iter/sec",
            "range": "stddev: 0.0009999223198700372",
            "extra": "mean: 34.00966804348054 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117881.07631904185,
            "unit": "iter/sec",
            "range": "stddev: 8.215107479842979e-7",
            "extra": "mean: 8.483125801239954 usec\nrounds: 27623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.820266427114724,
            "unit": "iter/sec",
            "range": "stddev: 0.0012579147920010946",
            "extra": "mean: 22.82049110000912 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.92608094172134,
            "unit": "iter/sec",
            "range": "stddev: 0.001018174919003108",
            "extra": "mean: 12.832674092103659 msec\nrounds: 76"
          }
        ]
      }
    ]
  }
}