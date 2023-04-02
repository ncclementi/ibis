window.BENCHMARK_DATA = {
  "lastUpdate": 1680438603557,
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
          "id": "5de2956ccfbb0e59c283dace3f524b435d1e0b6a",
          "message": "test(snowflake): ensure that tables are always clean up",
          "timestamp": "2023-04-02T08:22:58-04:00",
          "tree_id": "b32efd6279c08a4836e3a3701cdf155288c7108d",
          "url": "https://github.com/ibis-project/ibis/commit/5de2956ccfbb0e59c283dace3f524b435d1e0b6a"
        },
        "date": 1680438503263,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9276.155225411047,
            "unit": "iter/sec",
            "range": "stddev: 0.000032196650375356504",
            "extra": "mean: 107.80328441039944 usec\nrounds: 2957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3354.3646212059793,
            "unit": "iter/sec",
            "range": "stddev: 0.00010406654356834323",
            "extra": "mean: 298.1190517208813 usec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 58.40184666746868,
            "unit": "iter/sec",
            "range": "stddev: 0.011910994167771199",
            "extra": "mean: 17.122746232560925 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55182.66927472591,
            "unit": "iter/sec",
            "range": "stddev: 0.000009974629508863851",
            "extra": "mean: 18.12163154017647 usec\nrounds: 9461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1455607.9538934422,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013421970368256397",
            "extra": "mean: 686.9981696137427 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 67.85438601960252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006464959501515458",
            "extra": "mean: 14.737440844444588 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09330205286544352,
            "unit": "iter/sec",
            "range": "stddev: 0.07812515985849706",
            "extra": "mean: 10.717877788200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3209.0321458424555,
            "unit": "iter/sec",
            "range": "stddev: 0.00018386309354589486",
            "extra": "mean: 311.6204371139055 usec\nrounds: 1622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 548.013353434931,
            "unit": "iter/sec",
            "range": "stddev: 0.00025460950808427326",
            "extra": "mean: 1.824773052941193 msec\nrounds: 510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 591306.6495139338,
            "unit": "iter/sec",
            "range": "stddev: 0.00000181628576564346",
            "extra": "mean: 1.6911698876074208 usec\nrounds: 20284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.48316097226290144,
            "unit": "iter/sec",
            "range": "stddev: 0.04903767760094869",
            "extra": "mean: 2.069703592399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 132.8905628236172,
            "unit": "iter/sec",
            "range": "stddev: 0.014250582518757937",
            "extra": "mean: 7.5249888235275115 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 186.69528777655043,
            "unit": "iter/sec",
            "range": "stddev: 0.0012512354026221041",
            "extra": "mean: 5.356321586417691 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 112.60741766921437,
            "unit": "iter/sec",
            "range": "stddev: 0.0012105547966873387",
            "extra": "mean: 8.880409663042908 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 135.97000026307265,
            "unit": "iter/sec",
            "range": "stddev: 0.001055596315513064",
            "extra": "mean: 7.354563492426385 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.48695797148160785,
            "unit": "iter/sec",
            "range": "stddev: 0.04286530487502327",
            "extra": "mean: 2.053565314800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 154.88878334406385,
            "unit": "iter/sec",
            "range": "stddev: 0.013758746093618648",
            "extra": "mean: 6.4562454324316 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 199.17022396812445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005006362685924931",
            "extra": "mean: 5.020830825395074 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.59735343885671,
            "unit": "iter/sec",
            "range": "stddev: 0.001633886361261076",
            "extra": "mean: 14.164836942026229 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 83.97974055934075,
            "unit": "iter/sec",
            "range": "stddev: 0.001063970296647373",
            "extra": "mean: 11.907633833345699 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1471472.2604064103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018670307629608342",
            "extra": "mean: 679.5914723691815 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.76568810656634,
            "unit": "iter/sec",
            "range": "stddev: 0.0012146584463280678",
            "extra": "mean: 12.381495452382566 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 394931.8030746229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032827482325198847",
            "extra": "mean: 2.532082734828647 usec\nrounds: 1668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 79.38441545557552,
            "unit": "iter/sec",
            "range": "stddev: 0.0009662860252395677",
            "extra": "mean: 12.59693095000003 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.21523228735931,
            "unit": "iter/sec",
            "range": "stddev: 0.0010925272202467226",
            "extra": "mean: 11.335910749999734 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.79858735053124,
            "unit": "iter/sec",
            "range": "stddev: 0.001289401530429665",
            "extra": "mean: 13.369236444448676 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 112376.58214989396,
            "unit": "iter/sec",
            "range": "stddev: 0.00000932028326630215",
            "extra": "mean: 8.898651132369784 usec\nrounds: 29762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9070926.542483933,
            "unit": "iter/sec",
            "range": "stddev: 1.1354206977653871e-7",
            "extra": "mean: 110.24232147804616 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6159236806381587,
            "unit": "iter/sec",
            "range": "stddev: 0.010925671500349619",
            "extra": "mean: 618.8411073999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.8764450952556,
            "unit": "iter/sec",
            "range": "stddev: 0.0012304135185659912",
            "extra": "mean: 12.364539500001618 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4123570.0515756416,
            "unit": "iter/sec",
            "range": "stddev: 2.493515337789491e-7",
            "extra": "mean: 242.5083089392476 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.39026678354085,
            "unit": "iter/sec",
            "range": "stddev: 0.001017627151387885",
            "extra": "mean: 12.13735601351118 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 459.89488697391755,
            "unit": "iter/sec",
            "range": "stddev: 0.000280143244297308",
            "extra": "mean: 2.1744099104470234 msec\nrounds: 335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 24.906863194551047,
            "unit": "iter/sec",
            "range": "stddev: 0.0033573830857845117",
            "extra": "mean: 40.149576130436735 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.58055702379284,
            "unit": "iter/sec",
            "range": "stddev: 0.0011461856412591392",
            "extra": "mean: 11.823048170736168 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 163.71094088800749,
            "unit": "iter/sec",
            "range": "stddev: 0.0045961737684588125",
            "extra": "mean: 6.108327241757697 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 845.1363098395094,
            "unit": "iter/sec",
            "range": "stddev: 0.00011293548996576607",
            "extra": "mean: 1.1832410799979698 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 189.9600553137415,
            "unit": "iter/sec",
            "range": "stddev: 0.0007969608729246307",
            "extra": "mean: 5.264264628415599 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4372895.565619078,
            "unit": "iter/sec",
            "range": "stddev: 3.570832002230542e-7",
            "extra": "mean: 228.68142744187415 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 59.782969078012364,
            "unit": "iter/sec",
            "range": "stddev: 0.023882777666936687",
            "extra": "mean: 16.72717189230053 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.56532581682617,
            "unit": "iter/sec",
            "range": "stddev: 0.0013247157280330429",
            "extra": "mean: 13.780686419354902 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.97284442646722,
            "unit": "iter/sec",
            "range": "stddev: 0.0011126454166789305",
            "extra": "mean: 11.367144105882103 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 210.30381184609044,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308762644468333",
            "extra": "mean: 4.755025556701958 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9451.951815402852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000401972451883642",
            "extra": "mean: 105.79825410984482 usec\nrounds: 5474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 202.88244673991562,
            "unit": "iter/sec",
            "range": "stddev: 0.0006459382660179432",
            "extra": "mean: 4.928962638556633 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 50.90246159654659,
            "unit": "iter/sec",
            "range": "stddev: 0.001973880976009103",
            "extra": "mean: 19.645415342110756 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 361.5816043917909,
            "unit": "iter/sec",
            "range": "stddev: 0.0004360401613051174",
            "extra": "mean: 2.7656274209028964 msec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.47302103621857855,
            "unit": "iter/sec",
            "range": "stddev: 0.07634245980717258",
            "extra": "mean: 2.1140708836000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3377.5175600911084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000960045575864882",
            "extra": "mean: 296.07544067750905 usec\nrounds: 1829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.07169075794775,
            "unit": "iter/sec",
            "range": "stddev: 0.001994282419987525",
            "extra": "mean: 13.685190388060558 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 62.64303362172763,
            "unit": "iter/sec",
            "range": "stddev: 0.0006757177027208811",
            "extra": "mean: 15.96346699999458 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3392.5240870177,
            "unit": "iter/sec",
            "range": "stddev: 0.00010437644062632935",
            "extra": "mean: 294.7657774418575 usec\nrounds: 1658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1172.684205506444,
            "unit": "iter/sec",
            "range": "stddev: 0.0003157250239714631",
            "extra": "mean: 852.7444944720925 usec\nrounds: 995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.92267117001936,
            "unit": "iter/sec",
            "range": "stddev: 0.001230543592582851",
            "extra": "mean: 11.638371880004192 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3395.6856021288827,
            "unit": "iter/sec",
            "range": "stddev: 0.00021300658010172028",
            "extra": "mean: 294.49133906067823 usec\nrounds: 2386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3638.4022481315924,
            "unit": "iter/sec",
            "range": "stddev: 0.00007347066312580307",
            "extra": "mean: 274.8459163671428 usec\nrounds: 1112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.410687136853987,
            "unit": "iter/sec",
            "range": "stddev: 0.0028350957628604846",
            "extra": "mean: 31.83629812500044 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.49049631795989745,
            "unit": "iter/sec",
            "range": "stddev: 0.034384479881663654",
            "extra": "mean: 2.038751288000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8287.243425487182,
            "unit": "iter/sec",
            "range": "stddev: 0.000051330154716844864",
            "extra": "mean: 120.66738584322603 usec\nrounds: 3885"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.548919003773634,
            "unit": "iter/sec",
            "range": "stddev: 0.0012242270846895835",
            "extra": "mean: 21.48277599999544 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 60.208253249760276,
            "unit": "iter/sec",
            "range": "stddev: 0.02655809364721427",
            "extra": "mean: 16.609018631577417 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 116.49330536506531,
            "unit": "iter/sec",
            "range": "stddev: 0.0007118173996775262",
            "extra": "mean: 8.584184274505837 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 203.7707267554839,
            "unit": "iter/sec",
            "range": "stddev: 0.0006112135431033421",
            "extra": "mean: 4.907476240195958 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5147711.009602488,
            "unit": "iter/sec",
            "range": "stddev: 1.3036259695552305e-7",
            "extra": "mean: 194.2610993769184 nsec\nrounds: 52084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 245.71712461381537,
            "unit": "iter/sec",
            "range": "stddev: 0.0004523314532941715",
            "extra": "mean: 4.0697204216908505 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5459.297151268288,
            "unit": "iter/sec",
            "range": "stddev: 0.00006455003612908636",
            "extra": "mean: 183.17376253602222 usec\nrounds: 3390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 77.04336413489374,
            "unit": "iter/sec",
            "range": "stddev: 0.0013626903000098977",
            "extra": "mean: 12.97970319999422 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.50360538043455,
            "unit": "iter/sec",
            "range": "stddev: 0.0014440430138073584",
            "extra": "mean: 11.97553082222132 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.940370818079902,
            "unit": "iter/sec",
            "range": "stddev: 0.0014668140865089659",
            "extra": "mean: 55.74020794443236 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.9801968870148694,
            "unit": "iter/sec",
            "range": "stddev: 0.005158918081126405",
            "extra": "mean: 251.24385259996419 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 197.18745207868176,
            "unit": "iter/sec",
            "range": "stddev: 0.0011265246655985095",
            "extra": "mean: 5.071316604876968 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1437226.2619475492,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738261265517938",
            "extra": "mean: 695.7846697324646 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.362253899359393,
            "unit": "iter/sec",
            "range": "stddev: 0.010531767916757811",
            "extra": "mean: 96.50410129999045 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0086673496276464,
            "unit": "iter/sec",
            "range": "stddev: 0.012251880263981293",
            "extra": "mean: 991.4071278000165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3467.6783680208323,
            "unit": "iter/sec",
            "range": "stddev: 0.00009478640850848383",
            "extra": "mean: 288.3773792927477 usec\nrounds: 2038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1522746.2680395234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016425807328249005",
            "extra": "mean: 656.7082257817392 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 115.10816387568342,
            "unit": "iter/sec",
            "range": "stddev: 0.00036552928161553337",
            "extra": "mean: 8.687481116282925 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3701.2155344990415,
            "unit": "iter/sec",
            "range": "stddev: 0.00016181428045500016",
            "extra": "mean: 270.1815094741165 usec\nrounds: 2322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.642332562133394,
            "unit": "iter/sec",
            "range": "stddev: 0.001504004206170338",
            "extra": "mean: 33.735536766679765 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.91496489417761,
            "unit": "iter/sec",
            "range": "stddev: 0.004213951520384803",
            "extra": "mean: 34.584167875001036 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 205.96336389111528,
            "unit": "iter/sec",
            "range": "stddev: 0.001329556067460425",
            "extra": "mean: 4.855232411763582 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 47.939600267565275,
            "unit": "iter/sec",
            "range": "stddev: 0.0015162604329601427",
            "extra": "mean: 20.859581523807048 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3287.120711702062,
            "unit": "iter/sec",
            "range": "stddev: 0.00028660381019171035",
            "extra": "mean: 304.2176079631109 usec\nrounds: 1783"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.21227989952753,
            "unit": "iter/sec",
            "range": "stddev: 0.002148900398858571",
            "extra": "mean: 12.466919045968798 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 33.307250425525694,
            "unit": "iter/sec",
            "range": "stddev: 0.003964841522664808",
            "extra": "mean: 30.02349299999947 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 115.37001355033283,
            "unit": "iter/sec",
            "range": "stddev: 0.005605567795552202",
            "extra": "mean: 8.66776356547559 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 90.61391340893113,
            "unit": "iter/sec",
            "range": "stddev: 0.0016943123401805176",
            "extra": "mean: 11.035832825000114 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.688780818386949,
            "unit": "iter/sec",
            "range": "stddev: 0.01319638566737979",
            "extra": "mean: 149.5040766250071 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}