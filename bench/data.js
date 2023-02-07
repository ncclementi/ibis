window.BENCHMARK_DATA = {
  "lastUpdate": 1675770791171,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "f3904eba24d42cbb02fd939f6fb0330140317be2",
          "message": "chore(deps): update mariadb docker tag to v10.10.3",
          "timestamp": "2023-02-07T06:47:56-05:00",
          "tree_id": "2c9abe1a965042df79c65f35bcbd0251adbcdb51",
          "url": "https://github.com/ibis-project/ibis/commit/f3904eba24d42cbb02fd939f6fb0330140317be2"
        },
        "date": 1675770711404,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3862.6246287074077,
            "unit": "iter/sec",
            "range": "stddev: 0.001680521457616932",
            "extra": "mean: 258.891322902024 usec\nrounds: 703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.875447534713,
            "unit": "iter/sec",
            "range": "stddev: 0.0005640984892078895",
            "extra": "mean: 10.540134734374984 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 163.08207494280106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005933781742214216",
            "extra": "mean: 6.131881755556134 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5919.833968438048,
            "unit": "iter/sec",
            "range": "stddev: 0.000051039206366207424",
            "extra": "mean: 168.92365653015952 usec\nrounds: 3124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 374049.496963528,
            "unit": "iter/sec",
            "range": "stddev: 3.4956274936052976e-7",
            "extra": "mean: 2.673442975108468 usec\nrounds: 1815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 151.6895289621339,
            "unit": "iter/sec",
            "range": "stddev: 0.004824972146817152",
            "extra": "mean: 6.592412850392785 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.99385402155843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006201794030210477",
            "extra": "mean: 3.6232690888902477 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5378068.581487677,
            "unit": "iter/sec",
            "range": "stddev: 4.699835637762957e-9",
            "extra": "mean: 185.94035848529333 nsec\nrounds: 33558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 629.3742826420897,
            "unit": "iter/sec",
            "range": "stddev: 0.000023232814722369573",
            "extra": "mean: 1.588879666010561 msec\nrounds: 509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4249627.1181341,
            "unit": "iter/sec",
            "range": "stddev: 1.1984856661604552e-8",
            "extra": "mean: 235.31476343668987 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 478.49164635144103,
            "unit": "iter/sec",
            "range": "stddev: 0.003164587304532393",
            "extra": "mean: 2.0899006442957275 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 260.5524201366537,
            "unit": "iter/sec",
            "range": "stddev: 0.0001791614989596111",
            "extra": "mean: 3.8379992765967135 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.76862849460759,
            "unit": "iter/sec",
            "range": "stddev: 0.0002731121702012386",
            "extra": "mean: 22.33707025714336 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10971.205326251118,
            "unit": "iter/sec",
            "range": "stddev: 0.000001438606544547154",
            "extra": "mean: 91.14768799443316 usec\nrounds: 5939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.40536680785205,
            "unit": "iter/sec",
            "range": "stddev: 0.0007038831756626824",
            "extra": "mean: 10.70602294252685 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121431.93909462425,
            "unit": "iter/sec",
            "range": "stddev: 0.000001488841748710511",
            "extra": "mean: 8.235065728636377 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 181.62739393654437,
            "unit": "iter/sec",
            "range": "stddev: 0.009601707953533573",
            "extra": "mean: 5.505777395833651 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 146.87336553179665,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173009682085478",
            "extra": "mean: 6.80858640625015 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.78606664064611,
            "unit": "iter/sec",
            "range": "stddev: 0.0005341578514869954",
            "extra": "mean: 10.439931767442024 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 984.0507727957302,
            "unit": "iter/sec",
            "range": "stddev: 0.000014963831767417551",
            "extra": "mean: 1.0162077279396442 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1927777.1389271698,
            "unit": "iter/sec",
            "range": "stddev: 3.9460748878298195e-8",
            "extra": "mean: 518.7321603764971 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6000.137130558361,
            "unit": "iter/sec",
            "range": "stddev: 0.00005189537910761829",
            "extra": "mean: 166.6628575715472 usec\nrounds: 2331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.09976218692,
            "unit": "iter/sec",
            "range": "stddev: 0.00007945246251579187",
            "extra": "mean: 13.67993506521877 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.248989210016413,
            "unit": "iter/sec",
            "range": "stddev: 0.0019123824335779353",
            "extra": "mean: 444.64419639999164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4560.815216557877,
            "unit": "iter/sec",
            "range": "stddev: 0.000028053873409325645",
            "extra": "mean: 219.25904745483567 usec\nrounds: 1454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6062.58306380108,
            "unit": "iter/sec",
            "range": "stddev: 0.000046543848719105",
            "extra": "mean: 164.94619363994764 usec\nrounds: 2107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.6481705724324,
            "unit": "iter/sec",
            "range": "stddev: 0.000017019868348058495",
            "extra": "mean: 3.7929335820112158 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 411.9067304142939,
            "unit": "iter/sec",
            "range": "stddev: 0.000023490022122380608",
            "extra": "mean: 2.4277340625005195 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 162.58987868729466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005187435300975292",
            "extra": "mean: 6.150444345452012 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55365.36162529357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010423003861114885",
            "extra": "mean: 18.061834523323185 usec\nrounds: 11905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 227.90344801142322,
            "unit": "iter/sec",
            "range": "stddev: 0.006021026718954337",
            "extra": "mean: 4.387823039649128 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.89024656516189,
            "unit": "iter/sec",
            "range": "stddev: 0.0003559177278736527",
            "extra": "mean: 21.791122838707114 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4548548.902601751,
            "unit": "iter/sec",
            "range": "stddev: 1.1051515862622888e-8",
            "extra": "mean: 219.8503349997161 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1572033.8054762424,
            "unit": "iter/sec",
            "range": "stddev: 9.948393539081662e-8",
            "extra": "mean: 636.1186359456522 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.697429052052303,
            "unit": "iter/sec",
            "range": "stddev: 0.0006283232831534322",
            "extra": "mean: 73.00640114286035 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.77397200081356,
            "unit": "iter/sec",
            "range": "stddev: 0.0006365775454450955",
            "extra": "mean: 6.907318948148915 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1537096.1197719597,
            "unit": "iter/sec",
            "range": "stddev: 8.961956414729561e-8",
            "extra": "mean: 650.5774018532803 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5129.664581131644,
            "unit": "iter/sec",
            "range": "stddev: 0.00005134318205494808",
            "extra": "mean: 194.94452009168057 usec\nrounds: 2190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8681211927520716,
            "unit": "iter/sec",
            "range": "stddev: 0.0034845963842593647",
            "extra": "mean: 1.1519128991999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.3453165723661,
            "unit": "iter/sec",
            "range": "stddev: 0.00021504120167313266",
            "extra": "mean: 3.962823695652881 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 150.61895778125916,
            "unit": "iter/sec",
            "range": "stddev: 0.000632396221713276",
            "extra": "mean: 6.639270479166903 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.697130463218,
            "unit": "iter/sec",
            "range": "stddev: 0.000056254033272648255",
            "extra": "mean: 11.148628666666976 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.90871413940518,
            "unit": "iter/sec",
            "range": "stddev: 0.000040385867511292904",
            "extra": "mean: 10.426581244186849 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.01839915129392,
            "unit": "iter/sec",
            "range": "stddev: 0.00009211624812316649",
            "extra": "mean: 17.235911618180147 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.79928932007276,
            "unit": "iter/sec",
            "range": "stddev: 0.0001055335217083548",
            "extra": "mean: 14.535033862744303 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.06046519354808,
            "unit": "iter/sec",
            "range": "stddev: 0.0005836455760730211",
            "extra": "mean: 10.862426101123845 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 270.15516323791115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000992258569402695",
            "extra": "mean: 3.701576486692404 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19367.10888953919,
            "unit": "iter/sec",
            "range": "stddev: 0.00001381446764785279",
            "extra": "mean: 51.63393285510635 usec\nrounds: 9338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.10262158460685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006278048282205852",
            "extra": "mean: 11.09845620930124 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 80.10866753352975,
            "unit": "iter/sec",
            "range": "stddev: 0.011944799535391579",
            "extra": "mean: 12.483043730336004 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.94604522489496,
            "unit": "iter/sec",
            "range": "stddev: 0.000039690068317481597",
            "extra": "mean: 5.884220481133695 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11995134.351601245,
            "unit": "iter/sec",
            "range": "stddev: 3.4655571371039595e-9",
            "extra": "mean: 83.36713626430458 nsec\nrounds: 117661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 567900.5142547713,
            "unit": "iter/sec",
            "range": "stddev: 2.8455603750479116e-7",
            "extra": "mean: 1.7608717986675047 usec\nrounds: 20577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.54545320830167,
            "unit": "iter/sec",
            "range": "stddev: 0.00047223032234100645",
            "extra": "mean: 26.634383515149313 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 150.20640925772506,
            "unit": "iter/sec",
            "range": "stddev: 0.00013838038217637693",
            "extra": "mean: 6.657505528170865 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15483663143338072,
            "unit": "iter/sec",
            "range": "stddev: 0.09168350478258594",
            "extra": "mean: 6.45842001819999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5839.38447645166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000463583418778894",
            "extra": "mean: 171.25092619481987 usec\nrounds: 2344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8591.989625543856,
            "unit": "iter/sec",
            "range": "stddev: 0.0013780324568625837",
            "extra": "mean: 116.3874775904076 usec\nrounds: 4931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.0182121111083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003848874422210776",
            "extra": "mean: 3.020981817351922 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1468.204775506342,
            "unit": "iter/sec",
            "range": "stddev: 0.000005762267398030285",
            "extra": "mean: 681.103900956274 usec\nrounds: 1151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.585938357644382,
            "unit": "iter/sec",
            "range": "stddev: 0.04217116106099296",
            "extra": "mean: 1.7066641686000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9855.74256402297,
            "unit": "iter/sec",
            "range": "stddev: 0.000013194943828580574",
            "extra": "mean: 101.46368916436214 usec\nrounds: 4356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7570561215950421,
            "unit": "iter/sec",
            "range": "stddev: 0.0019354228855091083",
            "extra": "mean: 1.320906035200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6093358250997345,
            "unit": "iter/sec",
            "range": "stddev: 0.0006495944320941185",
            "extra": "mean: 621.3743486000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.466215540455984,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501632982344113",
            "extra": "mean: 37.78401934615134 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.23893040173766,
            "unit": "iter/sec",
            "range": "stddev: 0.0002868277577380701",
            "extra": "mean: 8.114319044640947 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.68797643065503,
            "unit": "iter/sec",
            "range": "stddev: 0.0006241644988635952",
            "extra": "mean: 6.223240980519476 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8707541851346695,
            "unit": "iter/sec",
            "range": "stddev: 0.0034093081805951137",
            "extra": "mean: 1.14842973719999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.39866822397854,
            "unit": "iter/sec",
            "range": "stddev: 0.000687667390103704",
            "extra": "mean: 28.249650344828922 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3829.8479710937995,
            "unit": "iter/sec",
            "range": "stddev: 0.0028540875103566085",
            "extra": "mean: 261.1069701846158 usec\nrounds: 2113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.47834588765537,
            "unit": "iter/sec",
            "range": "stddev: 0.00012597948926493718",
            "extra": "mean: 9.571361333335915 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.946663466835059,
            "unit": "iter/sec",
            "range": "stddev: 0.00022178720668584876",
            "extra": "mean: 202.15646499999593 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.32582230945087,
            "unit": "iter/sec",
            "range": "stddev: 0.0005986570373070004",
            "extra": "mean: 12.001081684933812 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.53093210486682,
            "unit": "iter/sec",
            "range": "stddev: 0.00022453855781939824",
            "extra": "mean: 3.9756541735514497 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.73866145344104,
            "unit": "iter/sec",
            "range": "stddev: 0.00004851206725108559",
            "extra": "mean: 6.957070490905567 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 253.07904201050795,
            "unit": "iter/sec",
            "range": "stddev: 0.00020522658535619803",
            "extra": "mean: 3.9513346978707133 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.160893209916138,
            "unit": "iter/sec",
            "range": "stddev: 0.0002592720260129298",
            "extra": "mean: 109.15966130000925 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.08986743180765,
            "unit": "iter/sec",
            "range": "stddev: 0.00010518948361454491",
            "extra": "mean: 14.905380473682303 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 162.792564086071,
            "unit": "iter/sec",
            "range": "stddev: 0.0006143273222797667",
            "extra": "mean: 6.14278671519225 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.80177755718917,
            "unit": "iter/sec",
            "range": "stddev: 0.0002306023982568991",
            "extra": "mean: 10.019861614458444 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1546232.214946723,
            "unit": "iter/sec",
            "range": "stddev: 1.1065326926633407e-7",
            "extra": "mean: 646.733388642052 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 225.01232196306435,
            "unit": "iter/sec",
            "range": "stddev: 0.0003967555131114725",
            "extra": "mean: 4.444201060971894 msec\nrounds: 164"
          }
        ]
      }
    ]
  }
}