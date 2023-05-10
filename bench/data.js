window.BENCHMARK_DATA = {
  "lastUpdate": 1683722919558,
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
          "id": "63881a4cc119c609fa7b4e4d52795073cf640220",
          "message": "ci: expand sqlalchemy upper bound",
          "timestamp": "2023-05-10T05:41:32-07:00",
          "tree_id": "84976836e266cd01d0ee14e4b9cd7f52a1193e5c",
          "url": "https://github.com/ibis-project/ibis/commit/63881a4cc119c609fa7b4e4d52795073cf640220"
        },
        "date": 1683722830404,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2242.7051479308957,
            "unit": "iter/sec",
            "range": "stddev: 0.00012052883409864377",
            "extra": "mean: 445.89008988657883 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.75028465032992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006623796874090667",
            "extra": "mean: 10.44383318182182 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.71477114896544,
            "unit": "iter/sec",
            "range": "stddev: 0.00027386000127476427",
            "extra": "mean: 3.7214180512824786 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.85240815556872,
            "unit": "iter/sec",
            "range": "stddev: 0.0007088244686275062",
            "extra": "mean: 9.9154796428605 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1850028.8580464756,
            "unit": "iter/sec",
            "range": "stddev: 1.69413324578346e-7",
            "extra": "mean: 540.532108810423 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9242254322570328,
            "unit": "iter/sec",
            "range": "stddev: 0.004105940738923861",
            "extra": "mean: 1.0819871051999939 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9260640223078624,
            "unit": "iter/sec",
            "range": "stddev: 0.003148526737107762",
            "extra": "mean: 1.079838948400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 235.22940251947915,
            "unit": "iter/sec",
            "range": "stddev: 0.00368769737976839",
            "extra": "mean: 4.251169238578459 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2364.2050722761114,
            "unit": "iter/sec",
            "range": "stddev: 0.00008293487250478049",
            "extra": "mean: 422.9751520824128 usec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2565997.6258017803,
            "unit": "iter/sec",
            "range": "stddev: 2.0020681113647293e-8",
            "extra": "mean: 389.7119739880779 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6427814.911332346,
            "unit": "iter/sec",
            "range": "stddev: 1.0346349480756853e-8",
            "extra": "mean: 155.57386355947662 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.33323803248153,
            "unit": "iter/sec",
            "range": "stddev: 0.013073755259149063",
            "extra": "mean: 11.450394174415857 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.659990831492146,
            "unit": "iter/sec",
            "range": "stddev: 0.00067487397723608",
            "extra": "mean: 602.4129658000049 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.676962122610796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007355704382562859",
            "extra": "mean: 27.26507164516537 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.75839467856434,
            "unit": "iter/sec",
            "range": "stddev: 0.0005693240670480387",
            "extra": "mean: 11.660666034481569 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 415.43059483064275,
            "unit": "iter/sec",
            "range": "stddev: 0.00009713223038382477",
            "extra": "mean: 2.407140957944291 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.83968609740867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006751530704004528",
            "extra": "mean: 9.359817840425631 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 95.6921685900951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007020496601029666",
            "extra": "mean: 10.450175962503039 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1721.07257964771,
            "unit": "iter/sec",
            "range": "stddev: 0.000007391437449013937",
            "extra": "mean: 581.033020818153 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4704700.49433125,
            "unit": "iter/sec",
            "range": "stddev: 1.3253558773243583e-8",
            "extra": "mean: 212.55338170926302 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 100.76524372964731,
            "unit": "iter/sec",
            "range": "stddev: 0.00033545137839680923",
            "extra": "mean: 9.92405677778139 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.96189264078295,
            "unit": "iter/sec",
            "range": "stddev: 0.00009661762520865451",
            "extra": "mean: 8.066995257145695 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.53442677425677,
            "unit": "iter/sec",
            "range": "stddev: 0.000692153770703288",
            "extra": "mean: 9.848876206523695 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5005971200869053,
            "unit": "iter/sec",
            "range": "stddev: 0.0004127117895517208",
            "extra": "mean: 399.9044835999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.35036544583423,
            "unit": "iter/sec",
            "range": "stddev: 0.00013032329485756185",
            "extra": "mean: 5.171958158414462 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.13707579841027,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210731397642297",
            "extra": "mean: 9.986311184212507 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8103.109011000038,
            "unit": "iter/sec",
            "range": "stddev: 0.000017797066872055866",
            "extra": "mean: 123.40942206781268 usec\nrounds: 4459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.61176331028625,
            "unit": "iter/sec",
            "range": "stddev: 0.0008147556694023627",
            "extra": "mean: 10.458964100000198 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.685448992928535,
            "unit": "iter/sec",
            "range": "stddev: 0.00040610615350535794",
            "extra": "mean: 15.702173978722163 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.70453253981372,
            "unit": "iter/sec",
            "range": "stddev: 0.00039380177870167404",
            "extra": "mean: 17.951860547169474 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.155376940873587,
            "unit": "iter/sec",
            "range": "stddev: 0.0004031309387136711",
            "extra": "mean: 38.23305633333381 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17754685939815368,
            "unit": "iter/sec",
            "range": "stddev: 0.009260049827653544",
            "extra": "mean: 5.632315904599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.44310367405923,
            "unit": "iter/sec",
            "range": "stddev: 0.0007432959052186661",
            "extra": "mean: 10.158151893615177 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 268.8173960185479,
            "unit": "iter/sec",
            "range": "stddev: 0.00029100811715750184",
            "extra": "mean: 3.719997346938819 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.60803353576274,
            "unit": "iter/sec",
            "range": "stddev: 0.01702292037189493",
            "extra": "mean: 12.2536955820872 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.6937369399406,
            "unit": "iter/sec",
            "range": "stddev: 0.00031153273103419986",
            "extra": "mean: 3.941760691698667 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.66799083914696,
            "unit": "iter/sec",
            "range": "stddev: 0.0001953734119013108",
            "extra": "mean: 33.70636068420577 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2343.648774994368,
            "unit": "iter/sec",
            "range": "stddev: 0.00008351006135859731",
            "extra": "mean: 426.6850949124845 usec\nrounds: 1317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1607703.5862002012,
            "unit": "iter/sec",
            "range": "stddev: 1.2623133709553218e-7",
            "extra": "mean: 622.0052058000907 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.61170161744374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001284569131738864",
            "extra": "mean: 20.571178681825067 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2326.9880799953226,
            "unit": "iter/sec",
            "range": "stddev: 0.00009012400857494926",
            "extra": "mean: 429.7400612391664 usec\nrounds: 1290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.616898632786,
            "unit": "iter/sec",
            "range": "stddev: 0.0007726986578689876",
            "extra": "mean: 9.938688367344987 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.78685341013576,
            "unit": "iter/sec",
            "range": "stddev: 0.0008245981699688816",
            "extra": "mean: 10.021360187497663 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.9040899047389,
            "unit": "iter/sec",
            "range": "stddev: 0.00011177440472675056",
            "extra": "mean: 6.5400474285744234 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.01482367079103,
            "unit": "iter/sec",
            "range": "stddev: 0.000721368685133395",
            "extra": "mean: 9.998517852629544 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.35441573377743,
            "unit": "iter/sec",
            "range": "stddev: 0.0007507584694068674",
            "extra": "mean: 9.7699741904735 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9959.115403563443,
            "unit": "iter/sec",
            "range": "stddev: 0.000001850495749644031",
            "extra": "mean: 100.41052437671252 usec\nrounds: 5292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.07667349230698,
            "unit": "iter/sec",
            "range": "stddev: 0.00007054025422862911",
            "extra": "mean: 5.811362921568256 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7917732934366817,
            "unit": "iter/sec",
            "range": "stddev: 0.002726006136055102",
            "extra": "mean: 1.262987787399993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.5695050785378,
            "unit": "iter/sec",
            "range": "stddev: 0.000011696635928048821",
            "extra": "mean: 855.0154528292434 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 231.14404420895963,
            "unit": "iter/sec",
            "range": "stddev: 0.010400409404288005",
            "extra": "mean: 4.326306582643231 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.70432177320226,
            "unit": "iter/sec",
            "range": "stddev: 0.000141816144273897",
            "extra": "mean: 18.280091363638206 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.74091514379028,
            "unit": "iter/sec",
            "range": "stddev: 0.000098436745387742",
            "extra": "mean: 10.02597578494605 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2317.324708229209,
            "unit": "iter/sec",
            "range": "stddev: 0.00008277892527993533",
            "extra": "mean: 431.5321009821507 usec\nrounds: 1426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.7811574705271,
            "unit": "iter/sec",
            "range": "stddev: 0.000026145747153425925",
            "extra": "mean: 1.8594924461532565 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3369811856007607,
            "unit": "iter/sec",
            "range": "stddev: 0.003012472617976159",
            "extra": "mean: 747.9536815999836 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.12575933906514,
            "unit": "iter/sec",
            "range": "stddev: 0.0007476087606591015",
            "extra": "mean: 9.696898295915764 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2304.3391023368226,
            "unit": "iter/sec",
            "range": "stddev: 0.00008233546385953028",
            "extra": "mean: 433.96390704211166 usec\nrounds: 1420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.3468110454847,
            "unit": "iter/sec",
            "range": "stddev: 0.00024299263596421926",
            "extra": "mean: 3.605594007843129 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140512.93842951508,
            "unit": "iter/sec",
            "range": "stddev: 3.4993022812896086e-7",
            "extra": "mean: 7.116782348848436 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 216.85738077815267,
            "unit": "iter/sec",
            "range": "stddev: 0.011236615115891415",
            "extra": "mean: 4.611325639052195 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.325870896043966,
            "unit": "iter/sec",
            "range": "stddev: 0.0006199953093952556",
            "extra": "mean: 22.560188435897125 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.4881021422111,
            "unit": "iter/sec",
            "range": "stddev: 0.0008028375084049345",
            "extra": "mean: 10.051453173471655 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.38759054605955,
            "unit": "iter/sec",
            "range": "stddev: 0.028548801744917418",
            "extra": "mean: 27.48189657499296 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.337816546408682,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913113117688518",
            "extra": "mean: 119.93547644445674 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13101.124899743343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030349365753653564",
            "extra": "mean: 76.32932344760643 usec\nrounds: 6845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.26044014251195,
            "unit": "iter/sec",
            "range": "stddev: 0.0002610773419384694",
            "extra": "mean: 4.324129104760675 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.70090954302701,
            "unit": "iter/sec",
            "range": "stddev: 0.00011225705824230718",
            "extra": "mean: 8.64297440659374 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.28895366559351,
            "unit": "iter/sec",
            "range": "stddev: 0.0007580449984177456",
            "extra": "mean: 10.494395851059444 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1019169.1100199166,
            "unit": "iter/sec",
            "range": "stddev: 1.5367313867312393e-7",
            "extra": "mean: 981.1914334613792 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.8479551006198,
            "unit": "iter/sec",
            "range": "stddev: 0.0003348746306130516",
            "extra": "mean: 9.021366240741854 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6318977.568263164,
            "unit": "iter/sec",
            "range": "stddev: 4.8273281425116526e-9",
            "extra": "mean: 158.25344989712102 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.9056476216851,
            "unit": "iter/sec",
            "range": "stddev: 0.00025625215346847133",
            "extra": "mean: 3.6113384056587505 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.047192393348,
            "unit": "iter/sec",
            "range": "stddev: 0.000012956360416298053",
            "extra": "mean: 1.3567652252399045 msec\nrounds: 626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2575508.3717965996,
            "unit": "iter/sec",
            "range": "stddev: 1.6549359188391328e-8",
            "extra": "mean: 388.27285942867223 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7409170.443158919,
            "unit": "iter/sec",
            "range": "stddev: 4.1178576898629655e-9",
            "extra": "mean: 134.9678763192405 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2313.1250017799,
            "unit": "iter/sec",
            "range": "stddev: 0.00010701472613069052",
            "extra": "mean: 432.31559004832064 usec\nrounds: 1427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 183.40920326355192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001859853326811796",
            "extra": "mean: 5.452289101125633 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2265.409199687641,
            "unit": "iter/sec",
            "range": "stddev: 0.00008248114619258423",
            "extra": "mean: 441.42135563759604 usec\nrounds: 1375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.4100028842374,
            "unit": "iter/sec",
            "range": "stddev: 0.000019907096663136172",
            "extra": "mean: 1.4632504584065762 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.8208624949144,
            "unit": "iter/sec",
            "range": "stddev: 0.00024662973015754814",
            "extra": "mean: 3.599441708659677 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.2893849613364,
            "unit": "iter/sec",
            "range": "stddev: 0.003665097160696934",
            "extra": "mean: 5.838073388060334 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.733252312215516,
            "unit": "iter/sec",
            "range": "stddev: 0.0004866420102885272",
            "extra": "mean: 53.381013789470146 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 410.21151919079716,
            "unit": "iter/sec",
            "range": "stddev: 0.00003109089506968555",
            "extra": "mean: 2.437766745245594 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.40455301058205,
            "unit": "iter/sec",
            "range": "stddev: 0.00008292146945127838",
            "extra": "mean: 6.1574628387102015 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11740.562315991841,
            "unit": "iter/sec",
            "range": "stddev: 0.000013214796508461493",
            "extra": "mean: 85.17479598382594 usec\nrounds: 6524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12750889.702505719,
            "unit": "iter/sec",
            "range": "stddev: 3.5367770027186595e-9",
            "extra": "mean: 78.42589994351863 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5671540.9511926975,
            "unit": "iter/sec",
            "range": "stddev: 1.2346190507544789e-8",
            "extra": "mean: 176.3189243639989 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.37850687157291,
            "unit": "iter/sec",
            "range": "stddev: 0.020716647352712683",
            "extra": "mean: 12.139088677086463 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4661.804981742328,
            "unit": "iter/sec",
            "range": "stddev: 0.000029753947830983413",
            "extra": "mean: 214.50918773231365 usec\nrounds: 2152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.07054830501092,
            "unit": "iter/sec",
            "range": "stddev: 0.0008429282433734933",
            "extra": "mean: 10.093817154632834 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2357.5773728404065,
            "unit": "iter/sec",
            "range": "stddev: 0.00010065470420952812",
            "extra": "mean: 424.1642338105753 usec\nrounds: 1745"
          }
        ]
      }
    ]
  }
}