window.BENCHMARK_DATA = {
  "lastUpdate": 1678962113548,
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
          "id": "3dffff70ca95734fb929df675bf4d896599c42e3",
          "message": "ci: remove unnecessary docs build job",
          "timestamp": "2023-03-16T06:14:53-04:00",
          "tree_id": "93e07cbb8b9bb4ec4c832107fb4ed752f8b260df",
          "url": "https://github.com/ibis-project/ibis/commit/3dffff70ca95734fb929df675bf4d896599c42e3"
        },
        "date": 1678962026961,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.07554796200733,
            "unit": "iter/sec",
            "range": "stddev: 0.00009343009996114596",
            "extra": "mean: 6.13212717968592 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.91366357486088,
            "unit": "iter/sec",
            "range": "stddev: 0.0004870390953331296",
            "extra": "mean: 27.844555538466082 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.22701800489592,
            "unit": "iter/sec",
            "range": "stddev: 0.0005331439254539506",
            "extra": "mean: 8.754496243236767 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4951.443479195459,
            "unit": "iter/sec",
            "range": "stddev: 0.00004277703857248828",
            "extra": "mean: 201.96130768768992 usec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.54787971870485,
            "unit": "iter/sec",
            "range": "stddev: 0.00024599891716327863",
            "extra": "mean: 5.193513433962036 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141079.50100256404,
            "unit": "iter/sec",
            "range": "stddev: 5.229746800249565e-7",
            "extra": "mean: 7.088201991739576 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.327304352947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006168347454584358",
            "extra": "mean: 1.3544128655466385 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.2987183882775,
            "unit": "iter/sec",
            "range": "stddev: 0.0001929571911905206",
            "extra": "mean: 3.352344272221646 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 302.8468415486074,
            "unit": "iter/sec",
            "range": "stddev: 0.0002165138128610558",
            "extra": "mean: 3.3019991058400993 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.0009042542329,
            "unit": "iter/sec",
            "range": "stddev: 0.0001497335609637514",
            "extra": "mean: 7.299221895238718 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 238.76072061437878,
            "unit": "iter/sec",
            "range": "stddev: 0.0036807284748553853",
            "extra": "mean: 4.18829360803905 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.9395565293946,
            "unit": "iter/sec",
            "range": "stddev: 0.00008190921312378215",
            "extra": "mean: 6.291699950824124 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.03436899052814,
            "unit": "iter/sec",
            "range": "stddev: 0.020011715020781532",
            "extra": "mean: 30.27150300000365 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.776772561041501,
            "unit": "iter/sec",
            "range": "stddev: 0.0017167437279909101",
            "extra": "mean: 562.8182368000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495012.2404747506,
            "unit": "iter/sec",
            "range": "stddev: 4.993116746793484e-7",
            "extra": "mean: 2.020152065413436 usec\nrounds: 2203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.1127608760096,
            "unit": "iter/sec",
            "range": "stddev: 0.005623916450450217",
            "extra": "mean: 3.950808313808652 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5310.998180312575,
            "unit": "iter/sec",
            "range": "stddev: 0.00002893363754837918",
            "extra": "mean: 188.28852243009916 usec\nrounds: 2519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.05119681960666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005784494717067103",
            "extra": "mean: 9.610653510633787 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.80461410874211,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925251561733467",
            "extra": "mean: 9.822737493330655 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.80226041707097,
            "unit": "iter/sec",
            "range": "stddev: 0.0003629844864168748",
            "extra": "mean: 9.451593907899648 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11705.027362389586,
            "unit": "iter/sec",
            "range": "stddev: 0.00001205684393528723",
            "extra": "mean: 85.43337568036658 usec\nrounds: 4778"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70949.89148616936,
            "unit": "iter/sec",
            "range": "stddev: 5.711552093126882e-7",
            "extra": "mean: 14.094454255718423 usec\nrounds: 12548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6386146.713488948,
            "unit": "iter/sec",
            "range": "stddev: 8.00083332403783e-9",
            "extra": "mean: 156.58894868290136 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.0831953377728,
            "unit": "iter/sec",
            "range": "stddev: 0.0001464672304971947",
            "extra": "mean: 8.54093533333374 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.58588714746713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001991886312811764",
            "extra": "mean: 3.219721311822507 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.532728840425808,
            "unit": "iter/sec",
            "range": "stddev: 0.0005635961782390108",
            "extra": "mean: 37.68930086363298 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.0585768259393,
            "unit": "iter/sec",
            "range": "stddev: 0.000049441184742600866",
            "extra": "mean: 3.4239706666651966 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5716.94882385079,
            "unit": "iter/sec",
            "range": "stddev: 0.00004529099546451109",
            "extra": "mean: 174.91848026136879 usec\nrounds: 2609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.7582645870932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005950706860939341",
            "extra": "mean: 8.281006715517849 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.84773629053039,
            "unit": "iter/sec",
            "range": "stddev: 0.010603648943670257",
            "extra": "mean: 10.655558029702886 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.08943247195589,
            "unit": "iter/sec",
            "range": "stddev: 0.0006548142785241248",
            "extra": "mean: 8.39705068067637 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1887313.63121124,
            "unit": "iter/sec",
            "range": "stddev: 1.0707470305341377e-7",
            "extra": "mean: 529.8536414205942 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.618749740629121,
            "unit": "iter/sec",
            "range": "stddev: 0.0010694546301320122",
            "extra": "mean: 381.8616130000123 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.93567450966847,
            "unit": "iter/sec",
            "range": "stddev: 0.004201692068386773",
            "extra": "mean: 6.0629697181817415 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.59256744669066,
            "unit": "iter/sec",
            "range": "stddev: 0.0004347219775760632",
            "extra": "mean: 16.23572520930412 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.14178258492272,
            "unit": "iter/sec",
            "range": "stddev: 0.0006696375732573269",
            "extra": "mean: 8.761033666667938 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.4566682258322,
            "unit": "iter/sec",
            "range": "stddev: 0.00016481766456651666",
            "extra": "mean: 21.07185433333197 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12557729.36526292,
            "unit": "iter/sec",
            "range": "stddev: 7.754711748055211e-9",
            "extra": "mean: 79.63223054998242 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.103941055671484,
            "unit": "iter/sec",
            "range": "stddev: 0.0007558644717937617",
            "extra": "mean: 23.19973476922763 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5816.98695780363,
            "unit": "iter/sec",
            "range": "stddev: 0.00004359132949556951",
            "extra": "mean: 171.9103046394965 usec\nrounds: 2091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.91022321579975,
            "unit": "iter/sec",
            "range": "stddev: 0.0006866670533892116",
            "extra": "mean: 8.339572500005461 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4636.575955958961,
            "unit": "iter/sec",
            "range": "stddev: 0.0021646837048472233",
            "extra": "mean: 215.67639773371835 usec\nrounds: 3442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5651.687625221041,
            "unit": "iter/sec",
            "range": "stddev: 0.000045783677297429484",
            "extra": "mean: 176.93829990486947 usec\nrounds: 3141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.27067839617803,
            "unit": "iter/sec",
            "range": "stddev: 0.0006638543489605052",
            "extra": "mean: 9.499321323232834 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9204365885295399,
            "unit": "iter/sec",
            "range": "stddev: 0.0032593487723134125",
            "extra": "mean: 1.0864409481999928 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.46243662743771,
            "unit": "iter/sec",
            "range": "stddev: 0.00006506181039493575",
            "extra": "mean: 10.156157355558864 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.921964424576592,
            "unit": "iter/sec",
            "range": "stddev: 0.0017572912618336264",
            "extra": "mean: 1.0846405493999896 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 740530.8471581064,
            "unit": "iter/sec",
            "range": "stddev: 1.401637197914523e-7",
            "extra": "mean: 1.3503826394776717 usec\nrounds: 24331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1898643.688406603,
            "unit": "iter/sec",
            "range": "stddev: 8.754187921618937e-8",
            "extra": "mean: 526.6917674475452 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17943001783609175,
            "unit": "iter/sec",
            "range": "stddev: 0.008270544404604634",
            "extra": "mean: 5.573203481000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.57060185934958,
            "unit": "iter/sec",
            "range": "stddev: 0.00008505848389541472",
            "extra": "mean: 6.597585466658984 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.14464711677361,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929676435032907",
            "extra": "mean: 10.735990000008478 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.75164961123542,
            "unit": "iter/sec",
            "range": "stddev: 0.00013968932739710004",
            "extra": "mean: 13.93696180391945 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.60930118897255,
            "unit": "iter/sec",
            "range": "stddev: 0.00021357304893119942",
            "extra": "mean: 3.2508769927788155 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13645.684333439236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018189571613460303",
            "extra": "mean: 73.28324293340602 usec\nrounds: 6545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1704245.2444474502,
            "unit": "iter/sec",
            "range": "stddev: 9.661675726396752e-8",
            "extra": "mean: 586.770010512319 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.00507861494123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006727119294679603",
            "extra": "mean: 8.332980666665678 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.74542935820796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002565169599771867",
            "extra": "mean: 3.3031051934290354 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11756.868831034986,
            "unit": "iter/sec",
            "range": "stddev: 0.000015500769914489595",
            "extra": "mean: 85.05666044008824 usec\nrounds: 5139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.34176417013735,
            "unit": "iter/sec",
            "range": "stddev: 0.0007099317463909647",
            "extra": "mean: 10.066259728258432 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1747.8497612433696,
            "unit": "iter/sec",
            "range": "stddev: 0.000004830994755036077",
            "extra": "mean: 572.1315539664171 usec\nrounds: 1399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.61788983721915,
            "unit": "iter/sec",
            "range": "stddev: 0.0007372172186108988",
            "extra": "mean: 9.558594630000243 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8033.184180582052,
            "unit": "iter/sec",
            "range": "stddev: 0.000012149775866058136",
            "extra": "mean: 124.4836390552599 usec\nrounds: 3682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.624818620882099,
            "unit": "iter/sec",
            "range": "stddev: 0.00009095423789955343",
            "extra": "mean: 64.00074293749114 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5699617.799158764,
            "unit": "iter/sec",
            "range": "stddev: 1.1224442261586474e-8",
            "extra": "mean: 175.45036092563137 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.6223036933446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000770388219330842",
            "extra": "mean: 1.454286742342152 msec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.477748607218256,
            "unit": "iter/sec",
            "range": "stddev: 0.0001774094275750376",
            "extra": "mean: 95.44035054544895 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8549287376364938,
            "unit": "iter/sec",
            "range": "stddev: 0.0030136864225610723",
            "extra": "mean: 1.1696881342000096 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5301.254518942985,
            "unit": "iter/sec",
            "range": "stddev: 0.00004395440821612441",
            "extra": "mean: 188.6345951560518 usec\nrounds: 2312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.567696624317612,
            "unit": "iter/sec",
            "range": "stddev: 0.0001819369719439344",
            "extra": "mean: 179.6074871666633 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 547.2849881559455,
            "unit": "iter/sec",
            "range": "stddev: 0.000019787243543969807",
            "extra": "mean: 1.827201589010251 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.18355207397148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006341769985073919",
            "extra": "mean: 10.396787999999566 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1156.3066016346395,
            "unit": "iter/sec",
            "range": "stddev: 0.000040188282235383626",
            "extra": "mean: 864.822529410735 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7373349.608662699,
            "unit": "iter/sec",
            "range": "stddev: 4.744684096655237e-9",
            "extra": "mean: 135.6235704360998 nsec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.44958725832558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007279449619439137",
            "extra": "mean: 8.371732568965411 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.614129677629,
            "unit": "iter/sec",
            "range": "stddev: 0.00016812053220853165",
            "extra": "mean: 3.10931612675834 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1882074.5778423168,
            "unit": "iter/sec",
            "range": "stddev: 1.0141506293409805e-7",
            "extra": "mean: 531.3285731463621 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.21177779511964,
            "unit": "iter/sec",
            "range": "stddev: 0.00008650090717132631",
            "extra": "mean: 2.8311626702891255 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.49648333333786,
            "unit": "iter/sec",
            "range": "stddev: 0.0007670690402036209",
            "extra": "mean: 10.050606478720985 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 306.99421457422244,
            "unit": "iter/sec",
            "range": "stddev: 0.00026790033524444387",
            "extra": "mean: 3.2573903758640004 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.4827254661623,
            "unit": "iter/sec",
            "range": "stddev: 0.0004383666275662667",
            "extra": "mean: 18.354441549020375 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 289.3136778899328,
            "unit": "iter/sec",
            "range": "stddev: 0.00025726673464169044",
            "extra": "mean: 3.45645600751874 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6627423288943594,
            "unit": "iter/sec",
            "range": "stddev: 0.06655572970022425",
            "extra": "mean: 1.5088820442000155 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5865.593075163406,
            "unit": "iter/sec",
            "range": "stddev: 0.00004211764441999489",
            "extra": "mean: 170.4857440987997 usec\nrounds: 2669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.30872893046958,
            "unit": "iter/sec",
            "range": "stddev: 0.00008587892065641426",
            "extra": "mean: 13.457369199999325 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.91934228008202,
            "unit": "iter/sec",
            "range": "stddev: 0.000060979191024917706",
            "extra": "mean: 9.015560130846284 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5417.091851269912,
            "unit": "iter/sec",
            "range": "stddev: 0.000045680828725698433",
            "extra": "mean: 184.600894253911 usec\nrounds: 2506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.0029002781224,
            "unit": "iter/sec",
            "range": "stddev: 0.0006596677610991472",
            "extra": "mean: 8.333131929998103 msec\nrounds: 100"
          }
        ]
      }
    ]
  }
}