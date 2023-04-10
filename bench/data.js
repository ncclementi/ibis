window.BENCHMARK_DATA = {
  "lastUpdate": 1681163186857,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "6b2cbaaa33f0c9cc7b0174e082d5155f045cc2fe",
          "message": "docs: move conda before nix in dev setup instructions",
          "timestamp": "2023-04-10T16:41:33-05:00",
          "tree_id": "7ec12c8587c4f0139a250bb34ce64379f2f5d4ce",
          "url": "https://github.com/ibis-project/ibis/commit/6b2cbaaa33f0c9cc7b0174e082d5155f045cc2fe"
        },
        "date": 1681163108762,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.916697569519537,
            "unit": "iter/sec",
            "range": "stddev: 0.007143249215559431",
            "extra": "mean: 1.0908723152000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11859.709192465667,
            "unit": "iter/sec",
            "range": "stddev: 0.000037879755926436716",
            "extra": "mean: 84.31909954717003 usec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.41339853781676,
            "unit": "iter/sec",
            "range": "stddev: 0.0006000975640833633",
            "extra": "mean: 16.283091700001364 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11908083.672538606,
            "unit": "iter/sec",
            "range": "stddev: 3.479292649505014e-9",
            "extra": "mean: 83.9765681446371 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.484033310388,
            "unit": "iter/sec",
            "range": "stddev: 0.0003250650683098408",
            "extra": "mean: 3.6699398047330534 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.01847304610196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008140595987427703",
            "extra": "mean: 10.524269312503165 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 748658.690149849,
            "unit": "iter/sec",
            "range": "stddev: 2.971380934561864e-7",
            "extra": "mean: 1.3357221563805577 usec\nrounds: 22779"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.06330903420354,
            "unit": "iter/sec",
            "range": "stddev: 0.00020555413070020906",
            "extra": "mean: 9.168986424998238 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1991794.7628569566,
            "unit": "iter/sec",
            "range": "stddev: 8.37582185560344e-8",
            "extra": "mean: 502.05975969413487 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.615342208032136,
            "unit": "iter/sec",
            "range": "stddev: 0.0003399759325665872",
            "extra": "mean: 178.08353666667168 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4512.239555416,
            "unit": "iter/sec",
            "range": "stddev: 0.00003054684631118054",
            "extra": "mean: 221.6194392426947 usec\nrounds: 1004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490800.0084610004,
            "unit": "iter/sec",
            "range": "stddev: 2.0221247397746684e-7",
            "extra": "mean: 2.0374897774262393 usec\nrounds: 2201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.91403098038766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007203512227923474",
            "extra": "mean: 10.318423347826366 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.26818026425322,
            "unit": "iter/sec",
            "range": "stddev: 0.0003123233669449887",
            "extra": "mean: 11.078100800000357 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 258.29157867090083,
            "unit": "iter/sec",
            "range": "stddev: 0.0068547911195782265",
            "extra": "mean: 3.8715935112779585 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.97723703268426,
            "unit": "iter/sec",
            "range": "stddev: 0.00010058981319651925",
            "extra": "mean: 8.266017843752138 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.593829081098756,
            "unit": "iter/sec",
            "range": "stddev: 0.002307893376559443",
            "extra": "mean: 385.5304141999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 81.8066461979134,
            "unit": "iter/sec",
            "range": "stddev: 0.016050687024740166",
            "extra": "mean: 12.22394568750218 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.53038062652102,
            "unit": "iter/sec",
            "range": "stddev: 0.0007062076654824212",
            "extra": "mean: 10.149153932435272 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1790.7429097812603,
            "unit": "iter/sec",
            "range": "stddev: 0.000007615452055048522",
            "extra": "mean: 558.4274518345853 usec\nrounds: 1308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2183.520960840088,
            "unit": "iter/sec",
            "range": "stddev: 0.00008276260280043591",
            "extra": "mean: 457.9759104374524 usec\nrounds: 1351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6130745.847732235,
            "unit": "iter/sec",
            "range": "stddev: 7.083996593518481e-8",
            "extra": "mean: 163.11229087565266 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16981483404997358,
            "unit": "iter/sec",
            "range": "stddev: 0.07342675117501217",
            "extra": "mean: 5.888767053800007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13906.330869289593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014852191256649327",
            "extra": "mean: 71.90969418168929 usec\nrounds: 6239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.07460084458371,
            "unit": "iter/sec",
            "range": "stddev: 0.0002279099851617903",
            "extra": "mean: 20.801004739130647 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.80224619779811,
            "unit": "iter/sec",
            "range": "stddev: 0.0006844085178333569",
            "extra": "mean: 11.26097641463483 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 244.9943706046604,
            "unit": "iter/sec",
            "range": "stddev: 0.0005199349358465934",
            "extra": "mean: 4.081726439395084 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.08976899168331,
            "unit": "iter/sec",
            "range": "stddev: 0.013826613703455682",
            "extra": "mean: 11.892053123595838 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8357.66235013253,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293678569614219",
            "extra": "mean: 119.65068198575199 usec\nrounds: 4069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147222.64897822755,
            "unit": "iter/sec",
            "range": "stddev: 3.315419921013193e-7",
            "extra": "mean: 6.792433140826641 usec\nrounds: 38611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.15856480340574,
            "unit": "iter/sec",
            "range": "stddev: 0.0035554603930127563",
            "extra": "mean: 6.054787417112377 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.279563495437,
            "unit": "iter/sec",
            "range": "stddev: 0.00041152511764678683",
            "extra": "mean: 18.423140047617824 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.22024975744682,
            "unit": "iter/sec",
            "range": "stddev: 0.0036403641019153057",
            "extra": "mean: 4.2694856701569455 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.30086410914546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001446414328047308",
            "extra": "mean: 6.199594810126636 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1927516.777490793,
            "unit": "iter/sec",
            "range": "stddev: 8.879677486157765e-8",
            "extra": "mean: 518.8022286902126 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2113.003234248111,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268886452937927",
            "extra": "mean: 473.26004229039387 usec\nrounds: 1135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 74.69317019363064,
            "unit": "iter/sec",
            "range": "stddev: 0.026727875646218858",
            "extra": "mean: 13.388104928571819 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.0086295625225,
            "unit": "iter/sec",
            "range": "stddev: 0.00028730599478622986",
            "extra": "mean: 3.5586095756447467 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.98182747585884,
            "unit": "iter/sec",
            "range": "stddev: 0.00029946612475542075",
            "extra": "mean: 3.5589490216619697 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2147.8892894369687,
            "unit": "iter/sec",
            "range": "stddev: 0.00008265184861883738",
            "extra": "mean: 465.5733444539557 usec\nrounds: 1199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.6412212164132,
            "unit": "iter/sec",
            "range": "stddev: 0.00007274803492318548",
            "extra": "mean: 7.265265384616872 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.17116735985492,
            "unit": "iter/sec",
            "range": "stddev: 0.0008192579854576805",
            "extra": "mean: 10.186290199997453 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.13654951905443,
            "unit": "iter/sec",
            "range": "stddev: 0.0001935719286711129",
            "extra": "mean: 10.189883431818007 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.35902331872611,
            "unit": "iter/sec",
            "range": "stddev: 0.023843373295124363",
            "extra": "mean: 26.767295051280225 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1165.055379333395,
            "unit": "iter/sec",
            "range": "stddev: 0.000014880970163141463",
            "extra": "mean: 858.3282972970486 usec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7788919628775827,
            "unit": "iter/sec",
            "range": "stddev: 0.0017333337779328391",
            "extra": "mean: 1.2838751042000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.12698411343959,
            "unit": "iter/sec",
            "range": "stddev: 0.0009077464470717234",
            "extra": "mean: 10.51226430985653 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.60288361041398,
            "unit": "iter/sec",
            "range": "stddev: 0.0003257926942976962",
            "extra": "mean: 19.37876200000168 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6529817.382069072,
            "unit": "iter/sec",
            "range": "stddev: 1.3281619089419419e-8",
            "extra": "mean: 153.14363962852696 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.565418464207157,
            "unit": "iter/sec",
            "range": "stddev: 0.00008233273988714795",
            "extra": "mean: 64.24498013333277 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.12398510195442,
            "unit": "iter/sec",
            "range": "stddev: 0.000049486867691775974",
            "extra": "mean: 6.168118797296605 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.2003140204223,
            "unit": "iter/sec",
            "range": "stddev: 0.000028523647045994354",
            "extra": "mean: 1.847744678068063 msec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.78172454426759,
            "unit": "iter/sec",
            "range": "stddev: 0.0008596439088557282",
            "extra": "mean: 10.55055713333167 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1801880.9229213188,
            "unit": "iter/sec",
            "range": "stddev: 1.1281198401495314e-7",
            "extra": "mean: 554.9756297873109 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12530.361230659799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017081940657750904",
            "extra": "mean: 79.80615894401825 usec\nrounds: 5266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2111.055456981122,
            "unit": "iter/sec",
            "range": "stddev: 0.00011828656397790378",
            "extra": "mean: 473.6966983472962 usec\nrounds: 1210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.33023561515597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002891419247620798",
            "extra": "mean: 3.5928543580248626 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6164648333535123,
            "unit": "iter/sec",
            "range": "stddev: 0.0013423436270067976",
            "extra": "mean: 618.6339345999897 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 280.66205998803696,
            "unit": "iter/sec",
            "range": "stddev: 0.00025709964031822346",
            "extra": "mean: 3.5630038489798883 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1992982.8414666872,
            "unit": "iter/sec",
            "range": "stddev: 8.02591061362833e-8",
            "extra": "mean: 501.76046636913054 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9188578987678212,
            "unit": "iter/sec",
            "range": "stddev: 0.007419436738693296",
            "extra": "mean: 1.0883075624000071 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.6768057426305,
            "unit": "iter/sec",
            "range": "stddev: 0.00032112693386937964",
            "extra": "mean: 3.5251383960776232 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 664.4390602731008,
            "unit": "iter/sec",
            "range": "stddev: 0.00005554193083989595",
            "extra": "mean: 1.5050289180605596 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.26368981321131,
            "unit": "iter/sec",
            "range": "stddev: 0.0009605081731111082",
            "extra": "mean: 10.176699062501035 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.51664960221486,
            "unit": "iter/sec",
            "range": "stddev: 0.00036869532924534127",
            "extra": "mean: 10.58014650549533 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.2201458335219,
            "unit": "iter/sec",
            "range": "stddev: 0.000027729306147129303",
            "extra": "mean: 5.070475918033867 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.21789449647275,
            "unit": "iter/sec",
            "range": "stddev: 0.00028654903848738937",
            "extra": "mean: 3.714463341563285 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.30776599824754,
            "unit": "iter/sec",
            "range": "stddev: 0.03342744677389506",
            "extra": "mean: 28.32238097560842 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2227.50904606071,
            "unit": "iter/sec",
            "range": "stddev: 0.00008051644965809182",
            "extra": "mean: 448.9319591175054 usec\nrounds: 1223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.24880482878665,
            "unit": "iter/sec",
            "range": "stddev: 0.0008502573047353399",
            "extra": "mean: 9.97518126732667 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73690.88725625053,
            "unit": "iter/sec",
            "range": "stddev: 7.921571140051045e-7",
            "extra": "mean: 13.570198938202893 usec\nrounds: 14125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6832641722018873,
            "unit": "iter/sec",
            "range": "stddev: 0.003848287095974649",
            "extra": "mean: 1.4635627633999888 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.12309078914322,
            "unit": "iter/sec",
            "range": "stddev: 0.00010891743854366186",
            "extra": "mean: 13.31148638182123 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.58199864799707,
            "unit": "iter/sec",
            "range": "stddev: 0.000884808929369299",
            "extra": "mean: 10.041975593749678 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2169.329012216056,
            "unit": "iter/sec",
            "range": "stddev: 0.00009429784140079968",
            "extra": "mean: 460.972030691859 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.34155246509661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000725104639542389",
            "extra": "mean: 9.062768990098462 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.41051638933615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000717494435895467",
            "extra": "mean: 6.119557186989331 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.14188446454588,
            "unit": "iter/sec",
            "range": "stddev: 0.00133755507498301",
            "extra": "mean: 25.54808011110923 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.7894869504121,
            "unit": "iter/sec",
            "range": "stddev: 0.000019280838280158906",
            "extra": "mean: 1.3517358892490314 msec\nrounds: 614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.01045864041704,
            "unit": "iter/sec",
            "range": "stddev: 0.018221999979325124",
            "extra": "mean: 11.90327985566912 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 296.53813793957255,
            "unit": "iter/sec",
            "range": "stddev: 0.00004625305427941365",
            "extra": "mean: 3.3722475191497168 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.14574602448825,
            "unit": "iter/sec",
            "range": "stddev: 0.0009464793522611303",
            "extra": "mean: 10.621828836959772 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.426236075450573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983182715240207",
            "extra": "mean: 95.91188927273399 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2127.6300383037883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882253722067483",
            "extra": "mean: 470.0065246292681 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5602522.816769352,
            "unit": "iter/sec",
            "range": "stddev: 9.112324536428328e-9",
            "extra": "mean: 178.49101783350358 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.763248673149917,
            "unit": "iter/sec",
            "range": "stddev: 0.0005558895215669226",
            "extra": "mean: 40.382423695654744 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2109.4852502342324,
            "unit": "iter/sec",
            "range": "stddev: 0.00008788879834332654",
            "extra": "mean: 474.0492970448418 usec\nrounds: 1286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.94717090295242,
            "unit": "iter/sec",
            "range": "stddev: 0.0009343674318321086",
            "extra": "mean: 10.106403153060352 msec\nrounds: 98"
          }
        ]
      }
    ]
  }
}