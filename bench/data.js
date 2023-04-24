window.BENCHMARK_DATA = {
  "lastUpdate": 1682339184322,
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
          "id": "532f53b75e24e6083c2b494fceab7a1fd6c0ab12",
          "message": "test(deps): remove aiohttp dependency in favor of plain requests",
          "timestamp": "2023-04-24T08:18:56-04:00",
          "tree_id": "292f752303d935828e81110429369dd2c9a386a7",
          "url": "https://github.com/ibis-project/ibis/commit/532f53b75e24e6083c2b494fceab7a1fd6c0ab12"
        },
        "date": 1682339089479,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.118855226752205,
            "unit": "iter/sec",
            "range": "stddev: 0.00019628223290455555",
            "extra": "mean: 195.35617939999383 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 239.9175159972507,
            "unit": "iter/sec",
            "range": "stddev: 0.00036759825677812417",
            "extra": "mean: 4.168099172931831 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 110.83879237832446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004849816123036746",
            "extra": "mean: 9.022112010989026 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11956.53974558814,
            "unit": "iter/sec",
            "range": "stddev: 0.000002745730382076173",
            "extra": "mean: 83.6362376806376 usec\nrounds: 5053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1760.6821816351487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008354177307678774",
            "extra": "mean: 567.9616744183202 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9732789.577961551,
            "unit": "iter/sec",
            "range": "stddev: 6.623456176095544e-9",
            "extra": "mean: 102.74546593139183 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1929897776483176,
            "unit": "iter/sec",
            "range": "stddev: 0.004647704887531748",
            "extra": "mean: 455.99847760000216 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.9258700082432,
            "unit": "iter/sec",
            "range": "stddev: 0.00014089138353273216",
            "extra": "mean: 7.198083409091947 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1632036.4096366314,
            "unit": "iter/sec",
            "range": "stddev: 1.3008864117290562e-7",
            "extra": "mean: 612.7314281074448 nsec\nrounds: 169463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.31383703472135,
            "unit": "iter/sec",
            "range": "stddev: 0.0010566715424732162",
            "extra": "mean: 12.451154582088751 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3787.9780934412506,
            "unit": "iter/sec",
            "range": "stddev: 0.00003459403404812264",
            "extra": "mean: 263.9930789809647 usec\nrounds: 785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.90359981923572,
            "unit": "iter/sec",
            "range": "stddev: 0.0005945240646197757",
            "extra": "mean: 13.531140599997116 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 454.30012330069815,
            "unit": "iter/sec",
            "range": "stddev: 0.00009273520688196893",
            "extra": "mean: 2.201188044446351 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 85.32860203303267,
            "unit": "iter/sec",
            "range": "stddev: 0.0007968145329762515",
            "extra": "mean: 11.719399781246587 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.68468491785825,
            "unit": "iter/sec",
            "range": "stddev: 0.0010529692482364689",
            "extra": "mean: 12.54946293670904 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.23974799770212,
            "unit": "iter/sec",
            "range": "stddev: 0.0010794463207412029",
            "extra": "mean: 12.462651303798182 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4560037.180465733,
            "unit": "iter/sec",
            "range": "stddev: 2.148357861125641e-8",
            "extra": "mean: 219.29645755600208 nsec\nrounds: 59521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1875.347169046217,
            "unit": "iter/sec",
            "range": "stddev: 0.00009248109104276435",
            "extra": "mean: 533.2346013077622 usec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.83799860884298,
            "unit": "iter/sec",
            "range": "stddev: 0.000913340025111601",
            "extra": "mean: 12.370420064934768 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7299.015239029707,
            "unit": "iter/sec",
            "range": "stddev: 0.000028842587138677866",
            "extra": "mean: 137.00478314564182 usec\nrounds: 3726"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.37572337137296,
            "unit": "iter/sec",
            "range": "stddev: 0.00102677573676157",
            "extra": "mean: 12.288677243903782 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 141.1886760838638,
            "unit": "iter/sec",
            "range": "stddev: 0.00009962183000859865",
            "extra": "mean: 7.082720992482542 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1511.3689879752558,
            "unit": "iter/sec",
            "range": "stddev: 0.000011194699907386578",
            "extra": "mean: 661.6517924849549 usec\nrounds: 1171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1694.1747597750425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001459208956392695",
            "extra": "mean: 590.257878787418 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 72.22913054708053,
            "unit": "iter/sec",
            "range": "stddev: 0.018396941289837623",
            "extra": "mean: 13.84482953658397 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.19771395712161,
            "unit": "iter/sec",
            "range": "stddev: 0.00007737482021433818",
            "extra": "mean: 9.881646144928817 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.064432410187276,
            "unit": "iter/sec",
            "range": "stddev: 0.0010000707646634",
            "extra": "mean: 49.83943625000187 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.48453432733209,
            "unit": "iter/sec",
            "range": "stddev: 0.0005346399327232653",
            "extra": "mean: 4.619267621621254 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1871.0720402959496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010493394160883328",
            "extra": "mean: 534.4529651791648 usec\nrounds: 919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 582.5191433321021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000385362226243857",
            "extra": "mean: 1.7166817802413175 msec\nrounds: 496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 250.4347187949505,
            "unit": "iter/sec",
            "range": "stddev: 0.00006948128779166988",
            "extra": "mean: 3.9930565730336065 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1804.8527436721113,
            "unit": "iter/sec",
            "range": "stddev: 0.00010777548178791857",
            "extra": "mean: 554.061822221254 usec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59701.36112476868,
            "unit": "iter/sec",
            "range": "stddev: 5.89223896994181e-7",
            "extra": "mean: 16.750036869513245 usec\nrounds: 2875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.2888820619177,
            "unit": "iter/sec",
            "range": "stddev: 0.00023829259834564416",
            "extra": "mean: 10.605704279570514 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.8033586189276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003164695903784213",
            "extra": "mean: 4.332692582914573 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9204.550865303352,
            "unit": "iter/sec",
            "range": "stddev: 0.000021820836569097268",
            "extra": "mean: 108.64191144507768 usec\nrounds: 4325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 431524.27790174016,
            "unit": "iter/sec",
            "range": "stddev: 9.726751958571071e-8",
            "extra": "mean: 2.317366718884132 usec\nrounds: 1917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139552.6555285235,
            "unit": "iter/sec",
            "range": "stddev: 7.610193832979452e-7",
            "extra": "mean: 7.16575400312327 usec\nrounds: 37033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.236960470636866,
            "unit": "iter/sec",
            "range": "stddev: 0.0003686284070361224",
            "extra": "mean: 23.675946111112804 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1607442.6662419764,
            "unit": "iter/sec",
            "range": "stddev: 1.8627592014290393e-7",
            "extra": "mean: 622.1061696327183 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1819.078479048386,
            "unit": "iter/sec",
            "range": "stddev: 0.00015024260907584063",
            "extra": "mean: 549.7288937875454 usec\nrounds: 998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.09452173375516,
            "unit": "iter/sec",
            "range": "stddev: 0.0010743576761475767",
            "extra": "mean: 11.89138102439085 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6292265860021261,
            "unit": "iter/sec",
            "range": "stddev: 0.01755885136940986",
            "extra": "mean: 1.5892526194000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 84.23018657862893,
            "unit": "iter/sec",
            "range": "stddev: 0.0009210979389276985",
            "extra": "mean: 11.872228242858032 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.61270373779381,
            "unit": "iter/sec",
            "range": "stddev: 0.0011130004578969758",
            "extra": "mean: 11.818556266667693 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.29337541813638,
            "unit": "iter/sec",
            "range": "stddev: 0.0009247780274076884",
            "extra": "mean: 13.28138092423897 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.90572401910902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000930966336723035",
            "extra": "mean: 5.750242009803649 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.399919737594566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005372501818252916",
            "extra": "mean: 22.026470658535647 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.878801618975636,
            "unit": "iter/sec",
            "range": "stddev: 0.0011012248693969909",
            "extra": "mean: 30.414733833329894 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.7915338296553,
            "unit": "iter/sec",
            "range": "stddev: 0.0002375643745227487",
            "extra": "mean: 11.390619987803515 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.41416351780956,
            "unit": "iter/sec",
            "range": "stddev: 0.00017319922300018092",
            "extra": "mean: 14.83367808510772 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.05514205503233,
            "unit": "iter/sec",
            "range": "stddev: 0.0010319025530593996",
            "extra": "mean: 27.735294967737534 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.46721165031224,
            "unit": "iter/sec",
            "range": "stddev: 0.00010244428845811431",
            "extra": "mean: 10.474800538460363 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1873.6655891896285,
            "unit": "iter/sec",
            "range": "stddev: 0.00010228170285994001",
            "extra": "mean: 533.7131693988713 usec\nrounds: 1098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1788.428229765232,
            "unit": "iter/sec",
            "range": "stddev: 0.00010916397363060219",
            "extra": "mean: 559.1501986810345 usec\nrounds: 1062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.41694449683493,
            "unit": "iter/sec",
            "range": "stddev: 0.0008798169464751163",
            "extra": "mean: 11.845962987176032 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.75573474360406,
            "unit": "iter/sec",
            "range": "stddev: 0.0334762484612127",
            "extra": "mean: 32.51426143242958 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.37730613082948,
            "unit": "iter/sec",
            "range": "stddev: 0.0010314774420977682",
            "extra": "mean: 11.851527926827513 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 125.67063973060823,
            "unit": "iter/sec",
            "range": "stddev: 0.005343951309604967",
            "extra": "mean: 7.957308104292564 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 240.17353952590827,
            "unit": "iter/sec",
            "range": "stddev: 0.0003963944425414734",
            "extra": "mean: 4.163656004628798 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.896364609179123,
            "unit": "iter/sec",
            "range": "stddev: 0.0007717115173423154",
            "extra": "mean: 71.96126671427854 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6842840196872244,
            "unit": "iter/sec",
            "range": "stddev: 0.006272144005821977",
            "extra": "mean: 1.4613814896000121 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.3547554797892,
            "unit": "iter/sec",
            "range": "stddev: 0.0009169205292888222",
            "extra": "mean: 12.142589631577637 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5778947.663976402,
            "unit": "iter/sec",
            "range": "stddev: 2.8564647573668616e-8",
            "extra": "mean: 173.041885503408 nsec\nrounds: 42366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.17554994207957,
            "unit": "iter/sec",
            "range": "stddev: 0.0005250760082590816",
            "extra": "mean: 25.52612538888373 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.65007958140632,
            "unit": "iter/sec",
            "range": "stddev: 0.00028786548802535667",
            "extra": "mean: 4.0217159861097365 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.58647039604645,
            "unit": "iter/sec",
            "range": "stddev: 0.0010398578057186918",
            "extra": "mean: 11.684089732554193 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 92.00162111930922,
            "unit": "iter/sec",
            "range": "stddev: 0.00031397885088001133",
            "extra": "mean: 10.869373689656877 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.0298377904093,
            "unit": "iter/sec",
            "range": "stddev: 0.0008845021199701622",
            "extra": "mean: 12.04386310526442 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 189.11905844900713,
            "unit": "iter/sec",
            "range": "stddev: 0.004569872681181933",
            "extra": "mean: 5.28767437930976 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.031621748297184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004324623355970673",
            "extra": "mean: 99.68477929999153 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.80032148495002,
            "unit": "iter/sec",
            "range": "stddev: 0.0003019344273334621",
            "extra": "mean: 4.170136194178373 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.427797088520804,
            "unit": "iter/sec",
            "range": "stddev: 0.003316471176647433",
            "extra": "mean: 700.3796324000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7660802731824078,
            "unit": "iter/sec",
            "range": "stddev: 0.009472867073001932",
            "extra": "mean: 1.305346234600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5035611.4017892,
            "unit": "iter/sec",
            "range": "stddev: 3.0356732456804265e-8",
            "extra": "mean: 198.5856175566777 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 237.86314258334534,
            "unit": "iter/sec",
            "range": "stddev: 0.0004332944384552008",
            "extra": "mean: 4.204098159720597 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1654189.9790888499,
            "unit": "iter/sec",
            "range": "stddev: 1.9056727879980145e-7",
            "extra": "mean: 604.5254853682607 nsec\nrounds: 135117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.72470399103128,
            "unit": "iter/sec",
            "range": "stddev: 0.00011468681388220647",
            "extra": "mean: 7.36785545000032 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 637693.7124622454,
            "unit": "iter/sec",
            "range": "stddev: 6.416360402745402e-7",
            "extra": "mean: 1.5681509484213472 usec\nrounds: 22882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1004.5068051659924,
            "unit": "iter/sec",
            "range": "stddev: 0.00001727337391569488",
            "extra": "mean: 995.5134149984702 usec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.98215571846852,
            "unit": "iter/sec",
            "range": "stddev: 0.0010779277097269263",
            "extra": "mean: 20.007140260869093 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1449601.6623071828,
            "unit": "iter/sec",
            "range": "stddev: 1.068895446748281e-7",
            "extra": "mean: 689.844683544583 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 231.6437733944075,
            "unit": "iter/sec",
            "range": "stddev: 0.0004901391133019122",
            "extra": "mean: 4.316973365380961 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 273.0669524636594,
            "unit": "iter/sec",
            "range": "stddev: 0.00008585353532070343",
            "extra": "mean: 3.6621055421676605 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10647.39188449848,
            "unit": "iter/sec",
            "range": "stddev: 0.000013310052863019317",
            "extra": "mean: 93.9197139400775 usec\nrounds: 3716"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 654.8102994266312,
            "unit": "iter/sec",
            "range": "stddev: 0.00004213262760475986",
            "extra": "mean: 1.5271598520603995 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.759712215318038,
            "unit": "iter/sec",
            "range": "stddev: 0.010190686282191932",
            "extra": "mean: 1.3162879045999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14381308121556483,
            "unit": "iter/sec",
            "range": "stddev: 0.0970106577625826",
            "extra": "mean: 6.9534703766 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}