window.BENCHMARK_DATA = {
  "lastUpdate": 1683467984229,
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
          "id": "a4f546bf09e3c30d692bb07e8c77774ab3adf11d",
          "message": "fix(sqlalchemy): ensure that union_all-generated memtables use the correct column names",
          "timestamp": "2023-05-07T06:53:15-07:00",
          "tree_id": "6bd2aab876e94643d5c49fd260780abb5b9e172f",
          "url": "https://github.com/ibis-project/ibis/commit/a4f546bf09e3c30d692bb07e8c77774ab3adf11d"
        },
        "date": 1683467882756,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.55806686317194,
            "unit": "iter/sec",
            "range": "stddev: 0.0006721329653721908",
            "extra": "mean: 11.552938232559724 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 76.60363387722914,
            "unit": "iter/sec",
            "range": "stddev: 0.0011647613045177713",
            "extra": "mean: 13.054210999998729 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.46142556694613,
            "unit": "iter/sec",
            "range": "stddev: 0.00398087990297406",
            "extra": "mean: 7.665100972600144 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 59.2766749219711,
            "unit": "iter/sec",
            "range": "stddev: 0.02411694916196087",
            "extra": "mean: 16.87004207500422 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 120.0939738831942,
            "unit": "iter/sec",
            "range": "stddev: 0.0013354078986350297",
            "extra": "mean: 8.326812475808486 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1553242.5408271358,
            "unit": "iter/sec",
            "range": "stddev: 0.000003151098704751455",
            "extra": "mean: 643.8144550608806 nsec\nrounds: 169463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 160.83347945011607,
            "unit": "iter/sec",
            "range": "stddev: 0.000787722294492702",
            "extra": "mean: 6.2176109316229695 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3361092.982392413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010508045190400377",
            "extra": "mean: 297.52226589323607 nsec\nrounds: 133316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 255.03179655009384,
            "unit": "iter/sec",
            "range": "stddev: 0.00022869076430337786",
            "extra": "mean: 3.921079698795824 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1421063.6561022538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021527701402617303",
            "extra": "mean: 703.6982444142137 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 20.682342343520965,
            "unit": "iter/sec",
            "range": "stddev: 0.0271004546519878",
            "extra": "mean: 48.350422954548186 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4186958.0168564646,
            "unit": "iter/sec",
            "range": "stddev: 5.409153473813655e-7",
            "extra": "mean: 238.83688252288354 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5291550082124051,
            "unit": "iter/sec",
            "range": "stddev: 0.017585484861855256",
            "extra": "mean: 1.889805415199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1594460.0553344712,
            "unit": "iter/sec",
            "range": "stddev: 0.000001295922294316671",
            "extra": "mean: 627.1715598358023 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6043193874219542,
            "unit": "iter/sec",
            "range": "stddev: 0.03373474859256839",
            "extra": "mean: 1.6547541264000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.50620145506656,
            "unit": "iter/sec",
            "range": "stddev: 0.002829229138138691",
            "extra": "mean: 26.66225747222168 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.84131716558702,
            "unit": "iter/sec",
            "range": "stddev: 0.0025495459902490965",
            "extra": "mean: 22.300861419999478 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 62.66668126610078,
            "unit": "iter/sec",
            "range": "stddev: 0.01753855828280756",
            "extra": "mean: 15.957443090910017 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4442758.181498324,
            "unit": "iter/sec",
            "range": "stddev: 4.7018054613044076e-7",
            "extra": "mean: 225.0853994630978 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.3081138947313,
            "unit": "iter/sec",
            "range": "stddev: 0.001783948961453026",
            "extra": "mean: 13.278781638295177 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 572.1006907295792,
            "unit": "iter/sec",
            "range": "stddev: 0.00041821127968188007",
            "extra": "mean: 1.7479440528637298 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 75.69254257783537,
            "unit": "iter/sec",
            "range": "stddev: 0.0014635711707621654",
            "extra": "mean: 13.21134111688335 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10155.565299332433,
            "unit": "iter/sec",
            "range": "stddev: 0.00008034022762038204",
            "extra": "mean: 98.46817685921769 usec\nrounds: 5903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 108.90671575658153,
            "unit": "iter/sec",
            "range": "stddev: 0.0012114948661003575",
            "extra": "mean: 9.182170200000428 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10777097062041797,
            "unit": "iter/sec",
            "range": "stddev: 0.17933684690710644",
            "extra": "mean: 9.278936565600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.67605464309285,
            "unit": "iter/sec",
            "range": "stddev: 0.0016719171222701018",
            "extra": "mean: 13.391173446152257 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 848417.2300946717,
            "unit": "iter/sec",
            "range": "stddev: 0.000005705037530818383",
            "extra": "mean: 1.1786653600710275 usec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 188.17115647291263,
            "unit": "iter/sec",
            "range": "stddev: 0.0010319654576127699",
            "extra": "mean: 5.3143107516796855 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3173.4513174772997,
            "unit": "iter/sec",
            "range": "stddev: 0.00007482279472068021",
            "extra": "mean: 315.1143345078755 usec\nrounds: 852"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 184.5565783106534,
            "unit": "iter/sec",
            "range": "stddev: 0.0010819562827521082",
            "extra": "mean: 5.418392609754381 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 175.74940666931283,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461114335117212",
            "extra": "mean: 5.689919635868719 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 76.90576206324222,
            "unit": "iter/sec",
            "range": "stddev: 0.0014597270563890565",
            "extra": "mean: 13.002926870130565 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1646.70121072634,
            "unit": "iter/sec",
            "range": "stddev: 0.00011725678454893087",
            "extra": "mean: 607.2747098782494 usec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 177.33851088900178,
            "unit": "iter/sec",
            "range": "stddev: 0.0050629073700338345",
            "extra": "mean: 5.638933105883084 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 192.3354661168541,
            "unit": "iter/sec",
            "range": "stddev: 0.0011580454009929902",
            "extra": "mean: 5.199249104647432 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8963393.355717707,
            "unit": "iter/sec",
            "range": "stddev: 3.26593206173567e-7",
            "extra": "mean: 111.56489069644584 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1619.638210862041,
            "unit": "iter/sec",
            "range": "stddev: 0.00018290725554781487",
            "extra": "mean: 617.4218373545021 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.284091118973,
            "unit": "iter/sec",
            "range": "stddev: 0.0012780489828219613",
            "extra": "mean: 13.108893156246637 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 392.5228428819304,
            "unit": "iter/sec",
            "range": "stddev: 0.00036370111156603687",
            "extra": "mean: 2.547622433023081 msec\nrounds: 321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1619.2945625522943,
            "unit": "iter/sec",
            "range": "stddev: 0.0001799135695011468",
            "extra": "mean: 617.5528672336325 usec\nrounds: 1175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7899.275773763318,
            "unit": "iter/sec",
            "range": "stddev: 0.000051934808284896386",
            "extra": "mean: 126.59388387495008 usec\nrounds: 3169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 21.2282144045494,
            "unit": "iter/sec",
            "range": "stddev: 0.051752016887558795",
            "extra": "mean: 47.10711795833807 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 191.43599185821316,
            "unit": "iter/sec",
            "range": "stddev: 0.0008556439154846552",
            "extra": "mean: 5.223678109290174 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8955354484290536,
            "unit": "iter/sec",
            "range": "stddev: 0.007389552133489679",
            "extra": "mean: 527.555420200008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 75.11528417207248,
            "unit": "iter/sec",
            "range": "stddev: 0.0013828861115322594",
            "extra": "mean: 13.312869824325254 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1501.782940842938,
            "unit": "iter/sec",
            "range": "stddev: 0.0001869461128402057",
            "extra": "mean: 665.8751892858154 usec\nrounds: 1120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.16308480565889,
            "unit": "iter/sec",
            "range": "stddev: 0.0020047637886325695",
            "extra": "mean: 70.6060871428552 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.088724102952255,
            "unit": "iter/sec",
            "range": "stddev: 0.011376454731300641",
            "extra": "mean: 918.5063482000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.68204876613876,
            "unit": "iter/sec",
            "range": "stddev: 0.0009615642620699255",
            "extra": "mean: 7.53681458267628 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.15174264947811,
            "unit": "iter/sec",
            "range": "stddev: 0.0014047902499576244",
            "extra": "mean: 13.485859728571572 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1568.6922196032222,
            "unit": "iter/sec",
            "range": "stddev: 0.00017010913343775428",
            "extra": "mean: 637.4736787136839 usec\nrounds: 996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 40.480504442327465,
            "unit": "iter/sec",
            "range": "stddev: 0.0014004762315857312",
            "extra": "mean: 24.7032494722169 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.893071334308427,
            "unit": "iter/sec",
            "range": "stddev: 0.0023049414963422503",
            "extra": "mean: 31.35477262499542 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 175.1216266920687,
            "unit": "iter/sec",
            "range": "stddev: 0.0011591779246830415",
            "extra": "mean: 5.710316988765673 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 196.05617882824816,
            "unit": "iter/sec",
            "range": "stddev: 0.0007632383138145379",
            "extra": "mean: 5.1005788543702755 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1584.9329537211825,
            "unit": "iter/sec",
            "range": "stddev: 0.00018315996912524014",
            "extra": "mean: 630.9415156345583 usec\nrounds: 1503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5217167.423144603,
            "unit": "iter/sec",
            "range": "stddev: 5.321267352543026e-7",
            "extra": "mean: 191.67489154428415 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5979539807921649,
            "unit": "iter/sec",
            "range": "stddev: 0.013651882993311359",
            "extra": "mean: 1.6723695002000114 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1322.8098325180479,
            "unit": "iter/sec",
            "range": "stddev: 0.00023797632188924978",
            "extra": "mean: 755.9665610410832 usec\nrounds: 1114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.80758540877976,
            "unit": "iter/sec",
            "range": "stddev: 0.001567448108274787",
            "extra": "mean: 14.122780691177267 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.0790399354061,
            "unit": "iter/sec",
            "range": "stddev: 0.0004369556777864499",
            "extra": "mean: 1.9604804779405072 msec\nrounds: 408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1194.8979733775586,
            "unit": "iter/sec",
            "range": "stddev: 0.006116005382863553",
            "extra": "mean: 836.8915357462276 usec\nrounds: 1133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.407214764380676,
            "unit": "iter/sec",
            "range": "stddev: 0.0015294181960107186",
            "extra": "mean: 29.933653764701642 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.505233988131605,
            "unit": "iter/sec",
            "range": "stddev: 0.00378650373635526",
            "extra": "mean: 153.722372142868 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4615870.991945072,
            "unit": "iter/sec",
            "range": "stddev: 8.563167037278598e-7",
            "extra": "mean: 216.6438363949397 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.037762721785203,
            "unit": "iter/sec",
            "range": "stddev: 0.013224974735831943",
            "extra": "mean: 963.6114104000171 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122057.63626344224,
            "unit": "iter/sec",
            "range": "stddev: 0.000008746511684745736",
            "extra": "mean: 8.192850776182958 usec\nrounds: 31054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 51.44666952696193,
            "unit": "iter/sec",
            "range": "stddev: 0.024746665081306754",
            "extra": "mean: 19.437604206350514 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 72.69495936028812,
            "unit": "iter/sec",
            "range": "stddev: 0.0018353815098595722",
            "extra": "mean: 13.756111961543802 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.43833517224492,
            "unit": "iter/sec",
            "range": "stddev: 0.0016930533646261456",
            "extra": "mean: 11.842962061723624 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 902.4026850661136,
            "unit": "iter/sec",
            "range": "stddev: 0.00010634113770214066",
            "extra": "mean: 1.1081527310911492 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.52869132932526,
            "unit": "iter/sec",
            "range": "stddev: 0.0007311599082396863",
            "extra": "mean: 7.016131213114212 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.966095278741175,
            "unit": "iter/sec",
            "range": "stddev: 0.002629970464854291",
            "extra": "mean: 52.72566573684177 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 195.04446326206426,
            "unit": "iter/sec",
            "range": "stddev: 0.0008060087659444383",
            "extra": "mean: 5.127036078211495 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 141.09323392473652,
            "unit": "iter/sec",
            "range": "stddev: 0.000721563222139005",
            "extra": "mean: 7.087512081078465 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1567869.7257715566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028517195112180185",
            "extra": "mean: 637.8080930849628 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6077.826480134521,
            "unit": "iter/sec",
            "range": "stddev: 0.00007104599557902923",
            "extra": "mean: 164.5325024115968 usec\nrounds: 2488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 305.51326650514585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005935403117336134",
            "extra": "mean: 3.2731802826086334 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.9962783096938,
            "unit": "iter/sec",
            "range": "stddev: 0.0014564245007603277",
            "extra": "mean: 13.333994999999124 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 68.70805165481805,
            "unit": "iter/sec",
            "range": "stddev: 0.002228178771569295",
            "extra": "mean: 14.55433498571454 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.1253760272464,
            "unit": "iter/sec",
            "range": "stddev: 0.0019336561981059183",
            "extra": "mean: 13.86474573972738 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.7019555737679,
            "unit": "iter/sec",
            "range": "stddev: 0.0011480451131347733",
            "extra": "mean: 10.449107272726431 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.9435754763341,
            "unit": "iter/sec",
            "range": "stddev: 0.0010118806608618663",
            "extra": "mean: 13.523825343285617 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 82.9708880078315,
            "unit": "iter/sec",
            "range": "stddev: 0.0010310292975614908",
            "extra": "mean: 12.052420120001745 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 72.30464095511854,
            "unit": "iter/sec",
            "range": "stddev: 0.002033348344145729",
            "extra": "mean: 13.830370869564613 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1195.9420163403295,
            "unit": "iter/sec",
            "range": "stddev: 0.00687496201882987",
            "extra": "mean: 836.1609395245378 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1559.6728038571905,
            "unit": "iter/sec",
            "range": "stddev: 0.0001670686354305425",
            "extra": "mean: 641.1601186652248 usec\nrounds: 1559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 71.13034104830923,
            "unit": "iter/sec",
            "range": "stddev: 0.0013114477832162775",
            "extra": "mean: 14.058698232879765 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8309.90921123647,
            "unit": "iter/sec",
            "range": "stddev: 0.00011871694246805627",
            "extra": "mean: 120.33825816626525 usec\nrounds: 4776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.73464675594742,
            "unit": "iter/sec",
            "range": "stddev: 0.002042642574183099",
            "extra": "mean: 13.94026520270125 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 69.21733231987973,
            "unit": "iter/sec",
            "range": "stddev: 0.0019053900713082682",
            "extra": "mean: 14.447248492308518 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.822735488245698,
            "unit": "iter/sec",
            "range": "stddev: 0.003155788158216247",
            "extra": "mean: 37.28180522222357 msec\nrounds: 27"
          }
        ]
      }
    ]
  }
}