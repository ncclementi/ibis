window.BENCHMARK_DATA = {
  "lastUpdate": 1676308131095,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "58e60ae0bfd8818efa69e388a1ba32d7ee84603a",
          "message": "fix(ir): reorder the right schema of set operations to align with the left schema",
          "timestamp": "2023-02-13T18:03:11+01:00",
          "tree_id": "372cda54471204b28ecde85f316d62e7e327e1e2",
          "url": "https://github.com/ibis-project/ibis/commit/58e60ae0bfd8818efa69e388a1ba32d7ee84603a"
        },
        "date": 1676308038589,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.486546936178726,
            "unit": "iter/sec",
            "range": "stddev: 0.00034663415952371186",
            "extra": "mean: 18.35315424138222 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3864.1139879235243,
            "unit": "iter/sec",
            "range": "stddev: 0.00004671139273467774",
            "extra": "mean: 258.7915374974159 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11556845111458099,
            "unit": "iter/sec",
            "range": "stddev: 0.09990212247491112",
            "extra": "mean: 8.652880525400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9177941988940264,
            "unit": "iter/sec",
            "range": "stddev: 0.002364484314770403",
            "extra": "mean: 521.432383399997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4407008.245262192,
            "unit": "iter/sec",
            "range": "stddev: 3.434697312134671e-8",
            "extra": "mean: 226.9113067973187 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.38759276427204,
            "unit": "iter/sec",
            "range": "stddev: 0.0013144505201694",
            "extra": "mean: 21.55748855263309 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 503316.2667648722,
            "unit": "iter/sec",
            "range": "stddev: 4.244085941822138e-7",
            "extra": "mean: 1.986822334250439 usec\nrounds: 19047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1363598.9188743632,
            "unit": "iter/sec",
            "range": "stddev: 2.3098126769991848e-7",
            "extra": "mean: 733.3534708471972 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4367.214666402459,
            "unit": "iter/sec",
            "range": "stddev: 0.00008333342670738168",
            "extra": "mean: 228.9788976239542 usec\nrounds: 547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1263.9550849989755,
            "unit": "iter/sec",
            "range": "stddev: 0.00001959714821199444",
            "extra": "mean: 791.1673538627446 usec\nrounds: 958"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3739789.7725148965,
            "unit": "iter/sec",
            "range": "stddev: 4.8278608446813995e-8",
            "extra": "mean: 267.39470955027434 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.347289860132734,
            "unit": "iter/sec",
            "range": "stddev: 0.0035810524575311847",
            "extra": "mean: 742.2307772000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.57796757607346,
            "unit": "iter/sec",
            "range": "stddev: 0.00015127092110953666",
            "extra": "mean: 13.058586322581467 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 348.16108774061223,
            "unit": "iter/sec",
            "range": "stddev: 0.00008493244444497379",
            "extra": "mean: 2.872233673468479 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.51105183860825,
            "unit": "iter/sec",
            "range": "stddev: 0.0009414303795827356",
            "extra": "mean: 33.88561022727546 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9537.927648957231,
            "unit": "iter/sec",
            "range": "stddev: 0.000006002939901256953",
            "extra": "mean: 104.84457806820632 usec\nrounds: 1377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 69.1522557905909,
            "unit": "iter/sec",
            "range": "stddev: 0.0008263995987308851",
            "extra": "mean: 14.460844242424027 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3556760.4520802326,
            "unit": "iter/sec",
            "range": "stddev: 4.454549883969977e-8",
            "extra": "mean: 281.1547230891846 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120545.35178701188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011753475226633213",
            "extra": "mean: 8.295633014260652 usec\nrounds: 26952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1312777.7680526273,
            "unit": "iter/sec",
            "range": "stddev: 3.1998501161855974e-7",
            "extra": "mean: 761.743551982449 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 221.93593212261737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004749995284930478",
            "extra": "mean: 4.505804852940668 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4625.538154762622,
            "unit": "iter/sec",
            "range": "stddev: 0.00005589858384161865",
            "extra": "mean: 216.19106070292895 usec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 50152.74778926139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017897773172610051",
            "extra": "mean: 19.939086970906068 usec\nrounds: 9141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 117.34355837876001,
            "unit": "iter/sec",
            "range": "stddev: 0.011972373558976955",
            "extra": "mean: 8.521984622046427 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7218755880561013,
            "unit": "iter/sec",
            "range": "stddev: 0.017643090970583288",
            "extra": "mean: 1.3852802567999902 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 245.81091674986638,
            "unit": "iter/sec",
            "range": "stddev: 0.00010104289007410944",
            "extra": "mean: 4.068167570513499 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 122.05235775192,
            "unit": "iter/sec",
            "range": "stddev: 0.0006388863165453744",
            "extra": "mean: 8.193205099999545 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.978860717109384,
            "unit": "iter/sec",
            "range": "stddev: 0.0010018413740330463",
            "extra": "mean: 45.49826366666734 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 152.63148799420364,
            "unit": "iter/sec",
            "range": "stddev: 0.00012095573561388148",
            "extra": "mean: 6.55172804210607 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.956386956860518,
            "unit": "iter/sec",
            "range": "stddev: 0.0010535696343861166",
            "extra": "mean: 83.63730645453931 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4745.322468637023,
            "unit": "iter/sec",
            "range": "stddev: 0.00005976183142408337",
            "extra": "mean: 210.73383455165384 usec\nrounds: 1777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 459.0191050951971,
            "unit": "iter/sec",
            "range": "stddev: 0.00008303744297192398",
            "extra": "mean: 2.178558558673952 msec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 222.80355371637197,
            "unit": "iter/sec",
            "range": "stddev: 0.00014863716025343958",
            "extra": "mean: 4.488258752250406 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.75245436066541,
            "unit": "iter/sec",
            "range": "stddev: 0.0007054292726657685",
            "extra": "mean: 12.084233727275748 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.27274706214529,
            "unit": "iter/sec",
            "range": "stddev: 0.0007789224304842527",
            "extra": "mean: 12.61467574999082 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 105.8820846660688,
            "unit": "iter/sec",
            "range": "stddev: 0.015514582836306459",
            "extra": "mean: 9.444468373982271 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7458521871042594,
            "unit": "iter/sec",
            "range": "stddev: 0.016753727981061502",
            "extra": "mean: 1.3407482303999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6575563238361527,
            "unit": "iter/sec",
            "range": "stddev: 0.0074078660798578035",
            "extra": "mean: 1.5207822717999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 139.10458794056512,
            "unit": "iter/sec",
            "range": "stddev: 0.0008243643187071604",
            "extra": "mean: 7.1888354999999535 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.43450494110012,
            "unit": "iter/sec",
            "range": "stddev: 0.0007602007144279862",
            "extra": "mean: 11.704872647057714 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 354747.8639866492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010184582654563928",
            "extra": "mean: 2.8189035129402065 usec\nrounds: 1907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 137.71205767393678,
            "unit": "iter/sec",
            "range": "stddev: 0.0007873445713887687",
            "extra": "mean: 7.261528270587004 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.14393293701862,
            "unit": "iter/sec",
            "range": "stddev: 0.0007846241798485541",
            "extra": "mean: 13.487280218186532 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.429066352059857,
            "unit": "iter/sec",
            "range": "stddev: 0.0016823593448256917",
            "extra": "mean: 225.78121900000951 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9569.722636475704,
            "unit": "iter/sec",
            "range": "stddev: 0.000006477976120070352",
            "extra": "mean: 104.49623651457004 usec\nrounds: 4579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1336587.952333782,
            "unit": "iter/sec",
            "range": "stddev: 3.692066221365018e-7",
            "extra": "mean: 748.1737346606526 nsec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.98069755863508,
            "unit": "iter/sec",
            "range": "stddev: 0.00043979640344749487",
            "extra": "mean: 30.32076560000405 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 129.50658505014235,
            "unit": "iter/sec",
            "range": "stddev: 0.0007974339109904559",
            "extra": "mean: 7.721615079363107 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 241.73771118833307,
            "unit": "iter/sec",
            "range": "stddev: 0.00010861838390669804",
            "extra": "mean: 4.136714934067196 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9478311.84729075,
            "unit": "iter/sec",
            "range": "stddev: 1.419122952672678e-8",
            "extra": "mean: 105.50401971484992 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 90.72917127248621,
            "unit": "iter/sec",
            "range": "stddev: 0.00039726654701199637",
            "extra": "mean: 11.021813447371935 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 78.58533770122386,
            "unit": "iter/sec",
            "range": "stddev: 0.000788416927833764",
            "extra": "mean: 12.725020076924938 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 127.13412724749487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002257420676015313",
            "extra": "mean: 7.865708615384423 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 558.1955283859036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000704613222864826",
            "extra": "mean: 1.7914869416665387 msec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 104.70209675564658,
            "unit": "iter/sec",
            "range": "stddev: 0.00017382245939323818",
            "extra": "mean: 9.550907106796503 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5103829431477231,
            "unit": "iter/sec",
            "range": "stddev: 0.08642943255166781",
            "extra": "mean: 1.959313126400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.35544296884095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008309651636341087",
            "extra": "mean: 7.124768223074905 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1328006.2512884797,
            "unit": "iter/sec",
            "range": "stddev: 3.659158929670712e-7",
            "extra": "mean: 753.0085035591992 nsec\nrounds: 149232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 60.2735532943933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209809571288391",
            "extra": "mean: 16.591024509799738 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 213.93722418309474,
            "unit": "iter/sec",
            "range": "stddev: 0.00029675594392641034",
            "extra": "mean: 4.674268369230433 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16401.097699428818,
            "unit": "iter/sec",
            "range": "stddev: 0.000016777790706913643",
            "extra": "mean: 60.97152875534824 usec\nrounds: 5999"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 209.34374531486557,
            "unit": "iter/sec",
            "range": "stddev: 0.00027525034217577057",
            "extra": "mean: 4.776832469945257 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.81502419914826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007001041879881072",
            "extra": "mean: 20.48549634883615 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.26848250921711,
            "unit": "iter/sec",
            "range": "stddev: 0.0008601072890221273",
            "extra": "mean: 12.00934579166023 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4728.483834964587,
            "unit": "iter/sec",
            "range": "stddev: 0.00006825346253958912",
            "extra": "mean: 211.48428014187962 usec\nrounds: 3102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 227.33857604443534,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818840779565928",
            "extra": "mean: 4.398725537035743 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.8532234914197,
            "unit": "iter/sec",
            "range": "stddev: 0.0004277534752226848",
            "extra": "mean: 12.216989842859709 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3933.1748727151376,
            "unit": "iter/sec",
            "range": "stddev: 0.00006930182211891507",
            "extra": "mean: 254.24753090362415 usec\nrounds: 1893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.41963240137364,
            "unit": "iter/sec",
            "range": "stddev: 0.0010430484579846309",
            "extra": "mean: 28.232929937500373 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.030748479562735,
            "unit": "iter/sec",
            "range": "stddev: 0.0016021184306154463",
            "extra": "mean: 124.52139455554818 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.090497704796945,
            "unit": "iter/sec",
            "range": "stddev: 0.0007027540425480994",
            "extra": "mean: 29.333687312499634 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 218.45664767126908,
            "unit": "iter/sec",
            "range": "stddev: 0.0002629622902714854",
            "extra": "mean: 4.577567268654548 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 223.36948737736697,
            "unit": "iter/sec",
            "range": "stddev: 0.0002679899859320515",
            "extra": "mean: 4.476887204878483 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 114.3853619713303,
            "unit": "iter/sec",
            "range": "stddev: 0.017457153254893373",
            "extra": "mean: 8.74237737037228 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 196.01500460496226,
            "unit": "iter/sec",
            "range": "stddev: 0.0005461162880621143",
            "extra": "mean: 5.101650264046594 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 131.59672321721584,
            "unit": "iter/sec",
            "range": "stddev: 0.00017064157615817788",
            "extra": "mean: 7.598973405662864 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 240.59194433041412,
            "unit": "iter/sec",
            "range": "stddev: 0.00018411477067260338",
            "extra": "mean: 4.156415140095721 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4299.102819206514,
            "unit": "iter/sec",
            "range": "stddev: 0.00005777490420221654",
            "extra": "mean: 232.60667214853214 usec\nrounds: 1946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3617.2594513569557,
            "unit": "iter/sec",
            "range": "stddev: 0.000028296220105209732",
            "extra": "mean: 276.4523843112405 usec\nrounds: 1772"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8795.445972265132,
            "unit": "iter/sec",
            "range": "stddev: 0.000017135755811894785",
            "extra": "mean: 113.69520126134836 usec\nrounds: 3488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 861.5532551404198,
            "unit": "iter/sec",
            "range": "stddev: 0.00005783590712120406",
            "extra": "mean: 1.1606943552630598 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.11337847717225,
            "unit": "iter/sec",
            "range": "stddev: 0.0008217010852513626",
            "extra": "mean: 12.482309684205157 msec\nrounds: 76"
          }
        ]
      }
    ]
  }
}