window.BENCHMARK_DATA = {
  "lastUpdate": 1679599360977,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7bd22af6158ff60d2aa70d41a7d5156a67e14bfa",
          "message": "feat(pyspark): add read_csv, read_parquet, and register",
          "timestamp": "2023-03-23T15:17:01-04:00",
          "tree_id": "1be88023872d1190ed911d0ea00179392e9e1fbb",
          "url": "https://github.com/ibis-project/ibis/commit/7bd22af6158ff60d2aa70d41a7d5156a67e14bfa"
        },
        "date": 1679599275794,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 128.8586097232312,
            "unit": "iter/sec",
            "range": "stddev: 0.00452708071283084",
            "extra": "mean: 7.760443808511117 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6332400.78647961,
            "unit": "iter/sec",
            "range": "stddev: 8.619498726445892e-9",
            "extra": "mean: 157.9179893562358 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 115.50357894498937,
            "unit": "iter/sec",
            "range": "stddev: 0.00030898682174821144",
            "extra": "mean: 8.657740384618453 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.85970907350415,
            "unit": "iter/sec",
            "range": "stddev: 0.0005047441866544887",
            "extra": "mean: 8.206157782608962 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.48820294377846,
            "unit": "iter/sec",
            "range": "stddev: 0.0005307609820287188",
            "extra": "mean: 9.757220551018598 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 112.55914830621772,
            "unit": "iter/sec",
            "range": "stddev: 0.0066827894159330785",
            "extra": "mean: 8.88421789830441 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.924512705190001,
            "unit": "iter/sec",
            "range": "stddev: 0.0040175603494239185",
            "extra": "mean: 1.0816509003999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 307.4009892408475,
            "unit": "iter/sec",
            "range": "stddev: 0.00015089833709893598",
            "extra": "mean: 3.2530799672102026 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6194602694843243,
            "unit": "iter/sec",
            "range": "stddev: 0.0020275876691716616",
            "extra": "mean: 381.7580330000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.15854807984591,
            "unit": "iter/sec",
            "range": "stddev: 0.00006567416606130531",
            "extra": "mean: 8.996159245276337 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5729.5061634939375,
            "unit": "iter/sec",
            "range": "stddev: 0.00004528998045919384",
            "extra": "mean: 174.5351120087085 usec\nrounds: 866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.14032344703184,
            "unit": "iter/sec",
            "range": "stddev: 0.011467927761768172",
            "extra": "mean: 22.15314210527116 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.5494874757048,
            "unit": "iter/sec",
            "range": "stddev: 0.000010716991570016698",
            "extra": "mean: 569.946876470674 usec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.95812704786282,
            "unit": "iter/sec",
            "range": "stddev: 0.0005419439370322792",
            "extra": "mean: 8.267323778949574 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 705037.1042288031,
            "unit": "iter/sec",
            "range": "stddev: 7.626274252992311e-7",
            "extra": "mean: 1.418365067600008 usec\nrounds: 23697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.75856133254547,
            "unit": "iter/sec",
            "range": "stddev: 0.00006977501105182563",
            "extra": "mean: 6.106550960528374 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 122.176162240053,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491005163112215",
            "extra": "mean: 8.1849026984101 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5849248.395280463,
            "unit": "iter/sec",
            "range": "stddev: 8.766408159364731e-9",
            "extra": "mean: 170.96213605912416 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.25392629788507,
            "unit": "iter/sec",
            "range": "stddev: 0.0005429346717577976",
            "extra": "mean: 8.676493999999636 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5318.636554028468,
            "unit": "iter/sec",
            "range": "stddev: 0.000024440114333278762",
            "extra": "mean: 188.01811137904792 usec\nrounds: 1661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139591.60128187915,
            "unit": "iter/sec",
            "range": "stddev: 2.970375584410617e-7",
            "extra": "mean: 7.163754773331147 usec\nrounds: 42373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8010.4380818076415,
            "unit": "iter/sec",
            "range": "stddev: 0.000016940529072933664",
            "extra": "mean: 124.83711749437045 usec\nrounds: 3464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.8165214709996,
            "unit": "iter/sec",
            "range": "stddev: 0.005846990616309233",
            "extra": "mean: 3.7062222674436263 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1883165.58460594,
            "unit": "iter/sec",
            "range": "stddev: 8.428585564677729e-8",
            "extra": "mean: 531.020749409699 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 550.5922344787599,
            "unit": "iter/sec",
            "range": "stddev: 0.00002099683322899659",
            "extra": "mean: 1.8162261241237625 msec\nrounds: 427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 753.7834988308938,
            "unit": "iter/sec",
            "range": "stddev: 0.000014861740119032623",
            "extra": "mean: 1.326640874403571 msec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.9033446971052,
            "unit": "iter/sec",
            "range": "stddev: 0.00009743261597398858",
            "extra": "mean: 16.976964638294046 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17950011825704737,
            "unit": "iter/sec",
            "range": "stddev: 0.053428568210216534",
            "extra": "mean: 5.571026970399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.67053018623142,
            "unit": "iter/sec",
            "range": "stddev: 0.017028264580708222",
            "extra": "mean: 29.699562034485602 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.8017359602267,
            "unit": "iter/sec",
            "range": "stddev: 0.00018673436522831944",
            "extra": "mean: 3.2174852463757473 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.46712652637034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005097484104171462",
            "extra": "mean: 10.585692999996688 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.27169566900153,
            "unit": "iter/sec",
            "range": "stddev: 0.000060238592481012854",
            "extra": "mean: 10.49629685897749 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6689368843290205,
            "unit": "iter/sec",
            "range": "stddev: 0.047600520544049604",
            "extra": "mean: 1.4949093456000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.47377892598286,
            "unit": "iter/sec",
            "range": "stddev: 0.004111502759251701",
            "extra": "mean: 4.22879866233712 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.99701384325803,
            "unit": "iter/sec",
            "range": "stddev: 0.0004848649945931065",
            "extra": "mean: 9.709019346151248 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.9405340886394,
            "unit": "iter/sec",
            "range": "stddev: 0.0002380033059537306",
            "extra": "mean: 3.5218641931828727 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.7321296311062,
            "unit": "iter/sec",
            "range": "stddev: 0.013254673752305166",
            "extra": "mean: 10.90130583495035 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.97691998344334,
            "unit": "iter/sec",
            "range": "stddev: 0.000530439835255812",
            "extra": "mean: 8.266039506848562 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.18142047246948,
            "unit": "iter/sec",
            "range": "stddev: 0.00022326823563075248",
            "extra": "mean: 21.194783666666066 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.670727071673934,
            "unit": "iter/sec",
            "range": "stddev: 0.0003406044626623741",
            "extra": "mean: 36.139274454543816 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12999075.35905198,
            "unit": "iter/sec",
            "range": "stddev: 3.270546532009321e-9",
            "extra": "mean: 76.92854856039503 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5504.019032268669,
            "unit": "iter/sec",
            "range": "stddev: 0.00005856797484718028",
            "extra": "mean: 181.68541826204694 usec\nrounds: 2037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11840.480630488637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017233345204515289",
            "extra": "mean: 84.45603106896274 usec\nrounds: 5182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5471.473898183268,
            "unit": "iter/sec",
            "range": "stddev: 0.00004503335300053924",
            "extra": "mean: 182.7661099383179 usec\nrounds: 2274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.24001097479757,
            "unit": "iter/sec",
            "range": "stddev: 0.003905517125809636",
            "extra": "mean: 5.772338586064145 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1905006.4603700638,
            "unit": "iter/sec",
            "range": "stddev: 9.995530348787409e-8",
            "extra": "mean: 524.9326030137145 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.3053001704703,
            "unit": "iter/sec",
            "range": "stddev: 0.0005893477535492771",
            "extra": "mean: 9.406868692307988 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.9397506109668,
            "unit": "iter/sec",
            "range": "stddev: 0.00018429204515800975",
            "extra": "mean: 3.356383288733246 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 300.8440143618742,
            "unit": "iter/sec",
            "range": "stddev: 0.00021411018680837006",
            "extra": "mean: 3.3239817056726837 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5566.186571914993,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028040629851626",
            "extra": "mean: 179.65621293501837 usec\nrounds: 3015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.05330745226873,
            "unit": "iter/sec",
            "range": "stddev: 0.00007309612138192545",
            "extra": "mean: 9.169827338228027 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.56565755842243,
            "unit": "iter/sec",
            "range": "stddev: 0.016016393463003688",
            "extra": "mean: 11.16499367347037 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68893.11205923179,
            "unit": "iter/sec",
            "range": "stddev: 0.000010358491466919407",
            "extra": "mean: 14.515239188791998 usec\nrounds: 13851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.6600227121706,
            "unit": "iter/sec",
            "range": "stddev: 0.00004029935803391867",
            "extra": "mean: 2.827574325000423 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.483226146312479,
            "unit": "iter/sec",
            "range": "stddev: 0.00013397780222021226",
            "extra": "mean: 64.58602300000393 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.65721678903242,
            "unit": "iter/sec",
            "range": "stddev: 0.0004403464880661532",
            "extra": "mean: 14.780389254234075 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2470746.085436042,
            "unit": "iter/sec",
            "range": "stddev: 1.8976138086528616e-8",
            "extra": "mean: 404.7360454779129 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.5350041561547,
            "unit": "iter/sec",
            "range": "stddev: 0.00021020594031310108",
            "extra": "mean: 3.2202488821425845 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.1703884411966,
            "unit": "iter/sec",
            "range": "stddev: 0.00006465399875079427",
            "extra": "mean: 850.9404336901723 usec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.2435533656607,
            "unit": "iter/sec",
            "range": "stddev: 0.00018823453803774092",
            "extra": "mean: 3.2026281702889943 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5314.321561828305,
            "unit": "iter/sec",
            "range": "stddev: 0.000042673071669557966",
            "extra": "mean: 188.17077370379644 usec\nrounds: 2700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.384405112757895,
            "unit": "iter/sec",
            "range": "stddev: 0.00023926948128366607",
            "extra": "mean: 96.29824618180939 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8456915027581374,
            "unit": "iter/sec",
            "range": "stddev: 0.004069374166223691",
            "extra": "mean: 1.1824642872000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.4756141444298,
            "unit": "iter/sec",
            "range": "stddev: 0.0004857503170554645",
            "extra": "mean: 28.188377400000977 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.2650592353591,
            "unit": "iter/sec",
            "range": "stddev: 0.0003764371639423904",
            "extra": "mean: 14.231824620689647 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.1559729978132,
            "unit": "iter/sec",
            "range": "stddev: 0.00010902927542111849",
            "extra": "mean: 6.572203379846101 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.755797607706867,
            "unit": "iter/sec",
            "range": "stddev: 0.0019200482654431435",
            "extra": "mean: 569.5417259999772 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1672863.0431861135,
            "unit": "iter/sec",
            "range": "stddev: 7.184756685618319e-8",
            "extra": "mean: 597.7775670717268 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5811.343553086018,
            "unit": "iter/sec",
            "range": "stddev: 0.00005530787605763171",
            "extra": "mean: 172.07724700236776 usec\nrounds: 2502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9196606229743444,
            "unit": "iter/sec",
            "range": "stddev: 0.0022421160998439883",
            "extra": "mean: 1.0873576349999894 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.51046568613091,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550405694237454",
            "extra": "mean: 9.301420039602732 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.08825478534794,
            "unit": "iter/sec",
            "range": "stddev: 0.00006316191726237738",
            "extra": "mean: 8.397133720722183 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 486707.83727616206,
            "unit": "iter/sec",
            "range": "stddev: 3.6973033034110096e-7",
            "extra": "mean: 2.054620705506724 usec\nrounds: 2067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.617262116131,
            "unit": "iter/sec",
            "range": "stddev: 0.00007115426802986526",
            "extra": "mean: 13.401724636366907 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.73068315800234,
            "unit": "iter/sec",
            "range": "stddev: 0.000023419903393636367",
            "extra": "mean: 5.215649282258673 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.757508693821,
            "unit": "iter/sec",
            "range": "stddev: 0.00018682174231340526",
            "extra": "mean: 3.1669872369358756 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11609.844392854671,
            "unit": "iter/sec",
            "range": "stddev: 0.000013678480401909571",
            "extra": "mean: 86.13379871098482 usec\nrounds: 5584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7329239.363054398,
            "unit": "iter/sec",
            "range": "stddev: 4.168745041801713e-9",
            "extra": "mean: 136.43980643350167 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.9569405593274,
            "unit": "iter/sec",
            "range": "stddev: 0.00007132267777034039",
            "extra": "mean: 3.4134709288359995 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.9583684569288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000490118371115992",
            "extra": "mean: 6.251626655402308 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.6819932236737,
            "unit": "iter/sec",
            "range": "stddev: 0.000018548264454135368",
            "extra": "mean: 1.4457510963085365 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5840.836967820204,
            "unit": "iter/sec",
            "range": "stddev: 0.000042800548471119796",
            "extra": "mean: 171.20833974813016 usec\nrounds: 2858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.2997179076258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005407376177527835",
            "extra": "mean: 9.775198020614054 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.60673840668537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783272432004911",
            "extra": "mean: 8.291410689077791 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.70025827473604,
            "unit": "iter/sec",
            "range": "stddev: 0.000053105701684834166",
            "extra": "mean: 10.131685747128046 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.510983506778173,
            "unit": "iter/sec",
            "range": "stddev: 0.00024388214809091177",
            "extra": "mean: 181.4558143333329 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13292.001280328335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026006346950807014",
            "extra": "mean: 75.23321574456682 usec\nrounds: 6707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5596.288501001614,
            "unit": "iter/sec",
            "range": "stddev: 0.000046189937589462884",
            "extra": "mean: 178.68985843403567 usec\nrounds: 2656"
          }
        ]
      }
    ]
  }
}