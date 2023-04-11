window.BENCHMARK_DATA = {
  "lastUpdate": 1681219058068,
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
          "id": "5208801cc38ff2ccb02fc9f7e83ad40c44222af1",
          "message": "feat(backends): add more array functions",
          "timestamp": "2023-04-11T15:11:04+02:00",
          "tree_id": "58aaf24482daf613a6b5f05b9ec08ce64a56bfc8",
          "url": "https://github.com/ibis-project/ibis/commit/5208801cc38ff2ccb02fc9f7e83ad40c44222af1"
        },
        "date": 1681218955117,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 127.99063886703458,
            "unit": "iter/sec",
            "range": "stddev: 0.004872019912944005",
            "extra": "mean: 7.813071400001904 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 40.89110679587118,
            "unit": "iter/sec",
            "range": "stddev: 0.0028945257824213085",
            "extra": "mean: 24.455195233330567 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1581756.5551596035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011092584403594604",
            "extra": "mean: 632.2085384998435 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3777.740086323425,
            "unit": "iter/sec",
            "range": "stddev: 0.00009047101238549238",
            "extra": "mean: 264.708523389501 usec\nrounds: 791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 229.595336745697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004537066952639989",
            "extra": "mean: 4.355489158334318 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 574.6437291785692,
            "unit": "iter/sec",
            "range": "stddev: 0.00005986926211015853",
            "extra": "mean: 1.7402086705609077 msec\nrounds: 428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4765122.514438808,
            "unit": "iter/sec",
            "range": "stddev: 9.97985446354151e-7",
            "extra": "mean: 209.85819293611283 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.47689591091197,
            "unit": "iter/sec",
            "range": "stddev: 0.009589127306751528",
            "extra": "mean: 223.36905300000467 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1705.1721692170195,
            "unit": "iter/sec",
            "range": "stddev: 0.00035246530280094024",
            "extra": "mean: 586.4510446820041 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 236.57888411031598,
            "unit": "iter/sec",
            "range": "stddev: 0.0003646315355610879",
            "extra": "mean: 4.226919928888088 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 97.10910769930409,
            "unit": "iter/sec",
            "range": "stddev: 0.02796520561651695",
            "extra": "mean: 10.297695279998607 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10919.14075856945,
            "unit": "iter/sec",
            "range": "stddev: 0.00008694900377179643",
            "extra": "mean: 91.58229773850933 usec\nrounds: 1592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 127.3228426286794,
            "unit": "iter/sec",
            "range": "stddev: 0.00044254493565438623",
            "extra": "mean: 7.8540502187527395 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 74.5349013925104,
            "unit": "iter/sec",
            "range": "stddev: 0.0017150940507824253",
            "extra": "mean: 13.416533480521709 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1657.5840813114637,
            "unit": "iter/sec",
            "range": "stddev: 0.00028915048073382456",
            "extra": "mean: 603.2876469281789 usec\nrounds: 1351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9819.105163806502,
            "unit": "iter/sec",
            "range": "stddev: 0.00005363988983070818",
            "extra": "mean: 101.84227414999364 usec\nrounds: 4410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 79.03986100508853,
            "unit": "iter/sec",
            "range": "stddev: 0.0021622715349955547",
            "extra": "mean: 12.651844111107694 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.600452229479178,
            "unit": "iter/sec",
            "range": "stddev: 0.0018230257281517607",
            "extra": "mean: 51.019230999986576 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 74.92548468368538,
            "unit": "iter/sec",
            "range": "stddev: 0.0016524686054890545",
            "extra": "mean: 13.34659367532586 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1679.8051845250839,
            "unit": "iter/sec",
            "range": "stddev: 0.00036660966394689025",
            "extra": "mean: 595.3071280005133 usec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1561056.574879172,
            "unit": "iter/sec",
            "range": "stddev: 0.000001089296693249006",
            "extra": "mean: 640.5917736052593 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 78.52288160801228,
            "unit": "iter/sec",
            "range": "stddev: 0.0009970789637839342",
            "extra": "mean: 12.735141394734072 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.480723678289733,
            "unit": "iter/sec",
            "range": "stddev: 0.002665753627623415",
            "extra": "mean: 80.12355899998843 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 123.88235847663115,
            "unit": "iter/sec",
            "range": "stddev: 0.0016945145550054054",
            "extra": "mean: 8.072174378151166 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 607047.8673263966,
            "unit": "iter/sec",
            "range": "stddev: 0.000004103289403906298",
            "extra": "mean: 1.6473165524891324 usec\nrounds: 20619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 222.65920064157874,
            "unit": "iter/sec",
            "range": "stddev: 0.0007017077865784121",
            "extra": "mean: 4.491168553190534 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.044922805292901,
            "unit": "iter/sec",
            "range": "stddev: 0.006222921282282834",
            "extra": "mean: 489.0160143999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 198.80332082493064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008536128643801214",
            "extra": "mean: 5.0300970620134455 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1394697.970681439,
            "unit": "iter/sec",
            "range": "stddev: 0.00002345185115671338",
            "extra": "mean: 717.0011149520835 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 384.2102695960365,
            "unit": "iter/sec",
            "range": "stddev: 0.0009433867886215267",
            "extra": "mean: 2.6027414651133935 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57431.82059459577,
            "unit": "iter/sec",
            "range": "stddev: 0.00003378632334191665",
            "extra": "mean: 17.41195019846016 usec\nrounds: 11325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.61705547889564,
            "unit": "iter/sec",
            "range": "stddev: 0.001492651279574911",
            "extra": "mean: 13.051924192981451 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1766.5402865594444,
            "unit": "iter/sec",
            "range": "stddev: 0.00018624828023880807",
            "extra": "mean: 566.0782307702835 usec\nrounds: 1196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6890078572298132,
            "unit": "iter/sec",
            "range": "stddev: 0.018347144507403174",
            "extra": "mean: 1.4513622587999861 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.90320099303393,
            "unit": "iter/sec",
            "range": "stddev: 0.001179992288378803",
            "extra": "mean: 14.10373560000835 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.41794834282676,
            "unit": "iter/sec",
            "range": "stddev: 0.002604625414343379",
            "extra": "mean: 13.808731438593057 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.45016582159145,
            "unit": "iter/sec",
            "range": "stddev: 0.0013166834525836985",
            "extra": "mean: 13.253781341774488 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 77.07392648042178,
            "unit": "iter/sec",
            "range": "stddev: 0.0019864367100272083",
            "extra": "mean: 12.974556320989029 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6208542070736733,
            "unit": "iter/sec",
            "range": "stddev: 0.06139144492794297",
            "extra": "mean: 1.6106841003999761 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1439160941640452,
            "unit": "iter/sec",
            "range": "stddev: 0.12682710762240987",
            "extra": "mean: 6.948493188399993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.96136321947232,
            "unit": "iter/sec",
            "range": "stddev: 0.0009682891383538207",
            "extra": "mean: 11.770055965519274 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 84.83779183880442,
            "unit": "iter/sec",
            "range": "stddev: 0.0009500136827323959",
            "extra": "mean: 11.787199764699729 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.94837906885477,
            "unit": "iter/sec",
            "range": "stddev: 0.0007336322803756431",
            "extra": "mean: 27.817665939391066 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1001.3154433497529,
            "unit": "iter/sec",
            "range": "stddev: 0.000018898775652207032",
            "extra": "mean: 998.6862847682122 usec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.58580678265454,
            "unit": "iter/sec",
            "range": "stddev: 0.00008740979234343719",
            "extra": "mean: 9.843894847825798 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7239.9873252065145,
            "unit": "iter/sec",
            "range": "stddev: 0.000015750410535956772",
            "extra": "mean: 138.12178876590448 usec\nrounds: 4611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 81.99364178256535,
            "unit": "iter/sec",
            "range": "stddev: 0.0009673654519858852",
            "extra": "mean: 12.196067624997653 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 232.75601984889877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003904387763912325",
            "extra": "mean: 4.296344303572397 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.63316485597664,
            "unit": "iter/sec",
            "range": "stddev: 0.000961708502954843",
            "extra": "mean: 12.1016785662624 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 66.20251435122823,
            "unit": "iter/sec",
            "range": "stddev: 0.0291360302181095",
            "extra": "mean: 15.105166469881175 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.09627905095974,
            "unit": "iter/sec",
            "range": "stddev: 0.0004218454701592832",
            "extra": "mean: 12.331021986491074 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11163.546781036108,
            "unit": "iter/sec",
            "range": "stddev: 0.000002437842420242998",
            "extra": "mean: 89.57726604404378 usec\nrounds: 4285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 402491.7348533283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013053989068343546",
            "extra": "mean: 2.4845230681927153 usec\nrounds: 1734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1507.846735911174,
            "unit": "iter/sec",
            "range": "stddev: 0.000016887832358135026",
            "extra": "mean: 663.1973768844032 usec\nrounds: 1194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 80.9520110936029,
            "unit": "iter/sec",
            "range": "stddev: 0.0009570648752328518",
            "extra": "mean: 12.352997615386275 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1781.6965459260603,
            "unit": "iter/sec",
            "range": "stddev: 0.00012548895171750175",
            "extra": "mean: 561.262804424553 usec\nrounds: 1447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.124437636167514,
            "unit": "iter/sec",
            "range": "stddev: 0.00036537663590408486",
            "extra": "mean: 25.559472810813705 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 245.0652777246489,
            "unit": "iter/sec",
            "range": "stddev: 0.0002969579781691978",
            "extra": "mean: 4.08054543379084 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.82087521793957,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121142724791872",
            "extra": "mean: 4.135292286485838 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7226286342668758,
            "unit": "iter/sec",
            "range": "stddev: 0.01794935160869204",
            "extra": "mean: 1.3838366659999906 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 631.0248735264611,
            "unit": "iter/sec",
            "range": "stddev: 0.00005111929567136479",
            "extra": "mean: 1.5847235853184898 msec\nrounds: 504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.120550487653624,
            "unit": "iter/sec",
            "range": "stddev: 0.00037873732350075475",
            "extra": "mean: 22.665175047619424 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.959819262961496,
            "unit": "iter/sec",
            "range": "stddev: 0.0006500054960944627",
            "extra": "mean: 32.299930161295904 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9320480.328955354,
            "unit": "iter/sec",
            "range": "stddev: 5.856223573827046e-9",
            "extra": "mean: 107.29060785561715 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 58.969350498267175,
            "unit": "iter/sec",
            "range": "stddev: 0.026220851913009144",
            "extra": "mean: 16.957961916663557 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.48980125252288,
            "unit": "iter/sec",
            "range": "stddev: 0.0002164660522155071",
            "extra": "mean: 10.472322560976947 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1809.9962463042575,
            "unit": "iter/sec",
            "range": "stddev: 0.00010256792715644848",
            "extra": "mean: 552.4873336294763 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 248.01209983755228,
            "unit": "iter/sec",
            "range": "stddev: 0.00005698429106008633",
            "extra": "mean: 4.032061341583733 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4651617.351675725,
            "unit": "iter/sec",
            "range": "stddev: 1.4753781211141028e-8",
            "extra": "mean: 214.97898997222944 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.01162638554763,
            "unit": "iter/sec",
            "range": "stddev: 0.0003850652386500592",
            "extra": "mean: 4.237079398649642 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3664900042152444,
            "unit": "iter/sec",
            "range": "stddev: 0.0016693714109955082",
            "extra": "mean: 731.8019136000089 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.61341918433953,
            "unit": "iter/sec",
            "range": "stddev: 0.00005829868680442199",
            "extra": "mean: 5.827050149999309 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1831.7635526049353,
            "unit": "iter/sec",
            "range": "stddev: 0.00009984802852495239",
            "extra": "mean: 545.9219878995347 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5617198.556134474,
            "unit": "iter/sec",
            "range": "stddev: 1.4299335722051491e-8",
            "extra": "mean: 178.0246843700546 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.4542202572568,
            "unit": "iter/sec",
            "range": "stddev: 0.00024897135444914995",
            "extra": "mean: 7.3284651666669065 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.587479746644547,
            "unit": "iter/sec",
            "range": "stddev: 0.0030191226042456227",
            "extra": "mean: 1.7021863403999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.14140579763291,
            "unit": "iter/sec",
            "range": "stddev: 0.0010422818761500784",
            "extra": "mean: 12.477944329116527 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 69.69204303695204,
            "unit": "iter/sec",
            "range": "stddev: 0.022131948134513836",
            "extra": "mean: 14.348840361442425 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.59546471599103,
            "unit": "iter/sec",
            "range": "stddev: 0.001051169090772266",
            "extra": "mean: 28.093466624998342 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.22724494774775,
            "unit": "iter/sec",
            "range": "stddev: 0.00011467082876614177",
            "extra": "mean: 15.569716571426236 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142483.50887351928,
            "unit": "iter/sec",
            "range": "stddev: 4.989969462535741e-7",
            "extra": "mean: 7.01835607436989 usec\nrounds: 36102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.5434501570303,
            "unit": "iter/sec",
            "range": "stddev: 0.00011864147677585116",
            "extra": "mean: 10.577147315219271 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 113.81684512631651,
            "unit": "iter/sec",
            "range": "stddev: 0.00005283829024892202",
            "extra": "mean: 8.786045676192987 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.06648447246611,
            "unit": "iter/sec",
            "range": "stddev: 0.00034079944821133765",
            "extra": "mean: 23.21991247368553 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1783.8577088299292,
            "unit": "iter/sec",
            "range": "stddev: 0.00011200732804671416",
            "extra": "mean: 560.5828284678163 usec\nrounds: 1096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1481615.1373077356,
            "unit": "iter/sec",
            "range": "stddev: 1.664124668554567e-7",
            "extra": "mean: 674.9391085576478 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 178.42416282483714,
            "unit": "iter/sec",
            "range": "stddev: 0.004705943087349793",
            "extra": "mean: 5.60462206557596 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.98977126744669,
            "unit": "iter/sec",
            "range": "stddev: 0.0005642982282810674",
            "extra": "mean: 111.23753544443895 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}