window.BENCHMARK_DATA = {
  "lastUpdate": 1678185460720,
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
          "id": "d0c2dc98e11dce96cee72496c4772dedf16cf840",
          "message": "chore(flake/poetry2nix): `cb66d75f` -> `4c424edc`",
          "timestamp": "2023-03-07T10:31:03Z",
          "tree_id": "34877d9ab55a682b241d8922f9eb56d037da209f",
          "url": "https://github.com/ibis-project/ibis/commit/d0c2dc98e11dce96cee72496c4772dedf16cf840"
        },
        "date": 1678185362870,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.74457454990726,
            "unit": "iter/sec",
            "range": "stddev: 0.01172154493047843",
            "extra": "mean: 13.746729652174107 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.57338431165499,
            "unit": "iter/sec",
            "range": "stddev: 0.0008543434636600357",
            "extra": "mean: 13.409610000007888 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.06378520208617,
            "unit": "iter/sec",
            "range": "stddev: 0.001445185970417566",
            "extra": "mean: 13.146860852943371 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 89.19660277178815,
            "unit": "iter/sec",
            "range": "stddev: 0.001386985089241026",
            "extra": "mean: 11.211189315791838 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4641451.6884585265,
            "unit": "iter/sec",
            "range": "stddev: 5.716630740284912e-7",
            "extra": "mean: 215.44983490550814 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 60.409996886686635,
            "unit": "iter/sec",
            "range": "stddev: 0.020441329714944365",
            "extra": "mean: 16.55355158974331 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.77067079571755,
            "unit": "iter/sec",
            "range": "stddev: 0.0037542082251079455",
            "extra": "mean: 56.27249592857148 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 221.20393828447686,
            "unit": "iter/sec",
            "range": "stddev: 0.0005810156845392512",
            "extra": "mean: 4.520715172412352 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.532412320205648,
            "unit": "iter/sec",
            "range": "stddev: 0.002424246067245355",
            "extra": "mean: 32.7520796428595 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 525.755380069213,
            "unit": "iter/sec",
            "range": "stddev: 0.00027573691351969387",
            "extra": "mean: 1.9020252343748822 msec\nrounds: 320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 91.21472485620741,
            "unit": "iter/sec",
            "range": "stddev: 0.0017244627278863438",
            "extra": "mean: 10.963142207318157 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59582.474389023395,
            "unit": "iter/sec",
            "range": "stddev: 0.000019571964208693322",
            "extra": "mean: 16.783458731016136 usec\nrounds: 4192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0863199816826596,
            "unit": "iter/sec",
            "range": "stddev: 0.011980747382318956",
            "extra": "mean: 920.5390832000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3783.1561091744243,
            "unit": "iter/sec",
            "range": "stddev: 0.00012323432700184534",
            "extra": "mean: 264.3295627095399 usec\nrounds: 1491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.69682816444947,
            "unit": "iter/sec",
            "range": "stddev: 0.00042178754575968415",
            "extra": "mean: 3.7779069999989767 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.08808823634529,
            "unit": "iter/sec",
            "range": "stddev: 0.0017480220922907784",
            "extra": "mean: 11.224845204300049 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 159.65832456250743,
            "unit": "iter/sec",
            "range": "stddev: 0.004464939504301851",
            "extra": "mean: 6.263375259261802 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.305331717152455,
            "unit": "iter/sec",
            "range": "stddev: 0.0020750336779826613",
            "extra": "mean: 25.441840999998735 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1598152.0148814963,
            "unit": "iter/sec",
            "range": "stddev: 0.00000210703075193416",
            "extra": "mean: 625.7227039032019 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1536047.9183315046,
            "unit": "iter/sec",
            "range": "stddev: 0.000005627284908521001",
            "extra": "mean: 651.0213568638054 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3420.5040844862247,
            "unit": "iter/sec",
            "range": "stddev: 0.00017870028288989798",
            "extra": "mean: 292.35456976517673 usec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3683.3646945520472,
            "unit": "iter/sec",
            "range": "stddev: 0.00012662918227101497",
            "extra": "mean: 271.4909010989516 usec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 121.63957648293471,
            "unit": "iter/sec",
            "range": "stddev: 0.0006658226917268267",
            "extra": "mean: 8.221008564102439 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 113493.14706581355,
            "unit": "iter/sec",
            "range": "stddev: 0.00002210444761698523",
            "extra": "mean: 8.811104686524462 usec\nrounds: 29851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 90.65540720464473,
            "unit": "iter/sec",
            "range": "stddev: 0.001430771448678062",
            "extra": "mean: 11.030781625001238 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 211.464877118787,
            "unit": "iter/sec",
            "range": "stddev: 0.0006737955584632823",
            "extra": "mean: 4.728917698414125 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 214.23124588368714,
            "unit": "iter/sec",
            "range": "stddev: 0.0008248199939579279",
            "extra": "mean: 4.667853169014063 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 353412.70835177304,
            "unit": "iter/sec",
            "range": "stddev: 0.000003415154738903803",
            "extra": "mean: 2.8295530306868293 usec\nrounds: 396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4223743.353760045,
            "unit": "iter/sec",
            "range": "stddev: 3.7437495056361323e-7",
            "extra": "mean: 236.75680936206564 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 79.60658496469476,
            "unit": "iter/sec",
            "range": "stddev: 0.0012556165355276808",
            "extra": "mean: 12.561774888892627 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3841.8524464251623,
            "unit": "iter/sec",
            "range": "stddev: 0.00015414923135341474",
            "extra": "mean: 260.2911001775975 usec\nrounds: 2815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5367.797193955111,
            "unit": "iter/sec",
            "range": "stddev: 0.00006182407252629428",
            "extra": "mean: 186.29615908852512 usec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 210.6290218154488,
            "unit": "iter/sec",
            "range": "stddev: 0.0007852744751543254",
            "extra": "mean: 4.747683825243184 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.647496757163836,
            "unit": "iter/sec",
            "range": "stddev: 0.0034235982195109107",
            "extra": "mean: 36.16963983333813 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 124.90756962649996,
            "unit": "iter/sec",
            "range": "stddev: 0.00081540137747919",
            "extra": "mean: 8.005919921348333 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 104.9187608390244,
            "unit": "iter/sec",
            "range": "stddev: 0.0009981416354152965",
            "extra": "mean: 9.531183860761452 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5058196124570358,
            "unit": "iter/sec",
            "range": "stddev: 0.03713329353410087",
            "extra": "mean: 1.976989376000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 392.7303081996198,
            "unit": "iter/sec",
            "range": "stddev: 0.0004083247695750141",
            "extra": "mean: 2.5462766155845364 msec\nrounds: 385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5247730328767365,
            "unit": "iter/sec",
            "range": "stddev: 0.018875587971192653",
            "extra": "mean: 1.905585724399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.35231167575563,
            "unit": "iter/sec",
            "range": "stddev: 0.004467154909585802",
            "extra": "mean: 8.594586438357549 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.04305136137572,
            "unit": "iter/sec",
            "range": "stddev: 0.001228672758245733",
            "extra": "mean: 11.758750232875267 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.865273755774457,
            "unit": "iter/sec",
            "range": "stddev: 0.0025047336659322246",
            "extra": "mean: 84.27955566666394 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.14638570978563,
            "unit": "iter/sec",
            "range": "stddev: 0.0016221964847245177",
            "extra": "mean: 12.173390117647934 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 50.53726724721125,
            "unit": "iter/sec",
            "range": "stddev: 0.0020959605630389696",
            "extra": "mean: 19.78737779999733 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 197.1864904982969,
            "unit": "iter/sec",
            "range": "stddev: 0.0007053224479735095",
            "extra": "mean: 5.071341335164322 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3633.961875446733,
            "unit": "iter/sec",
            "range": "stddev: 0.00014431160261295253",
            "extra": "mean: 275.18175321447677 usec\nrounds: 2022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 78.4953335130782,
            "unit": "iter/sec",
            "range": "stddev: 0.0014020289218052422",
            "extra": "mean: 12.739610818181808 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8537.067316124963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006345815271177124",
            "extra": "mean: 117.13624397820811 usec\nrounds: 2906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3806.7359748696827,
            "unit": "iter/sec",
            "range": "stddev: 0.00011196236651803734",
            "extra": "mean: 262.6922399140732 usec\nrounds: 1859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 892.7396233325179,
            "unit": "iter/sec",
            "range": "stddev: 0.0002312621319127029",
            "extra": "mean: 1.1201474358974777 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 108.51866766336805,
            "unit": "iter/sec",
            "range": "stddev: 0.0010460144117888698",
            "extra": "mean: 9.215004399999316 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5392202270533292,
            "unit": "iter/sec",
            "range": "stddev: 0.010168837717705166",
            "extra": "mean: 1.854529837399997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 215.52888467258154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006557467811769395",
            "extra": "mean: 4.639749338095169 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 598319.3794171258,
            "unit": "iter/sec",
            "range": "stddev: 0.000008030932433175457",
            "extra": "mean: 1.6713481702267203 usec\nrounds: 18692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.0728595929725,
            "unit": "iter/sec",
            "range": "stddev: 0.0016256329005557102",
            "extra": "mean: 36.93736144000013 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.183918629771552,
            "unit": "iter/sec",
            "range": "stddev: 0.007031702694174542",
            "extra": "mean: 239.01038439999525 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.10148752065119,
            "unit": "iter/sec",
            "range": "stddev: 0.0012716989446126274",
            "extra": "mean: 15.128252593220136 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.467991025238796,
            "unit": "iter/sec",
            "range": "stddev: 0.0018396361223601777",
            "extra": "mean: 21.066827948718085 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 141.6288094220775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006672444519074806",
            "extra": "mean: 7.060710346154455 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 86.8887566794507,
            "unit": "iter/sec",
            "range": "stddev: 0.0009655383939719962",
            "extra": "mean: 11.508968918604646 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9070187.990582015,
            "unit": "iter/sec",
            "range": "stddev: 2.46583079658872e-7",
            "extra": "mean: 110.25129810305502 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3927.8055103215943,
            "unit": "iter/sec",
            "range": "stddev: 0.00011253182728582337",
            "extra": "mean: 254.59509066122874 usec\nrounds: 1467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.500739898767422,
            "unit": "iter/sec",
            "range": "stddev: 0.006846650522533478",
            "extra": "mean: 133.32018087499975 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 217.79952123736655,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792118068892794",
            "extra": "mean: 4.5913783203874 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6247312071499158,
            "unit": "iter/sec",
            "range": "stddev: 0.017194481743188505",
            "extra": "mean: 615.4864235999923 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9510.91843127013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000631227849829257",
            "extra": "mean: 105.14231693042241 usec\nrounds: 5121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.79037749736814,
            "unit": "iter/sec",
            "range": "stddev: 0.001459668708504459",
            "extra": "mean: 11.262481680851524 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 81.96715440682215,
            "unit": "iter/sec",
            "range": "stddev: 0.0013417059664849824",
            "extra": "mean: 12.200008738094851 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1209787.054754679,
            "unit": "iter/sec",
            "range": "stddev: 0.000004417566033025946",
            "extra": "mean: 826.591751060504 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 232.8005842625308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006985594915351598",
            "extra": "mean: 4.295521865496236 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 205.06671215633904,
            "unit": "iter/sec",
            "range": "stddev: 0.0010041539607262256",
            "extra": "mean: 4.876461857142464 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1602044.720442496,
            "unit": "iter/sec",
            "range": "stddev: 0.000001403863662746021",
            "extra": "mean: 624.20230049745 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 72.29490268121164,
            "unit": "iter/sec",
            "range": "stddev: 0.0010091168131502143",
            "extra": "mean: 13.832233849315147 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 565.2840891883733,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998645381860766",
            "extra": "mean: 1.7690220176474194 msec\nrounds: 510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.31455642953317,
            "unit": "iter/sec",
            "range": "stddev: 0.0010166433575296574",
            "extra": "mean: 19.874964045455233 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3481.494018320804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527439176779203",
            "extra": "mean: 287.23300822510686 usec\nrounds: 1459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 88.28869007287396,
            "unit": "iter/sec",
            "range": "stddev: 0.0012495164432539446",
            "extra": "mean: 11.326479067416162 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.67932045742587,
            "unit": "iter/sec",
            "range": "stddev: 0.0017519306519909077",
            "extra": "mean: 14.35146028169148 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 168.49046331855237,
            "unit": "iter/sec",
            "range": "stddev: 0.016947528716672332",
            "extra": "mean: 5.935054010204569 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.605350268655464,
            "unit": "iter/sec",
            "range": "stddev: 0.0018756203058172569",
            "extra": "mean: 36.22486185713975 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1269.536824122211,
            "unit": "iter/sec",
            "range": "stddev: 0.00016222567736575788",
            "extra": "mean: 787.6888491922434 usec\nrounds: 1114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.56950878599532,
            "unit": "iter/sec",
            "range": "stddev: 0.0014214320885300915",
            "extra": "mean: 11.551411276596893 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5047285.974366153,
            "unit": "iter/sec",
            "range": "stddev: 2.353740908057283e-7",
            "extra": "mean: 198.1262811496541 nsec\nrounds: 28170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.73070608286504,
            "unit": "iter/sec",
            "range": "stddev: 0.0016472008646167895",
            "extra": "mean: 13.381380324322794 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9802.497418609291,
            "unit": "iter/sec",
            "range": "stddev: 0.00005265190156865875",
            "extra": "mean: 102.01481900944717 usec\nrounds: 5492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5165468191645143,
            "unit": "iter/sec",
            "range": "stddev: 0.01864553844688699",
            "extra": "mean: 1.935932935599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0967598383211993,
            "unit": "iter/sec",
            "range": "stddev: 0.19111197068659833",
            "extra": "mean: 10.334866380000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3228.0226362209796,
            "unit": "iter/sec",
            "range": "stddev: 0.00019437082164182825",
            "extra": "mean: 309.7871708764385 usec\nrounds: 1861"
          }
        ]
      }
    ]
  }
}