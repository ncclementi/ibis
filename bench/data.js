window.BENCHMARK_DATA = {
  "lastUpdate": 1677933746339,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7071669993143a2de570c9dd863f5837eb05cc4d",
          "message": "fix(ux): make string range selectors inclusive",
          "timestamp": "2023-03-04T07:33:47-05:00",
          "tree_id": "a1057aa012e4f4dbdeb57befb0fad595c5556b1b",
          "url": "https://github.com/ibis-project/ibis/commit/7071669993143a2de570c9dd863f5837eb05cc4d"
        },
        "date": 1677933662646,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 128.26475801448763,
            "unit": "iter/sec",
            "range": "stddev: 0.005220850063050353",
            "extra": "mean: 7.796373808985387 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5138328377905337,
            "unit": "iter/sec",
            "range": "stddev: 0.0018002645553450315",
            "extra": "mean: 397.79892479999717 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1811916.597344076,
            "unit": "iter/sec",
            "range": "stddev: 9.31834578420184e-8",
            "extra": "mean: 551.9017826018091 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.08336873390129,
            "unit": "iter/sec",
            "range": "stddev: 0.008834449213465375",
            "extra": "mean: 22.181128608697584 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2548515.6066283938,
            "unit": "iter/sec",
            "range": "stddev: 2.2191130475814725e-8",
            "extra": "mean: 392.38527611868057 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 551.303314726286,
            "unit": "iter/sec",
            "range": "stddev: 0.00002937901690597543",
            "extra": "mean: 1.8138835252541252 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5386.083113827484,
            "unit": "iter/sec",
            "range": "stddev: 0.000052596601519904696",
            "extra": "mean: 185.66367782790772 usec\nrounds: 1971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.48140059929925,
            "unit": "iter/sec",
            "range": "stddev: 0.000521983343259707",
            "extra": "mean: 9.757868200006214 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481006.65805703873,
            "unit": "iter/sec",
            "range": "stddev: 2.791783917705307e-7",
            "extra": "mean: 2.07897330161575 usec\nrounds: 2060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.71098892438317,
            "unit": "iter/sec",
            "range": "stddev: 0.00010367492509762322",
            "extra": "mean: 6.679536399997232 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12731116.762111098,
            "unit": "iter/sec",
            "range": "stddev: 7.114829866032481e-9",
            "extra": "mean: 78.54770470542033 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.71957648444086,
            "unit": "iter/sec",
            "range": "stddev: 0.00010833337869263294",
            "extra": "mean: 10.233364040000954 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.58430412878266,
            "unit": "iter/sec",
            "range": "stddev: 0.00021931730683328107",
            "extra": "mean: 3.1991369585467306 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 105.39170290156338,
            "unit": "iter/sec",
            "range": "stddev: 0.014331456369411162",
            "extra": "mean: 9.488412962963578 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.91101648028459,
            "unit": "iter/sec",
            "range": "stddev: 0.000492443284643044",
            "extra": "mean: 9.71713266666234 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.88810080213577,
            "unit": "iter/sec",
            "range": "stddev: 0.003853990824145769",
            "extra": "mean: 5.559011382859223 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.358332816898,
            "unit": "iter/sec",
            "range": "stddev: 0.0005935277477116681",
            "extra": "mean: 7.024527333332885 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7776236557526586,
            "unit": "iter/sec",
            "range": "stddev: 0.0011908528270150993",
            "extra": "mean: 562.5487694000071 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.4036996026114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002395121638261705",
            "extra": "mean: 3.3068378505755702 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2493064.8474142766,
            "unit": "iter/sec",
            "range": "stddev: 4.8391777421871184e-8",
            "extra": "mean: 401.1127111423329 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5375.532261073615,
            "unit": "iter/sec",
            "range": "stddev: 0.000019620644395567246",
            "extra": "mean: 186.02809013749226 usec\nrounds: 1531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9175265748511516,
            "unit": "iter/sec",
            "range": "stddev: 0.002466195428876143",
            "extra": "mean: 1.089886688199988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.9845225072599,
            "unit": "iter/sec",
            "range": "stddev: 0.00019578686470635655",
            "extra": "mean: 3.1647119677421047 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.31991630895583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006050013197708347",
            "extra": "mean: 9.585897260868014 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.3123424526159,
            "unit": "iter/sec",
            "range": "stddev: 0.00006882913925964968",
            "extra": "mean: 1.3435219906536235 msec\nrounds: 642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.64595561845593,
            "unit": "iter/sec",
            "range": "stddev: 0.00017531228865386492",
            "extra": "mean: 63.91428074999794 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17915111370363648,
            "unit": "iter/sec",
            "range": "stddev: 0.05677903789140629",
            "extra": "mean: 5.581879896400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11792.336061544487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024161697261592303",
            "extra": "mean: 84.80083969630579 usec\nrounds: 5134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.332962333017207,
            "unit": "iter/sec",
            "range": "stddev: 0.000250919784486292",
            "extra": "mean: 96.77766818182155 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.1834556639376,
            "unit": "iter/sec",
            "range": "stddev: 0.000021626119812293874",
            "extra": "mean: 842.3297976644609 usec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.28387845962834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005730450540754534",
            "extra": "mean: 7.028203130432238 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5819.800018279719,
            "unit": "iter/sec",
            "range": "stddev: 0.00005550395349677316",
            "extra": "mean: 171.8272100173626 usec\nrounds: 3514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9195022200730152,
            "unit": "iter/sec",
            "range": "stddev: 0.0035231690542974745",
            "extra": "mean: 1.0875449543999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.82122688330166,
            "unit": "iter/sec",
            "range": "stddev: 0.00018014312051585718",
            "extra": "mean: 9.274611585363724 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6786269786443174,
            "unit": "iter/sec",
            "range": "stddev: 0.002827133864463417",
            "extra": "mean: 1.4735635798000317 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70219.04762836026,
            "unit": "iter/sec",
            "range": "stddev: 0.00000100309534920421",
            "extra": "mean: 14.241150140522802 usec\nrounds: 12122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.7212033269624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006025853607546317",
            "extra": "mean: 24.55723108108345 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.5541454139965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006572935274203938",
            "extra": "mean: 10.80448634177303 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 250.8349554297007,
            "unit": "iter/sec",
            "range": "stddev: 0.004277711890296393",
            "extra": "mean: 3.9866851822423177 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.33400941752885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003948505943407637",
            "extra": "mean: 5.281671280698175 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.3486617558469,
            "unit": "iter/sec",
            "range": "stddev: 0.00002699380326394567",
            "extra": "mean: 3.0926368909950117 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.9416115561822,
            "unit": "iter/sec",
            "range": "stddev: 0.00005163605818046272",
            "extra": "mean: 3.4253424671787727 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.5592047587943,
            "unit": "iter/sec",
            "range": "stddev: 0.00022773119984962294",
            "extra": "mean: 3.3606757378270795 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.34885758918823,
            "unit": "iter/sec",
            "range": "stddev: 0.000383319597416682",
            "extra": "mean: 17.746588711531786 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5920.662538512292,
            "unit": "iter/sec",
            "range": "stddev: 0.00004008300169559154",
            "extra": "mean: 168.90001642472836 usec\nrounds: 2618"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.73656117686973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005851897247964067",
            "extra": "mean: 9.368860950494106 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.95571051474094,
            "unit": "iter/sec",
            "range": "stddev: 0.00015827222971477316",
            "extra": "mean: 14.09329837930735 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7371607.738810354,
            "unit": "iter/sec",
            "range": "stddev: 5.026755816932711e-9",
            "extra": "mean: 135.65561753043434 nsec\nrounds: 64936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 140.59801673039533,
            "unit": "iter/sec",
            "range": "stddev: 0.0006812892951588465",
            "extra": "mean: 7.112475860292942 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.05232199984202,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232693002269862",
            "extra": "mean: 13.503965480003899 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6402028.376474767,
            "unit": "iter/sec",
            "range": "stddev: 1.089506474255094e-8",
            "extra": "mean: 156.2004947795885 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.762494978374015,
            "unit": "iter/sec",
            "range": "stddev: 0.006451702108759717",
            "extra": "mean: 16.73290247272751 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 732727.4305214246,
            "unit": "iter/sec",
            "range": "stddev: 2.3118957950760496e-7",
            "extra": "mean: 1.3647639740856685 usec\nrounds: 22989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.86190050157089,
            "unit": "iter/sec",
            "range": "stddev: 0.00022971372563966537",
            "extra": "mean: 10.5416399493645 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.68492411717227,
            "unit": "iter/sec",
            "range": "stddev: 0.000669019891790088",
            "extra": "mean: 7.5366512560003684 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8109.529759410108,
            "unit": "iter/sec",
            "range": "stddev: 0.000011410161742836212",
            "extra": "mean: 123.31171222839689 usec\nrounds: 3680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 141.63060776375113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006344474429393464",
            "extra": "mean: 7.06062069343135 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5925165.443522907,
            "unit": "iter/sec",
            "range": "stddev: 1.0671972422030858e-8",
            "extra": "mean: 168.77165870459413 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.37651683995404,
            "unit": "iter/sec",
            "range": "stddev: 0.00027234222053697867",
            "extra": "mean: 2.821857410071071 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.362272826355,
            "unit": "iter/sec",
            "range": "stddev: 0.00003444853787430782",
            "extra": "mean: 1.454836902654134 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5578.682664795051,
            "unit": "iter/sec",
            "range": "stddev: 0.00004412671061124466",
            "extra": "mean: 179.25378805118643 usec\nrounds: 2628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13468.005867556778,
            "unit": "iter/sec",
            "range": "stddev: 0.000002248703089615121",
            "extra": "mean: 74.25004190181642 usec\nrounds: 7088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.24098950178956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002514305675660972",
            "extra": "mean: 3.518141425530409 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.29142694027513,
            "unit": "iter/sec",
            "range": "stddev: 0.00005327370689915099",
            "extra": "mean: 8.382832074769828 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 142.08625626180387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005859628481914008",
            "extra": "mean: 7.037978382352689 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139146.9732049353,
            "unit": "iter/sec",
            "range": "stddev: 4.2021594548085446e-7",
            "extra": "mean: 7.186645724066183 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5631.206347652092,
            "unit": "iter/sec",
            "range": "stddev: 0.000046190139649066674",
            "extra": "mean: 177.5818427284139 usec\nrounds: 2448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.09071765549245,
            "unit": "iter/sec",
            "range": "stddev: 0.000059099051019078744",
            "extra": "mean: 6.24645834964618 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.49854064283427,
            "unit": "iter/sec",
            "range": "stddev: 0.0006325486708171799",
            "extra": "mean: 9.389800028844665 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.00297627978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052604723048881845",
            "extra": "mean: 569.7996034854482 usec\nrounds: 1377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.10268862273608,
            "unit": "iter/sec",
            "range": "stddev: 0.0009563502150796595",
            "extra": "mean: 22.674354585368157 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.07699945260061,
            "unit": "iter/sec",
            "range": "stddev: 0.00040897545793976955",
            "extra": "mean: 38.347970280003665 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11602.38108374294,
            "unit": "iter/sec",
            "range": "stddev: 0.00003123738577636857",
            "extra": "mean: 86.1892048521991 usec\nrounds: 4740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.260316420216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007083697933983538",
            "extra": "mean: 9.500256449998119 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 193.84948855591517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000962575908950809",
            "extra": "mean: 5.158641415303779 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1679041.420320573,
            "unit": "iter/sec",
            "range": "stddev: 1.0398919925607594e-7",
            "extra": "mean: 595.5779219604206 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.548743840551372,
            "unit": "iter/sec",
            "range": "stddev: 0.00024156212675592787",
            "extra": "mean: 180.2209704999882 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.2972832789841,
            "unit": "iter/sec",
            "range": "stddev: 0.00019354863057041168",
            "extra": "mean: 3.202077166667734 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5475.062956146607,
            "unit": "iter/sec",
            "range": "stddev: 0.000043335322042257374",
            "extra": "mean: 182.6463016059651 usec\nrounds: 2553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.61735704499391,
            "unit": "iter/sec",
            "range": "stddev: 0.0006626092116051467",
            "extra": "mean: 9.840838505150474 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5687.239718984447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004481037321086137",
            "extra": "mean: 175.8322225563875 usec\nrounds: 3662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 139.3210592005233,
            "unit": "iter/sec",
            "range": "stddev: 0.0006887603854424044",
            "extra": "mean: 7.177665786768895 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.84840069241835,
            "unit": "iter/sec",
            "range": "stddev: 0.00022813042200933568",
            "extra": "mean: 3.3129213131693676 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.84860306178162,
            "unit": "iter/sec",
            "range": "stddev: 0.0008069227849914852",
            "extra": "mean: 27.13807083333298 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 257.0585406213004,
            "unit": "iter/sec",
            "range": "stddev: 0.010714927810958863",
            "extra": "mean: 3.8901644644174804 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8445294061971521,
            "unit": "iter/sec",
            "range": "stddev: 0.0026143120549121297",
            "extra": "mean: 1.1840913917999842 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5803.64100449624,
            "unit": "iter/sec",
            "range": "stddev: 0.00004392909635083286",
            "extra": "mean: 172.3056266273659 usec\nrounds: 2689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.50366654894574,
            "unit": "iter/sec",
            "range": "stddev: 0.00007230713956044503",
            "extra": "mean: 7.434741562499347 msec\nrounds: 128"
          }
        ]
      }
    ]
  }
}