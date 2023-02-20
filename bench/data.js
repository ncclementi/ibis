window.BENCHMARK_DATA = {
  "lastUpdate": 1676906602862,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "783eaafddf0572cb0eb398fc8bb90ec319eb91ac",
          "message": "chore: address review comments",
          "timestamp": "2023-02-20T10:18:21-05:00",
          "tree_id": "315cd40fac61afcf96ce1d423fb5a6c7a4dea650",
          "url": "https://github.com/ibis-project/ibis/commit/783eaafddf0572cb0eb398fc8bb90ec319eb91ac"
        },
        "date": 1676906526689,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7178951248319209,
            "unit": "iter/sec",
            "range": "stddev: 0.005325961761251441",
            "extra": "mean: 1.39296112400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3244.5246754173904,
            "unit": "iter/sec",
            "range": "stddev: 0.0029448416211761723",
            "extra": "mean: 308.211556403514 usec\nrounds: 656"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4197661.363200108,
            "unit": "iter/sec",
            "range": "stddev: 1.0126146077040412e-8",
            "extra": "mean: 238.22788773957845 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.03041069137741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007386761741150046",
            "extra": "mean: 10.749173228068804 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.95944447681306,
            "unit": "iter/sec",
            "range": "stddev: 0.00034916744670347537",
            "extra": "mean: 17.55635100000103 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 214.2001139611042,
            "unit": "iter/sec",
            "range": "stddev: 0.00031673221069167436",
            "extra": "mean: 4.668531596493857 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1670431.311992551,
            "unit": "iter/sec",
            "range": "stddev: 1.4317369576247133e-7",
            "extra": "mean: 598.6477820552608 nsec\nrounds: 105253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.62794175700836,
            "unit": "iter/sec",
            "range": "stddev: 0.00021302364562705004",
            "extra": "mean: 4.2987097441826245 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.158571463242346,
            "unit": "iter/sec",
            "range": "stddev: 0.0055205275959705835",
            "extra": "mean: 463.26935060001233 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 143.74508119240738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005976007946130999",
            "extra": "mean: 6.956759784089364 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.84790783994904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535886171479075",
            "extra": "mean: 11.12991970588068 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.76424680403775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007005527301906767",
            "extra": "mean: 30.521073961534302 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 612.399988071958,
            "unit": "iter/sec",
            "range": "stddev: 0.00009102223101820996",
            "extra": "mean: 1.6329196921579598 msec\nrounds: 510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.65999192743284,
            "unit": "iter/sec",
            "range": "stddev: 0.00058167969980985",
            "extra": "mean: 12.09775099999888 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5102.530680124638,
            "unit": "iter/sec",
            "range": "stddev: 0.00004749897261003008",
            "extra": "mean: 195.98118319899515 usec\nrounds: 1976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 245.96962717202803,
            "unit": "iter/sec",
            "range": "stddev: 0.00025615093525549606",
            "extra": "mean: 4.065542609863017 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4392.146656889784,
            "unit": "iter/sec",
            "range": "stddev: 0.00005472254642474469",
            "extra": "mean: 227.67910047615104 usec\nrounds: 2309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.09531983243974,
            "unit": "iter/sec",
            "range": "stddev: 0.0002343786789457894",
            "extra": "mean: 7.087407301585678 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.804812600100747,
            "unit": "iter/sec",
            "range": "stddev: 0.027153583112309237",
            "extra": "mean: 1.2425252783999894 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.42187234412302,
            "unit": "iter/sec",
            "range": "stddev: 0.00008475352103112427",
            "extra": "mean: 15.285407833330408 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 151.74922047786077,
            "unit": "iter/sec",
            "range": "stddev: 0.0006502342154794155",
            "extra": "mean: 6.589819683099417 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5124.1797264442575,
            "unit": "iter/sec",
            "range": "stddev: 0.00012910172576910045",
            "extra": "mean: 195.1531861459345 usec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.04205961349717,
            "unit": "iter/sec",
            "range": "stddev: 0.0006360727854120327",
            "extra": "mean: 6.408528588233931 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18562.913469641204,
            "unit": "iter/sec",
            "range": "stddev: 0.000016783897372966512",
            "extra": "mean: 53.87085392793832 usec\nrounds: 7332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 155.08227247856118,
            "unit": "iter/sec",
            "range": "stddev: 0.0006211961997827753",
            "extra": "mean: 6.448190267125739 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 243.1070105943311,
            "unit": "iter/sec",
            "range": "stddev: 0.00025502751608588216",
            "extra": "mean: 4.113414901344349 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10746.605459896327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021335819430785827",
            "extra": "mean: 93.05263915491759 usec\nrounds: 5113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121724.38384712535,
            "unit": "iter/sec",
            "range": "stddev: 2.864024609394419e-7",
            "extra": "mean: 8.215280853307979 usec\nrounds: 31447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.7610491819972,
            "unit": "iter/sec",
            "range": "stddev: 0.01792646635054156",
            "extra": "mean: 13.027440487805768 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9358968.711385166,
            "unit": "iter/sec",
            "range": "stddev: 6.860040744172327e-9",
            "extra": "mean: 106.84937954583123 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4344.0033520232755,
            "unit": "iter/sec",
            "range": "stddev: 0.00013927732237472028",
            "extra": "mean: 230.20240063448318 usec\nrounds: 1575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5431147.403789822,
            "unit": "iter/sec",
            "range": "stddev: 4.4427228035702015e-9",
            "extra": "mean: 184.1231558735066 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.015187657675174,
            "unit": "iter/sec",
            "range": "stddev: 0.02804653389172284",
            "extra": "mean: 33.316466696962 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.77686195805998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006963363250237215",
            "extra": "mean: 11.392523925927115 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1342240936774292,
            "unit": "iter/sec",
            "range": "stddev: 0.0704868544339496",
            "extra": "mean: 7.450227247600014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.89852992736724,
            "unit": "iter/sec",
            "range": "stddev: 0.000022764732773255436",
            "extra": "mean: 5.817385410000497 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.51934608490444,
            "unit": "iter/sec",
            "range": "stddev: 0.00005656915578028816",
            "extra": "mean: 11.296965513514271 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.1347456178452,
            "unit": "iter/sec",
            "range": "stddev: 0.0005804569176451567",
            "extra": "mean: 12.175115323943155 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2083181.4535727557,
            "unit": "iter/sec",
            "range": "stddev: 2.262335706979288e-8",
            "extra": "mean: 480.0349956482243 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 596615.8582833575,
            "unit": "iter/sec",
            "range": "stddev: 1.418502121829314e-7",
            "extra": "mean: 1.6761203815086305 usec\nrounds: 19920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.24344243435403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006876991088613201",
            "extra": "mean: 41.24826755555785 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5274.928656834923,
            "unit": "iter/sec",
            "range": "stddev: 0.00009125779478035746",
            "extra": "mean: 189.5760236878773 usec\nrounds: 2153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4763.367126385948,
            "unit": "iter/sec",
            "range": "stddev: 0.000049634840362161775",
            "extra": "mean: 209.93552952503956 usec\nrounds: 3116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.9946493606547,
            "unit": "iter/sec",
            "range": "stddev: 0.00022940044186241183",
            "extra": "mean: 4.115316952990975 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 385463.52883011027,
            "unit": "iter/sec",
            "range": "stddev: 4.456218327083467e-7",
            "extra": "mean: 2.5942791605603275 usec\nrounds: 2049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.92809635340583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006930005331106735",
            "extra": "mean: 11.372929034887102 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 967.1271624737867,
            "unit": "iter/sec",
            "range": "stddev: 0.00001628329408396491",
            "extra": "mean: 1.0339901915712189 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.0866715291253,
            "unit": "iter/sec",
            "range": "stddev: 0.000014491788097309464",
            "extra": "mean: 3.8155316871536202 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 155.30419857076402,
            "unit": "iter/sec",
            "range": "stddev: 0.0007084946608138598",
            "extra": "mean: 6.43897595301876 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8192480100788972,
            "unit": "iter/sec",
            "range": "stddev: 0.0183502631192691",
            "extra": "mean: 1.2206315886000083 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.20773394261303,
            "unit": "iter/sec",
            "range": "stddev: 0.0012069533918895627",
            "extra": "mean: 17.179847629627695 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.45143571878955,
            "unit": "iter/sec",
            "range": "stddev: 0.00009430462612365439",
            "extra": "mean: 10.055159010751899 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 278.4982090088278,
            "unit": "iter/sec",
            "range": "stddev: 0.000028156255457568235",
            "extra": "mean: 3.590687364055192 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 272.0511850183468,
            "unit": "iter/sec",
            "range": "stddev: 0.000036645528799172296",
            "extra": "mean: 3.6757788793772805 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 515.5389922330754,
            "unit": "iter/sec",
            "range": "stddev: 0.000021763691439837862",
            "extra": "mean: 1.9397174899777505 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 404.139444896623,
            "unit": "iter/sec",
            "range": "stddev: 0.000028649745530217147",
            "extra": "mean: 2.474393461533544 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.76466122220035,
            "unit": "iter/sec",
            "range": "stddev: 0.000537921130966796",
            "extra": "mean: 24.531051406246007 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4371072.556747566,
            "unit": "iter/sec",
            "range": "stddev: 9.091435906640568e-9",
            "extra": "mean: 228.77680180736675 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.4305623590975,
            "unit": "iter/sec",
            "range": "stddev: 0.00012020145868816374",
            "extra": "mean: 9.858961409083701 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 246.63468094097854,
            "unit": "iter/sec",
            "range": "stddev: 0.00020484966012087021",
            "extra": "mean: 4.054579818964338 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 154.6509561358261,
            "unit": "iter/sec",
            "range": "stddev: 0.0006755239326300381",
            "extra": "mean: 6.466174054053211 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 119.4130997520958,
            "unit": "iter/sec",
            "range": "stddev: 0.014229811425829788",
            "extra": "mean: 8.37429061029336 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.453324124527422,
            "unit": "iter/sec",
            "range": "stddev: 0.00008356037430168926",
            "extra": "mean: 74.33107169230023 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5121100496661717,
            "unit": "iter/sec",
            "range": "stddev: 0.0018830765828980905",
            "extra": "mean: 661.327527200001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.3402396817812,
            "unit": "iter/sec",
            "range": "stddev: 0.0006457305241597636",
            "extra": "mean: 10.829514883718682 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.922391832760366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006650583790299159",
            "extra": "mean: 203.15327060000072 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 234.99286183710404,
            "unit": "iter/sec",
            "range": "stddev: 0.00022283450674644932",
            "extra": "mean: 4.255448408867821 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9394.019670728627,
            "unit": "iter/sec",
            "range": "stddev: 0.00001692867851823103",
            "extra": "mean: 106.4507032187678 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 241.04420275403393,
            "unit": "iter/sec",
            "range": "stddev: 0.00009554615634187058",
            "extra": "mean: 4.148616679325073 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.94692873766671,
            "unit": "iter/sec",
            "range": "stddev: 0.00008649099062966229",
            "extra": "mean: 14.717368666667122 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10435.954630728187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017073643600876006",
            "extra": "mean: 95.82257065928076 usec\nrounds: 6128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1453582.8361782117,
            "unit": "iter/sec",
            "range": "stddev: 9.0183527839325e-8",
            "extra": "mean: 687.9552888978927 nsec\nrounds: 136968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1388.7160004075006,
            "unit": "iter/sec",
            "range": "stddev: 0.000033324207033129316",
            "extra": "mean: 720.0896365466826 usec\nrounds: 996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.85866463023447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000836115197169318",
            "extra": "mean: 6.628721011491601 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2119756.911128562,
            "unit": "iter/sec",
            "range": "stddev: 1.931295905474159e-8",
            "extra": "mean: 471.7522064677684 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 137.75163619514424,
            "unit": "iter/sec",
            "range": "stddev: 0.00016225421990493033",
            "extra": "mean: 7.259441902986632 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.035158720939487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681416196611325",
            "extra": "mean: 110.67874188888835 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58032.9428173639,
            "unit": "iter/sec",
            "range": "stddev: 5.474164478371534e-7",
            "extra": "mean: 17.2315921173791 usec\nrounds: 12788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.74581110199269,
            "unit": "iter/sec",
            "range": "stddev: 0.0014093469577832467",
            "extra": "mean: 26.49300600000109 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.00950121468823,
            "unit": "iter/sec",
            "range": "stddev: 0.0001630682063096868",
            "extra": "mean: 8.619983617974453 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.576998361605426,
            "unit": "iter/sec",
            "range": "stddev: 0.015207307416272664",
            "extra": "mean: 1.7331071741999835 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4013.582346304354,
            "unit": "iter/sec",
            "range": "stddev: 0.000020830147619704796",
            "extra": "mean: 249.15397610336433 usec\nrounds: 1925"
          }
        ]
      }
    ]
  }
}