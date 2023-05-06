window.BENCHMARK_DATA = {
  "lastUpdate": 1683379405796,
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
          "id": "888718b5cf8c1a6bbdbf337af2d36fb45eed2c68",
          "message": "ci: avoid `now` in benchmarks",
          "timestamp": "2023-05-06T06:16:07-07:00",
          "tree_id": "9cc67709c0885ddf274ff438a068848eb98db54e",
          "url": "https://github.com/ibis-project/ibis/commit/888718b5cf8c1a6bbdbf337af2d36fb45eed2c68"
        },
        "date": 1683379308661,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.55347691345904,
            "unit": "iter/sec",
            "range": "stddev: 0.003276059369778627",
            "extra": "mean: 30.718684909093565 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 910.519219102166,
            "unit": "iter/sec",
            "range": "stddev: 0.006585402462031768",
            "extra": "mean: 1.09827445595939 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 193.60201067692196,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573230125679954",
            "extra": "mean: 5.165235611466733 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 200.92344476730608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006191335531237748",
            "extra": "mean: 4.977019984691792 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116816.86035494276,
            "unit": "iter/sec",
            "range": "stddev: 0.00000853841250459354",
            "extra": "mean: 8.560408120553362 usec\nrounds: 32363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 79.71076047171864,
            "unit": "iter/sec",
            "range": "stddev: 0.0015144614033973174",
            "extra": "mean: 12.545357666670357 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1458.9021245518932,
            "unit": "iter/sec",
            "range": "stddev: 0.00044167422697892743",
            "extra": "mean: 685.4469420333138 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5381968642560324,
            "unit": "iter/sec",
            "range": "stddev: 0.013923565865948886",
            "extra": "mean: 1.8580561620000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 902.1924025305583,
            "unit": "iter/sec",
            "range": "stddev: 0.00011014566150680148",
            "extra": "mean: 1.108411018752875 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 23.45404985953163,
            "unit": "iter/sec",
            "range": "stddev: 0.0011207664512070303",
            "extra": "mean: 42.63655982608923 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10808.199560380408,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391615826827828",
            "extra": "mean: 92.52234790942404 usec\nrounds: 6243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 67.9147638183735,
            "unit": "iter/sec",
            "range": "stddev: 0.011944918889112578",
            "extra": "mean: 14.724338918034524 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1627.8673937596513,
            "unit": "iter/sec",
            "range": "stddev: 0.00011365708179389368",
            "extra": "mean: 614.3006511669503 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8036.128075558301,
            "unit": "iter/sec",
            "range": "stddev: 0.00004324207631663601",
            "extra": "mean: 124.43803665119238 usec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 78.55127450526643,
            "unit": "iter/sec",
            "range": "stddev: 0.00047461286093277463",
            "extra": "mean: 12.730538190477805 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4184943.9957844317,
            "unit": "iter/sec",
            "range": "stddev: 2.666960321721901e-7",
            "extra": "mean: 238.95182373010047 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 123.41419848508231,
            "unit": "iter/sec",
            "range": "stddev: 0.00043214087484414436",
            "extra": "mean: 8.102795401785759 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.27894084970006,
            "unit": "iter/sec",
            "range": "stddev: 0.0011498172991539894",
            "extra": "mean: 7.02844703529509 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1560980.1526460564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016669468418602226",
            "extra": "mean: 640.6231356016123 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.04507442145326,
            "unit": "iter/sec",
            "range": "stddev: 0.0010690738733134955",
            "extra": "mean: 13.150095619051529 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.25681594842861,
            "unit": "iter/sec",
            "range": "stddev: 0.0020869231419256744",
            "extra": "mean: 31.001199920003728 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 79.31807829404951,
            "unit": "iter/sec",
            "range": "stddev: 0.0011468185885928006",
            "extra": "mean: 12.607466311687238 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.86260250701434,
            "unit": "iter/sec",
            "range": "stddev: 0.014295349846224999",
            "extra": "mean: 14.521670160492992 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.895174806335,
            "unit": "iter/sec",
            "range": "stddev: 0.001227182581922711",
            "extra": "mean: 12.516400426233357 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 179.7884707898027,
            "unit": "iter/sec",
            "range": "stddev: 0.004499575303086171",
            "extra": "mean: 5.5620919161670646 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 570.6212165990121,
            "unit": "iter/sec",
            "range": "stddev: 0.00017633773266465842",
            "extra": "mean: 1.752476022465743 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 317.13048845567164,
            "unit": "iter/sec",
            "range": "stddev: 0.00020527974122483246",
            "extra": "mean: 3.1532761320732483 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.7495070701301,
            "unit": "iter/sec",
            "range": "stddev: 0.00021327834609432864",
            "extra": "mean: 3.7488354186052675 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 129.79446316303552,
            "unit": "iter/sec",
            "range": "stddev: 0.004717212405535743",
            "extra": "mean: 7.704488894444554 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.520590085010091,
            "unit": "iter/sec",
            "range": "stddev: 0.004805469421940894",
            "extra": "mean: 153.36035342857355 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1307.2909785790052,
            "unit": "iter/sec",
            "range": "stddev: 0.00010426504594696889",
            "extra": "mean: 764.9406416672259 usec\nrounds: 960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 74.39167515498136,
            "unit": "iter/sec",
            "range": "stddev: 0.0009284457005404122",
            "extra": "mean: 13.442364322576205 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1539.843386151223,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520033602099109",
            "extra": "mean: 649.4166932777885 usec\nrounds: 1428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.07916278014076,
            "unit": "iter/sec",
            "range": "stddev: 0.0013149227989199624",
            "extra": "mean: 23.213078794117003 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.80689697080582,
            "unit": "iter/sec",
            "range": "stddev: 0.0008867049567888685",
            "extra": "mean: 18.245878808513343 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9832037061311495,
            "unit": "iter/sec",
            "range": "stddev: 0.09037232202553",
            "extra": "mean: 1.0170832288000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 195.30517398287031,
            "unit": "iter/sec",
            "range": "stddev: 0.0005195594439092866",
            "extra": "mean: 5.1201920543472506 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 505.8962246942024,
            "unit": "iter/sec",
            "range": "stddev: 0.0002089784218110251",
            "extra": "mean: 1.9766899834140237 msec\nrounds: 422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 128.53752717211813,
            "unit": "iter/sec",
            "range": "stddev: 0.00041172896529705565",
            "extra": "mean: 7.7798291440674 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 72.57643985147463,
            "unit": "iter/sec",
            "range": "stddev: 0.0014323663486346455",
            "extra": "mean: 13.778576106054087 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 199.50218835194076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006382372983222162",
            "extra": "mean: 5.0124763455521855 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2035716.46262433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011417751385439258",
            "extra": "mean: 491.22754487686666 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 143.0472995993676,
            "unit": "iter/sec",
            "range": "stddev: 0.01594782612259129",
            "extra": "mean: 6.990694705881892 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7668877078409384,
            "unit": "iter/sec",
            "range": "stddev: 0.012709563746481285",
            "extra": "mean: 565.9669233999921 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1610.7189209315745,
            "unit": "iter/sec",
            "range": "stddev: 0.00014198461719704412",
            "extra": "mean: 620.8407854435834 usec\nrounds: 1058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.41121309123675,
            "unit": "iter/sec",
            "range": "stddev: 0.000706247784728664",
            "extra": "mean: 13.438834799990218 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.2568697350943,
            "unit": "iter/sec",
            "range": "stddev: 0.0013113793442648424",
            "extra": "mean: 13.46676749999594 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 77.38786940666972,
            "unit": "iter/sec",
            "range": "stddev: 0.001223220939703975",
            "extra": "mean: 12.92192184210481 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 63.901287336186506,
            "unit": "iter/sec",
            "range": "stddev: 0.023599159655716694",
            "extra": "mean: 15.649136999994557 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4548704.928754893,
            "unit": "iter/sec",
            "range": "stddev: 1.5843368474846e-7",
            "extra": "mean: 219.84279386384821 nsec\nrounds: 45872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1417321.3403568093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022277845245217167",
            "extra": "mean: 705.556299426248 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 69.85901293822431,
            "unit": "iter/sec",
            "range": "stddev: 0.001424630625473415",
            "extra": "mean: 14.314545223882435 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.026497006645448,
            "unit": "iter/sec",
            "range": "stddev: 0.0025688121748881944",
            "extra": "mean: 71.2936380000097 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1641.014553587347,
            "unit": "iter/sec",
            "range": "stddev: 0.0001494573406844288",
            "extra": "mean: 609.3791172137661 usec\nrounds: 1220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 54.47734158030704,
            "unit": "iter/sec",
            "range": "stddev: 0.03360077212847329",
            "extra": "mean: 18.356255481480563 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.113774345473225,
            "unit": "iter/sec",
            "range": "stddev: 0.0019583911535962415",
            "extra": "mean: 49.717173058822674 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 85.79261181552702,
            "unit": "iter/sec",
            "range": "stddev: 0.000362204529246805",
            "extra": "mean: 11.656015347221505 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 157.76326131277204,
            "unit": "iter/sec",
            "range": "stddev: 0.0009848940714375838",
            "extra": "mean: 6.338611357795523 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1217460604531817,
            "unit": "iter/sec",
            "range": "stddev: 0.004464238580571215",
            "extra": "mean: 891.4673608000044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.44441116708746,
            "unit": "iter/sec",
            "range": "stddev: 0.0007869600779896082",
            "extra": "mean: 23.01792044445013 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 23.810153327302764,
            "unit": "iter/sec",
            "range": "stddev: 0.0326687596754677",
            "extra": "mean: 41.99888955999768 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.06288631559525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006408202076777364",
            "extra": "mean: 11.10335278947018 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1554.3049122513478,
            "unit": "iter/sec",
            "range": "stddev: 0.00016559650397657098",
            "extra": "mean: 643.374406217079 usec\nrounds: 965"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1600.6539529143363,
            "unit": "iter/sec",
            "range": "stddev: 0.00015660369522973913",
            "extra": "mean: 624.7446540079972 usec\nrounds: 1659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5499758.158556158,
            "unit": "iter/sec",
            "range": "stddev: 2.3320408446321655e-7",
            "extra": "mean: 181.82617692817698 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1476642.0881032674,
            "unit": "iter/sec",
            "range": "stddev: 0.000010376257841482994",
            "extra": "mean: 677.2121748774549 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8774.59932375762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000509724242356056",
            "extra": "mean: 113.96531774305126 usec\nrounds: 3207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 64.2964381892506,
            "unit": "iter/sec",
            "range": "stddev: 0.023198770362828868",
            "extra": "mean: 15.552961068490182 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 390.7102146273897,
            "unit": "iter/sec",
            "range": "stddev: 0.0002903712087947718",
            "extra": "mean: 2.559441659219671 msec\nrounds: 358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1552.4599963467917,
            "unit": "iter/sec",
            "range": "stddev: 0.0001669106767745009",
            "extra": "mean: 644.138980941972 usec\nrounds: 892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5389001858187557,
            "unit": "iter/sec",
            "range": "stddev: 0.004223356308890925",
            "extra": "mean: 1.855631202799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5849.106839801157,
            "unit": "iter/sec",
            "range": "stddev: 0.000047937189631701535",
            "extra": "mean: 170.96627355057777 usec\nrounds: 1104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 138.20197788869467,
            "unit": "iter/sec",
            "range": "stddev: 0.0002650856537931699",
            "extra": "mean: 7.235786457451294 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 819782.558839939,
            "unit": "iter/sec",
            "range": "stddev: 0.000006858098161060148",
            "extra": "mean: 1.2198356615626025 usec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8962016.132249914,
            "unit": "iter/sec",
            "range": "stddev: 7.807801035652639e-8",
            "extra": "mean: 111.5820352522506 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 201.4600699283284,
            "unit": "iter/sec",
            "range": "stddev: 0.000513608286790091",
            "extra": "mean: 4.963762796050655 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 196.73683953706464,
            "unit": "iter/sec",
            "range": "stddev: 0.000580299527137359",
            "extra": "mean: 5.082932115576671 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 70.16514750015052,
            "unit": "iter/sec",
            "range": "stddev: 0.0013848331278155889",
            "extra": "mean: 14.252090042251458 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 175.6931112384674,
            "unit": "iter/sec",
            "range": "stddev: 0.0006770566467382903",
            "extra": "mean: 5.691742794870909 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5213390016448796,
            "unit": "iter/sec",
            "range": "stddev: 0.04382290733338719",
            "extra": "mean: 1.9181377123999823 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3410726.0726198545,
            "unit": "iter/sec",
            "range": "stddev: 2.9867366780246586e-7",
            "extra": "mean: 293.1927040484975 nsec\nrounds: 42736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.28137044313821,
            "unit": "iter/sec",
            "range": "stddev: 0.0356618910397184",
            "extra": "mean: 36.655050085708545 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09871249091786723,
            "unit": "iter/sec",
            "range": "stddev: 0.16627981410736528",
            "extra": "mean: 10.130430208999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 72.95490121580876,
            "unit": "iter/sec",
            "range": "stddev: 0.0015224371928615255",
            "extra": "mean: 13.70709826666598 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 63.3813067042412,
            "unit": "iter/sec",
            "range": "stddev: 0.0010107179004970742",
            "extra": "mean: 15.777522616665841 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4380595.693411511,
            "unit": "iter/sec",
            "range": "stddev: 2.1909070569070116e-7",
            "extra": "mean: 228.27945557810384 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.89701249029225,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879422024314921",
            "extra": "mean: 10.427853527775236 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 72.17289755833217,
            "unit": "iter/sec",
            "range": "stddev: 0.0012791503329219428",
            "extra": "mean: 13.855616634925484 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3250.316752193111,
            "unit": "iter/sec",
            "range": "stddev: 0.0001178357616328017",
            "extra": "mean: 307.6623222414438 usec\nrounds: 1713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 128.46287582996166,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352092166119725",
            "extra": "mean: 7.784350097561556 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 75.30500230611179,
            "unit": "iter/sec",
            "range": "stddev: 0.0014772228281514385",
            "extra": "mean: 13.279330315070444 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 77.23074450543838,
            "unit": "iter/sec",
            "range": "stddev: 0.0011606224981524397",
            "extra": "mean: 12.948211316667843 msec\nrounds: 60"
          }
        ]
      }
    ]
  }
}