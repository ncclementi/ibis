window.BENCHMARK_DATA = {
  "lastUpdate": 1681370601579,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "16c202b2524e932134b2b3cf39872294a80dfe3b",
          "message": "ci(deps): remove snowflake deps when testing pyspark with pandas2",
          "timestamp": "2023-04-13T09:16:41+02:00",
          "tree_id": "6486452b0cc795cd02a6bdb096569efde61f5c27",
          "url": "https://github.com/ibis-project/ibis/commit/16c202b2524e932134b2b3cf39872294a80dfe3b"
        },
        "date": 1681370519724,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1125.1058654332878,
            "unit": "iter/sec",
            "range": "stddev: 0.000059381373343071633",
            "extra": "mean: 888.8052499974227 usec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 280.154848977851,
            "unit": "iter/sec",
            "range": "stddev: 0.00026947713967628644",
            "extra": "mean: 3.5694545486130775 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16886701820566494,
            "unit": "iter/sec",
            "range": "stddev: 0.012036145915242054",
            "extra": "mean: 5.921819492200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.8786980168749,
            "unit": "iter/sec",
            "range": "stddev: 0.000021311364066465993",
            "extra": "mean: 1.4622476221292167 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2157.1684220363804,
            "unit": "iter/sec",
            "range": "stddev: 0.00008038525840493307",
            "extra": "mean: 463.57066503689765 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.90552576367458,
            "unit": "iter/sec",
            "range": "stddev: 0.00006387388020287408",
            "extra": "mean: 6.101075575950009 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.99410007618155,
            "unit": "iter/sec",
            "range": "stddev: 0.00008472068021828044",
            "extra": "mean: 9.901568499998348 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.39996942874647,
            "unit": "iter/sec",
            "range": "stddev: 0.0001938395898759895",
            "extra": "mean: 15.527957681818805 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.18908025263663,
            "unit": "iter/sec",
            "range": "stddev: 0.0006521298550582128",
            "extra": "mean: 9.882489271602442 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.225282916714505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006214505102886831",
            "extra": "mean: 38.13114249999785 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.794108351006141,
            "unit": "iter/sec",
            "range": "stddev: 0.00008082490326687377",
            "extra": "mean: 63.31474862500208 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8397566831479738,
            "unit": "iter/sec",
            "range": "stddev: 0.0037592544233111852",
            "extra": "mean: 1.190821127199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74965.02544494373,
            "unit": "iter/sec",
            "range": "stddev: 7.837171770520328e-7",
            "extra": "mean: 13.339553932846005 usec\nrounds: 13832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8679005809074022,
            "unit": "iter/sec",
            "range": "stddev: 0.003021837864944935",
            "extra": "mean: 1.1522057041999971 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1907301.0615478966,
            "unit": "iter/sec",
            "range": "stddev: 7.925819263473746e-8",
            "extra": "mean: 524.3010766157894 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.71479281623436,
            "unit": "iter/sec",
            "range": "stddev: 0.0006103260873838259",
            "extra": "mean: 22.875551628569774 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5511948.354550373,
            "unit": "iter/sec",
            "range": "stddev: 8.516537116996652e-9",
            "extra": "mean: 181.4240511115391 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.66053204076667,
            "unit": "iter/sec",
            "range": "stddev: 0.0007555308725830121",
            "extra": "mean: 20.550535681817518 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 489772.385935173,
            "unit": "iter/sec",
            "range": "stddev: 3.23635534975308e-7",
            "extra": "mean: 2.041764764035434 usec\nrounds: 2032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.249177706201703,
            "unit": "iter/sec",
            "range": "stddev: 0.0002378901271345886",
            "extra": "mean: 88.89538650000144 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.66032262148046,
            "unit": "iter/sec",
            "range": "stddev: 0.0006185268766069057",
            "extra": "mean: 10.345506541665253 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13945.151413832984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015704608368816388",
            "extra": "mean: 71.70951180982111 usec\nrounds: 7536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.09494247277527,
            "unit": "iter/sec",
            "range": "stddev: 0.0007301314411909642",
            "extra": "mean: 9.891691666665704 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 284.3362541204142,
            "unit": "iter/sec",
            "range": "stddev: 0.00003198960934113109",
            "extra": "mean: 3.5169627000027504 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.9786115325504,
            "unit": "iter/sec",
            "range": "stddev: 0.00006671187504347703",
            "extra": "mean: 6.329970812497976 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.261386808040555,
            "unit": "iter/sec",
            "range": "stddev: 0.026672329304790965",
            "extra": "mean: 27.577544270266607 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6563573.510806256,
            "unit": "iter/sec",
            "range": "stddev: 7.896754025885753e-9",
            "extra": "mean: 152.35602958561415 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12042.985385527842,
            "unit": "iter/sec",
            "range": "stddev: 0.000037062196666729606",
            "extra": "mean: 83.03588919087359 usec\nrounds: 3312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9965.529138228801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024772948502296295",
            "extra": "mean: 100.34590096815796 usec\nrounds: 4443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5308020321595732,
            "unit": "iter/sec",
            "range": "stddev: 0.002950261131006129",
            "extra": "mean: 395.13165679999247 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.98047369306413,
            "unit": "iter/sec",
            "range": "stddev: 0.0007788151441643622",
            "extra": "mean: 10.001953012044714 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2192.387471886795,
            "unit": "iter/sec",
            "range": "stddev: 0.00008641947961431705",
            "extra": "mean: 456.12375222131146 usec\nrounds: 1913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.43614907671203,
            "unit": "iter/sec",
            "range": "stddev: 0.00010433381218476732",
            "extra": "mean: 8.973748718753782 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 150.85311764370041,
            "unit": "iter/sec",
            "range": "stddev: 0.021175680397675707",
            "extra": "mean: 6.628964754721857 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.281945332670524,
            "unit": "iter/sec",
            "range": "stddev: 0.00028287340610676427",
            "extra": "mean: 17.157972238092746 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1906998.6024271697,
            "unit": "iter/sec",
            "range": "stddev: 1.003764373390049e-7",
            "extra": "mean: 524.3842332801034 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.13292387049114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818796791313331",
            "extra": "mean: 3.5319099818197532 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2150.2229188366077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000860585656244992",
            "extra": "mean: 465.06805933454405 usec\nrounds: 1382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.37004766122597,
            "unit": "iter/sec",
            "range": "stddev: 0.026254953352636137",
            "extra": "mean: 26.75939857142783 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11364170.724551119,
            "unit": "iter/sec",
            "range": "stddev: 3.531552096568441e-9",
            "extra": "mean: 87.99586210371625 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2173.2099480253382,
            "unit": "iter/sec",
            "range": "stddev: 0.00008551356619148913",
            "extra": "mean: 460.14882313079704 usec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.6080895208292,
            "unit": "iter/sec",
            "range": "stddev: 0.0036807296273829167",
            "extra": "mean: 4.4324651750028465 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.15294524689494,
            "unit": "iter/sec",
            "range": "stddev: 0.00035181027960176316",
            "extra": "mean: 3.9501811800953774 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.0790058129053,
            "unit": "iter/sec",
            "range": "stddev: 0.0036616608046606183",
            "extra": "mean: 6.246915358587151 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2107.599934902153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000874899145798519",
            "extra": "mean: 474.47334925374514 usec\nrounds: 1005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.24865732019485,
            "unit": "iter/sec",
            "range": "stddev: 0.000773027040822743",
            "extra": "mean: 10.49883565957604 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.4527605009139,
            "unit": "iter/sec",
            "range": "stddev: 0.0006641211505789697",
            "extra": "mean: 10.157155522223446 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 72.77784381911502,
            "unit": "iter/sec",
            "range": "stddev: 0.030639641115438123",
            "extra": "mean: 13.740445546661704 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.7547929289256485,
            "unit": "iter/sec",
            "range": "stddev: 0.0003473706518066709",
            "extra": "mean: 173.76819850000894 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8409.750174624598,
            "unit": "iter/sec",
            "range": "stddev: 0.000013756750022920408",
            "extra": "mean: 118.90959650827426 usec\nrounds: 3150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4477.311140310502,
            "unit": "iter/sec",
            "range": "stddev: 0.000024364734343565573",
            "extra": "mean: 223.34833757625563 usec\nrounds: 1807"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2105.2289774217434,
            "unit": "iter/sec",
            "range": "stddev: 0.00008801009397084263",
            "extra": "mean: 475.0077120944306 usec\nrounds: 1174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.75117463109062,
            "unit": "iter/sec",
            "range": "stddev: 0.0003421324393246795",
            "extra": "mean: 9.195302978494103 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.464988299097,
            "unit": "iter/sec",
            "range": "stddev: 0.00028576499336027786",
            "extra": "mean: 3.6567752465126158 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.5996246437845,
            "unit": "iter/sec",
            "range": "stddev: 0.00031788237900734115",
            "extra": "mean: 7.656989847616626 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.65546796152084,
            "unit": "iter/sec",
            "range": "stddev: 0.00006052900190045974",
            "extra": "mean: 8.357328060608003 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.0697701554524,
            "unit": "iter/sec",
            "range": "stddev: 0.0001486741946921267",
            "extra": "mean: 10.744627372880817 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.62582038365444,
            "unit": "iter/sec",
            "range": "stddev: 0.0176730751953885",
            "extra": "mean: 11.958029175824512 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 79.18642455946225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003949917487713435",
            "extra": "mean: 12.62842722806717 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.0530570047646,
            "unit": "iter/sec",
            "range": "stddev: 0.00005659216296020338",
            "extra": "mean: 6.209133925166139 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.93417287657023,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742358653094535",
            "extra": "mean: 10.53361471111316 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1708.8632245277115,
            "unit": "iter/sec",
            "range": "stddev: 0.000026133866891161254",
            "extra": "mean: 585.1843410559532 usec\nrounds: 1079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 269.94931594935804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003199077448233922",
            "extra": "mean: 3.7043990887074445 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.8344490131426,
            "unit": "iter/sec",
            "range": "stddev: 0.000048954424038755693",
            "extra": "mean: 1.3590013369734735 msec\nrounds: 641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.05432629891305,
            "unit": "iter/sec",
            "range": "stddev: 0.000584401435155186",
            "extra": "mean: 13.878417179997768 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.1668814785979,
            "unit": "iter/sec",
            "range": "stddev: 0.00002578628115322039",
            "extra": "mean: 1.8720741301519013 msec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.6193927029687,
            "unit": "iter/sec",
            "range": "stddev: 0.0003169868889778506",
            "extra": "mean: 3.6816222510796823 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.80985448060821,
            "unit": "iter/sec",
            "range": "stddev: 0.02108922613456547",
            "extra": "mean: 12.529781021502487 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.87968164273818,
            "unit": "iter/sec",
            "range": "stddev: 0.00020745475708091292",
            "extra": "mean: 5.23890228333291 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7673288976354304,
            "unit": "iter/sec",
            "range": "stddev: 0.0014855955534431888",
            "extra": "mean: 565.8256373999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148017.05188940858,
            "unit": "iter/sec",
            "range": "stddev: 4.036193234028953e-7",
            "extra": "mean: 6.755978363541204 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.99050248372991,
            "unit": "iter/sec",
            "range": "stddev: 0.0001305516657716251",
            "extra": "mean: 9.804834525249305 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7128186321169045,
            "unit": "iter/sec",
            "range": "stddev: 0.0030473484728462032",
            "extra": "mean: 1.4028813992000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 771023.0223790797,
            "unit": "iter/sec",
            "range": "stddev: 1.5489256682941447e-7",
            "extra": "mean: 1.2969781329153902 usec\nrounds: 25381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.08830622573277,
            "unit": "iter/sec",
            "range": "stddev: 0.0002313310110826163",
            "extra": "mean: 3.50768508620694 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.46841245443217,
            "unit": "iter/sec",
            "range": "stddev: 0.019896615429967263",
            "extra": "mean: 13.611291799999586 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.44055694141275,
            "unit": "iter/sec",
            "range": "stddev: 0.0007496712536633689",
            "extra": "mean: 10.477725948454609 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 284.4935594516926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002052120396927604",
            "extra": "mean: 3.515018062016274 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.72112271596227,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814581865530762",
            "extra": "mean: 9.928404023255789 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.93215845599086,
            "unit": "iter/sec",
            "range": "stddev: 0.0007683269610384097",
            "extra": "mean: 10.006788760000518 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8675069286611611,
            "unit": "iter/sec",
            "range": "stddev: 0.005672851045271278",
            "extra": "mean: 1.152728545399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1779729.2760649426,
            "unit": "iter/sec",
            "range": "stddev: 8.510442186656543e-8",
            "extra": "mean: 561.883210805546 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.65169583625534,
            "unit": "iter/sec",
            "range": "stddev: 0.024203232823675893",
            "extra": "mean: 13.218474337501362 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6129260.289205181,
            "unit": "iter/sec",
            "range": "stddev: 7.293697292497639e-9",
            "extra": "mean: 163.15182465981638 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2099.909805883739,
            "unit": "iter/sec",
            "range": "stddev: 0.00014212515685551021",
            "extra": "mean: 476.21092924948454 usec\nrounds: 1159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2192.277451359323,
            "unit": "iter/sec",
            "range": "stddev: 0.00008425240778369505",
            "extra": "mean: 456.1466430172647 usec\nrounds: 1790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.62393501772709,
            "unit": "iter/sec",
            "range": "stddev: 0.0006772020805540321",
            "extra": "mean: 10.349402555552464 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1809373.694698103,
            "unit": "iter/sec",
            "range": "stddev: 8.645541910621276e-8",
            "extra": "mean: 552.6774280681977 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}