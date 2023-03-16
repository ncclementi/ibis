window.BENCHMARK_DATA = {
  "lastUpdate": 1678962400909,
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
      },
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "1ce3ef963ec3caf22a2a985873f93666fc17dcb0",
          "message": "fix(mssql): remove invalid aggregations",
          "timestamp": "2023-03-16T06:16:00-04:00",
          "tree_id": "4718ca433afd6e831b27b818e78ac5e1dc9d1508",
          "url": "https://github.com/ibis-project/ibis/commit/1ce3ef963ec3caf22a2a985873f93666fc17dcb0"
        },
        "date": 1678962307436,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 68.8829980818672,
            "unit": "iter/sec",
            "range": "stddev: 0.013083806905193349",
            "extra": "mean: 14.517370437499011 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1415.1638517560414,
            "unit": "iter/sec",
            "range": "stddev: 0.000055062549409852115",
            "extra": "mean: 706.6319555570367 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4108.496505210393,
            "unit": "iter/sec",
            "range": "stddev: 0.00010069707267098083",
            "extra": "mean: 243.3980407995481 usec\nrounds: 1201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.92066268378159,
            "unit": "iter/sec",
            "range": "stddev: 0.001045983703612145",
            "extra": "mean: 11.77569708474476 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.04098983951445,
            "unit": "iter/sec",
            "range": "stddev: 0.0012269503057166773",
            "extra": "mean: 11.488839934423916 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 411260.3242350837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018423093675242252",
            "extra": "mean: 2.4315498993488665 usec\nrounds: 1493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 125.79075932489974,
            "unit": "iter/sec",
            "range": "stddev: 0.004622562966250519",
            "extra": "mean: 7.949709544380293 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10952.478063297145,
            "unit": "iter/sec",
            "range": "stddev: 0.00002981056742034202",
            "extra": "mean: 91.30353826967256 usec\nrounds: 2404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 233.49475775371886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005338010135412742",
            "extra": "mean: 4.282751397163104 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.27324425869901,
            "unit": "iter/sec",
            "range": "stddev: 0.0015444518718330227",
            "extra": "mean: 12.614596631577438 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.70271200034474,
            "unit": "iter/sec",
            "range": "stddev: 0.0019435810515362065",
            "extra": "mean: 23.979255833331255 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1674908.5422621118,
            "unit": "iter/sec",
            "range": "stddev: 0.000003994158881992858",
            "extra": "mean: 597.0475251439173 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 696032.8676909837,
            "unit": "iter/sec",
            "range": "stddev: 0.000001765762885830828",
            "extra": "mean: 1.4367137622644108 usec\nrounds: 21835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 91.78921254623012,
            "unit": "iter/sec",
            "range": "stddev: 0.001850130160303439",
            "extra": "mean: 10.894526407407023 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3828.478545666808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000700708045224411",
            "extra": "mean: 261.20036669183673 usec\nrounds: 1339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3729.9773887083743,
            "unit": "iter/sec",
            "range": "stddev: 0.00020974562794980148",
            "extra": "mean: 268.09813995850584 usec\nrounds: 1922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 220.28141626906555,
            "unit": "iter/sec",
            "range": "stddev: 0.0007584014348084967",
            "extra": "mean: 4.53964758778624 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3768.144472270832,
            "unit": "iter/sec",
            "range": "stddev: 0.00014153166761799048",
            "extra": "mean: 265.38260604359493 usec\nrounds: 1820"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.14673272101149,
            "unit": "iter/sec",
            "range": "stddev: 0.0032017073185333015",
            "extra": "mean: 122.74859557143307 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 52.316467083954116,
            "unit": "iter/sec",
            "range": "stddev: 0.0016632350185351668",
            "extra": "mean: 19.11444055263258 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 245.55658313182786,
            "unit": "iter/sec",
            "range": "stddev: 0.0006556159017478184",
            "extra": "mean: 4.07238114835287 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 126010.77770704408,
            "unit": "iter/sec",
            "range": "stddev: 0.000028121290129228656",
            "extra": "mean: 7.9358291266549275 usec\nrounds: 41323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 80.81483882245715,
            "unit": "iter/sec",
            "range": "stddev: 0.0012608885790751168",
            "extra": "mean: 12.373965159998761 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 596.7553224072593,
            "unit": "iter/sec",
            "range": "stddev: 0.00046605865339808964",
            "extra": "mean: 1.6757286654203378 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.094660940410938,
            "unit": "iter/sec",
            "range": "stddev: 0.006105066787382061",
            "extra": "mean: 82.6811106923038 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.19903981750508,
            "unit": "iter/sec",
            "range": "stddev: 0.0013025668187652602",
            "extra": "mean: 12.165592228572969 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 130.8730655313031,
            "unit": "iter/sec",
            "range": "stddev: 0.0003795371216911482",
            "extra": "mean: 7.640991642858808 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 955.2773092622429,
            "unit": "iter/sec",
            "range": "stddev: 0.00015030245139250036",
            "extra": "mean: 1.0468164482754188 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.55040511014191,
            "unit": "iter/sec",
            "range": "stddev: 0.0012248724991143097",
            "extra": "mean: 9.945260776469373 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5255725497247279,
            "unit": "iter/sec",
            "range": "stddev: 0.04251034465064542",
            "extra": "mean: 1.9026868898000031 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0439787324360903,
            "unit": "iter/sec",
            "range": "stddev: 0.06399424438492658",
            "extra": "mean: 957.8739191999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.21768970102015,
            "unit": "iter/sec",
            "range": "stddev: 0.0017334254544325409",
            "extra": "mean: 18.790744311112604 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10878252206736423,
            "unit": "iter/sec",
            "range": "stddev: 0.1778829393252158",
            "extra": "mean: 9.1926532038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4078.2446078715134,
            "unit": "iter/sec",
            "range": "stddev: 0.00007135373083194769",
            "extra": "mean: 245.20353636215862 usec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 227.19998875546906,
            "unit": "iter/sec",
            "range": "stddev: 0.0004045208365177061",
            "extra": "mean: 4.401408668537746 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.14326794023579,
            "unit": "iter/sec",
            "range": "stddev: 0.001001275201204184",
            "extra": "mean: 10.086413538464424 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3683.542522854064,
            "unit": "iter/sec",
            "range": "stddev: 0.00008681218633271423",
            "extra": "mean: 271.47779448604956 usec\nrounds: 2394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3772.9706318134213,
            "unit": "iter/sec",
            "range": "stddev: 0.0001005712932374578",
            "extra": "mean: 265.04314440405943 usec\nrounds: 2493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.525853414149987,
            "unit": "iter/sec",
            "range": "stddev: 0.02728212459496446",
            "extra": "mean: 1.9016706425999814 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.407088173963064,
            "unit": "iter/sec",
            "range": "stddev: 0.00361475748060983",
            "extra": "mean: 32.887068774190574 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.07956742775254,
            "unit": "iter/sec",
            "range": "stddev: 0.004007222156646715",
            "extra": "mean: 49.801869666667805 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1508850.1267833593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037774572369397315",
            "extra": "mean: 662.7563481946673 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5754.304690428938,
            "unit": "iter/sec",
            "range": "stddev: 0.000021989652685095504",
            "extra": "mean: 173.7829423011415 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 217.79838754387796,
            "unit": "iter/sec",
            "range": "stddev: 0.0008028176742524251",
            "extra": "mean: 4.591402219626343 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.69521821457553,
            "unit": "iter/sec",
            "range": "stddev: 0.0008464175541798753",
            "extra": "mean: 9.83330403883901 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1562383.6634467037,
            "unit": "iter/sec",
            "range": "stddev: 0.000004493564820494676",
            "extra": "mean: 640.047655000402 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 224.3998140462845,
            "unit": "iter/sec",
            "range": "stddev: 0.0004924064167506462",
            "extra": "mean: 4.456331678571449 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5394345.727736778,
            "unit": "iter/sec",
            "range": "stddev: 7.677049148616399e-7",
            "extra": "mean: 185.37929351819224 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 226.51435964515272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005059274408175126",
            "extra": "mean: 4.414731152437997 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.18457370909437,
            "unit": "iter/sec",
            "range": "stddev: 0.0011982047448633923",
            "extra": "mean: 11.088370869564342 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 408.6573480023689,
            "unit": "iter/sec",
            "range": "stddev: 0.00029538270273475457",
            "extra": "mean: 2.4470378543008677 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4347113.290025259,
            "unit": "iter/sec",
            "range": "stddev: 5.691810010841686e-7",
            "extra": "mean: 230.03771314073475 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 90.2567589435098,
            "unit": "iter/sec",
            "range": "stddev: 0.0015641581044456001",
            "extra": "mean: 11.079502651163038 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6557144982824608,
            "unit": "iter/sec",
            "range": "stddev: 0.03941433607451176",
            "extra": "mean: 603.9688612000077 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 83.03995455788501,
            "unit": "iter/sec",
            "range": "stddev: 0.015877631612721425",
            "extra": "mean: 12.042395799999213 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9820.557525517164,
            "unit": "iter/sec",
            "range": "stddev: 0.00004279938085077962",
            "extra": "mean: 101.8272127016881 usec\nrounds: 5275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 95.13825708706456,
            "unit": "iter/sec",
            "range": "stddev: 0.001333718955131814",
            "extra": "mean: 10.511018707068207 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.43003965925847,
            "unit": "iter/sec",
            "range": "stddev: 0.001522058614907309",
            "extra": "mean: 12.433165571426994 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3610.929710391614,
            "unit": "iter/sec",
            "range": "stddev: 0.0001027016240051019",
            "extra": "mean: 276.9369885883344 usec\nrounds: 2366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 105.7834178440188,
            "unit": "iter/sec",
            "range": "stddev: 0.000920284095110514",
            "extra": "mean: 9.453277464285884 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 194.02430537480456,
            "unit": "iter/sec",
            "range": "stddev: 0.011025464133445972",
            "extra": "mean: 5.153993454934731 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 268.5969003092097,
            "unit": "iter/sec",
            "range": "stddev: 0.0004838017429169194",
            "extra": "mean: 3.7230511552769094 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5094107361641391,
            "unit": "iter/sec",
            "range": "stddev: 0.03026688058474899",
            "extra": "mean: 1.9630524623999803 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 69.92736878556464,
            "unit": "iter/sec",
            "range": "stddev: 0.0020996851304181455",
            "extra": "mean: 14.300552378376256 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 180.39897575270157,
            "unit": "iter/sec",
            "range": "stddev: 0.004677478972892336",
            "extra": "mean: 5.543268723270589 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3698.0395928288904,
            "unit": "iter/sec",
            "range": "stddev: 0.00011902323851935348",
            "extra": "mean: 270.41354612296885 usec\nrounds: 1496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.07988262769668,
            "unit": "iter/sec",
            "range": "stddev: 0.0012026894463905953",
            "extra": "mean: 7.931479464911274 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.30104183920808,
            "unit": "iter/sec",
            "range": "stddev: 0.02060905091591884",
            "extra": "mean: 16.05109594444482 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 216.701639432453,
            "unit": "iter/sec",
            "range": "stddev: 0.0006387163006705841",
            "extra": "mean: 4.614639753621731 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.57083432060746,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582925211153642",
            "extra": "mean: 12.259283705124092 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 128.8077549053639,
            "unit": "iter/sec",
            "range": "stddev: 0.0006461171611718326",
            "extra": "mean: 7.763507723076985 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.84578439254881,
            "unit": "iter/sec",
            "range": "stddev: 0.0022264678621592873",
            "extra": "mean: 15.187001099999975 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60839.370922827795,
            "unit": "iter/sec",
            "range": "stddev: 0.000009369836204035495",
            "extra": "mean: 16.436724851551446 usec\nrounds: 10776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.446029346338584,
            "unit": "iter/sec",
            "range": "stddev: 0.0018673820712383",
            "extra": "mean: 35.15429123076238 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9552817.220756618,
            "unit": "iter/sec",
            "range": "stddev: 1.938576963806763e-7",
            "extra": "mean: 104.6811612628071 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.24383345381678,
            "unit": "iter/sec",
            "range": "stddev: 0.0017314744229189694",
            "extra": "mean: 30.080766749996712 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 539.3145946311425,
            "unit": "iter/sec",
            "range": "stddev: 0.00017908155434423652",
            "extra": "mean: 1.8542053375802623 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1510580.3177715628,
            "unit": "iter/sec",
            "range": "stddev: 0.000005381252272149469",
            "extra": "mean: 661.9972392300326 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 43.726598799683075,
            "unit": "iter/sec",
            "range": "stddev: 0.03260185223407152",
            "extra": "mean: 22.86937533333253 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 205.96859232123535,
            "unit": "iter/sec",
            "range": "stddev: 0.000470206848633812",
            "extra": "mean: 4.85510916363582 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.265723790190596,
            "unit": "iter/sec",
            "range": "stddev: 0.01389626058713823",
            "extra": "mean: 234.42680519999612 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5517254631071047,
            "unit": "iter/sec",
            "range": "stddev: 0.02347177462998343",
            "extra": "mean: 1.812495646600007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.87470645011486,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117762320989132",
            "extra": "mean: 11.5108302619039 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9067.308281363665,
            "unit": "iter/sec",
            "range": "stddev: 0.00003679436824217409",
            "extra": "mean: 110.2863130897769 usec\nrounds: 4133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 157.44599866525857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870279818610524",
            "extra": "mean: 6.351384020409889 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 97.32853435232329,
            "unit": "iter/sec",
            "range": "stddev: 0.0006477536359523465",
            "extra": "mean: 10.274479181820016 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4860936.560450318,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011886623660695785",
            "extra": "mean: 205.72167267871492 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.854804671229086,
            "unit": "iter/sec",
            "range": "stddev: 0.0015607432702346227",
            "extra": "mean: 32.409863250000136 msec\nrounds: 24"
          }
        ]
      }
    ]
  }
}