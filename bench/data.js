window.BENCHMARK_DATA = {
  "lastUpdate": 1681125486922,
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
          "id": "3a2c4df9c73b2ce99be2b7730b529df53d617be1",
          "message": "fix(polars): backwards compatibility for the `time_zone` and `time_unit` properties",
          "timestamp": "2023-04-10T07:11:23-04:00",
          "tree_id": "a3a926b443606d38e12680f1ae0de9d9feea5827",
          "url": "https://github.com/ibis-project/ibis/commit/3a2c4df9c73b2ce99be2b7730b529df53d617be1"
        },
        "date": 1681125401219,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.40095762726897,
            "unit": "iter/sec",
            "range": "stddev: 0.0002755722577321811",
            "extra": "mean: 9.487579833347581 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.5986185730515,
            "unit": "iter/sec",
            "range": "stddev: 0.000283824850695832",
            "extra": "mean: 3.628465212117655 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.4730750500534,
            "unit": "iter/sec",
            "range": "stddev: 0.0003738221941685031",
            "extra": "mean: 3.9765688624953555 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5869896.481630046,
            "unit": "iter/sec",
            "range": "stddev: 1.1335915244876329e-8",
            "extra": "mean: 170.36075561625924 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.31035781308994,
            "unit": "iter/sec",
            "range": "stddev: 0.00029438956323633153",
            "extra": "mean: 96.989844400008 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.0758209787725,
            "unit": "iter/sec",
            "range": "stddev: 0.00007147060740095732",
            "extra": "mean: 1.8447603846163054 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.314379904631,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550954872302204",
            "extra": "mean: 11.323184299996 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.39310816497824,
            "unit": "iter/sec",
            "range": "stddev: 0.00009573672024342392",
            "extra": "mean: 64.96413780000316 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.11810721316256,
            "unit": "iter/sec",
            "range": "stddev: 0.00006728508801454218",
            "extra": "mean: 13.67650282692195 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.747763990657354,
            "unit": "iter/sec",
            "range": "stddev: 0.000793652980501748",
            "extra": "mean: 22.858311117650654 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.909473877130812,
            "unit": "iter/sec",
            "range": "stddev: 0.0029500135100194494",
            "extra": "mean: 1.0995368037999924 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 507563.20908007666,
            "unit": "iter/sec",
            "range": "stddev: 1.988453573181934e-7",
            "extra": "mean: 1.9701979617719556 usec\nrounds: 2061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.511085039262925,
            "unit": "iter/sec",
            "range": "stddev: 0.0022575575309261363",
            "extra": "mean: 398.2342231999951 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.9691688888583,
            "unit": "iter/sec",
            "range": "stddev: 0.000005444524411476875",
            "extra": "mean: 565.620723255307 usec\nrounds: 1290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.2986566871681,
            "unit": "iter/sec",
            "range": "stddev: 0.00009607632647090225",
            "extra": "mean: 6.357333374999996 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.2590282100009,
            "unit": "iter/sec",
            "range": "stddev: 0.00003165424106911057",
            "extra": "mean: 1.4508333718848638 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.75205963621587,
            "unit": "iter/sec",
            "range": "stddev: 0.01906698001288348",
            "extra": "mean: 25.805080023809797 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2526675.496703581,
            "unit": "iter/sec",
            "range": "stddev: 3.9478033789741067e-8",
            "extra": "mean: 395.7769809793842 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.17395415440714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003297563771502237",
            "extra": "mean: 16.899326980762908 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.48255575023796,
            "unit": "iter/sec",
            "range": "stddev: 0.000248516091904302",
            "extra": "mean: 3.6432187731082544 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.881136043109,
            "unit": "iter/sec",
            "range": "stddev: 0.000015146876980588369",
            "extra": "mean: 839.0098389507785 usec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6775626576447095,
            "unit": "iter/sec",
            "range": "stddev: 0.004363557040482179",
            "extra": "mean: 1.4758782655999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.508638173099266,
            "unit": "iter/sec",
            "range": "stddev: 0.00019942111242747293",
            "extra": "mean: 181.5330701666653 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.509298544967447,
            "unit": "iter/sec",
            "range": "stddev: 0.0005004065412571759",
            "extra": "mean: 36.35134492307657 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.8920479955211,
            "unit": "iter/sec",
            "range": "stddev: 0.00005830943462441038",
            "extra": "mean: 6.2542197222216585 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.7533500486292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002229257599722945",
            "extra": "mean: 3.587400832404516 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11986.427404357686,
            "unit": "iter/sec",
            "range": "stddev: 0.000004390862437674517",
            "extra": "mean: 83.42769419655838 usec\nrounds: 1792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 376.747313932037,
            "unit": "iter/sec",
            "range": "stddev: 0.00004213113901402697",
            "extra": "mean: 2.654298950570339 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1686187.520622944,
            "unit": "iter/sec",
            "range": "stddev: 7.934537456527091e-8",
            "extra": "mean: 593.053849450007 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9067376408567167,
            "unit": "iter/sec",
            "range": "stddev: 0.0054207037607479445",
            "extra": "mean: 1.1028548445999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 241.37839347504723,
            "unit": "iter/sec",
            "range": "stddev: 0.003715731011078492",
            "extra": "mean: 4.142872879396209 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6825631.72847465,
            "unit": "iter/sec",
            "range": "stddev: 1.4491159549675773e-8",
            "extra": "mean: 146.50658573194292 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12503012.06755647,
            "unit": "iter/sec",
            "range": "stddev: 3.952267910342553e-9",
            "extra": "mean: 79.98072741155829 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68641.40970257946,
            "unit": "iter/sec",
            "range": "stddev: 5.525908659887481e-7",
            "extra": "mean: 14.568465367086148 usec\nrounds: 13441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.74004866859461,
            "unit": "iter/sec",
            "range": "stddev: 0.00009336373762441796",
            "extra": "mean: 17.319001681824176 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139869.4874247977,
            "unit": "iter/sec",
            "range": "stddev: 3.6260797477603073e-7",
            "extra": "mean: 7.149522161062187 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 724857.0145218517,
            "unit": "iter/sec",
            "range": "stddev: 2.6235019369206496e-7",
            "extra": "mean: 1.379582427935315 usec\nrounds: 24391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2135.9115432480803,
            "unit": "iter/sec",
            "range": "stddev: 0.00040262238770924686",
            "extra": "mean: 468.18418260865815 usec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2273.0067952895556,
            "unit": "iter/sec",
            "range": "stddev: 0.00009904738551208902",
            "extra": "mean: 439.9458910867933 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1811631.9801174065,
            "unit": "iter/sec",
            "range": "stddev: 9.634176540758788e-8",
            "extra": "mean: 551.9884893703372 nsec\nrounds: 185220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8053.849898187404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004210075922101102",
            "extra": "mean: 124.16422116645847 usec\nrounds: 3685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.91789419807722,
            "unit": "iter/sec",
            "range": "stddev: 0.0007957307489912931",
            "extra": "mean: 22.262842411762183 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6382560.599330602,
            "unit": "iter/sec",
            "range": "stddev: 8.817031504898374e-9",
            "extra": "mean: 156.67692996190803 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.49047755185313,
            "unit": "iter/sec",
            "range": "stddev: 0.000682216873362171",
            "extra": "mean: 10.051213187501418 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.7930660965389,
            "unit": "iter/sec",
            "range": "stddev: 0.00011418626404240214",
            "extra": "mean: 9.025835598129001 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.74224052257483,
            "unit": "iter/sec",
            "range": "stddev: 0.0007172919713015801",
            "extra": "mean: 10.336746333331506 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.43762875074486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002548732798894973",
            "extra": "mean: 3.540604714828965 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13628.463502268614,
            "unit": "iter/sec",
            "range": "stddev: 0.000001940406405404921",
            "extra": "mean: 73.37584312666931 usec\nrounds: 7216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.4912814060577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006056968799930972",
            "extra": "mean: 10.051131977270055 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2393.8405720018263,
            "unit": "iter/sec",
            "range": "stddev: 0.00012357957131990254",
            "extra": "mean: 417.738763264322 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2445.9893597236614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000706287305301597",
            "extra": "mean: 408.832522522901 usec\nrounds: 1443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6597431399972558,
            "unit": "iter/sec",
            "range": "stddev: 0.0018559832865707635",
            "extra": "mean: 602.5028668000118 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.95958724998058,
            "unit": "iter/sec",
            "range": "stddev: 0.00017606762302871512",
            "extra": "mean: 20.85088836957005 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.63508041787276,
            "unit": "iter/sec",
            "range": "stddev: 0.0008368572401969008",
            "extra": "mean: 10.036625612243876 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.50802152423827,
            "unit": "iter/sec",
            "range": "stddev: 0.00009314197423129286",
            "extra": "mean: 10.151457561798114 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2296.685426378341,
            "unit": "iter/sec",
            "range": "stddev: 0.00008177508113678586",
            "extra": "mean: 435.41008642916626 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.26583030933558,
            "unit": "iter/sec",
            "range": "stddev: 0.00003149673903788538",
            "extra": "mean: 9.410362645161102 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.51349241066913,
            "unit": "iter/sec",
            "range": "stddev: 0.00003255624783553017",
            "extra": "mean: 5.2766691557402945 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4732.579483396375,
            "unit": "iter/sec",
            "range": "stddev: 0.000022040086316159904",
            "extra": "mean: 211.30125833245208 usec\nrounds: 2160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7859091707886757,
            "unit": "iter/sec",
            "range": "stddev: 0.0014562553628576914",
            "extra": "mean: 1.2724116694000145 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.1515190235326,
            "unit": "iter/sec",
            "range": "stddev: 0.000012561561551403365",
            "extra": "mean: 1.3224862674234452 msec\nrounds: 617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.53768587466064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000349832985654008",
            "extra": "mean: 7.1155291463377015 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2368.0363082904755,
            "unit": "iter/sec",
            "range": "stddev: 0.00007863323233701346",
            "extra": "mean: 422.29082235732966 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.09826867047047,
            "unit": "iter/sec",
            "range": "stddev: 0.0007426034978639211",
            "extra": "mean: 10.627188088890055 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.7738455707041,
            "unit": "iter/sec",
            "range": "stddev: 0.00006469525196332247",
            "extra": "mean: 3.4039789963512073 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.6874235520742,
            "unit": "iter/sec",
            "range": "stddev: 0.000059285763373354945",
            "extra": "mean: 6.109204838708138 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.93084485985307,
            "unit": "iter/sec",
            "range": "stddev: 0.00006579979811706583",
            "extra": "mean: 10.64613015556309 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2513553.8173743803,
            "unit": "iter/sec",
            "range": "stddev: 2.1530914229101003e-8",
            "extra": "mean: 397.84308300362545 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2315.3025776891163,
            "unit": "iter/sec",
            "range": "stddev: 0.00009460268055567276",
            "extra": "mean: 431.9089909181942 usec\nrounds: 1211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.63618875929282,
            "unit": "iter/sec",
            "range": "stddev: 0.00044261163801743135",
            "extra": "mean: 15.471209228069295 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.31736490869739,
            "unit": "iter/sec",
            "range": "stddev: 0.004224934069734045",
            "extra": "mean: 5.769762311622926 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.086120282707,
            "unit": "iter/sec",
            "range": "stddev: 0.0003164497930287281",
            "extra": "mean: 3.730144622725944 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.15459067367959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007604045776086199",
            "extra": "mean: 10.509214457444005 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.8665213437404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006792250260817043",
            "extra": "mean: 10.431170193548438 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2318.8904310176963,
            "unit": "iter/sec",
            "range": "stddev: 0.00010329723117915593",
            "extra": "mean: 431.2407290244964 usec\nrounds: 1609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.49399195133921,
            "unit": "iter/sec",
            "range": "stddev: 0.000684302678776446",
            "extra": "mean: 10.471862989135161 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.9399942218603,
            "unit": "iter/sec",
            "range": "stddev: 0.00027211473733292806",
            "extra": "mean: 3.5978989018822864 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.4180405266286,
            "unit": "iter/sec",
            "range": "stddev: 0.00027577189513490783",
            "extra": "mean: 3.7117039306102537 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.85844066567125,
            "unit": "iter/sec",
            "range": "stddev: 0.0007626792693391217",
            "extra": "mean: 9.914886581628123 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.6824078316265,
            "unit": "iter/sec",
            "range": "stddev: 0.0007691055942930021",
            "extra": "mean: 10.343143312499118 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.5035236630762,
            "unit": "iter/sec",
            "range": "stddev: 0.016757690987318302",
            "extra": "mean: 12.269408180851856 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1769107999493509,
            "unit": "iter/sec",
            "range": "stddev: 0.0710727718016538",
            "extra": "mean: 5.652566153599992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.06451082403737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006973397352936647",
            "extra": "mean: 10.51917262637559 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.53555804669931,
            "unit": "iter/sec",
            "range": "stddev: 0.0008013531148895264",
            "extra": "mean: 10.046660908163371 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.48415133305413,
            "unit": "iter/sec",
            "range": "stddev: 0.014639705686216205",
            "extra": "mean: 9.853755358491062 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.00381596205582,
            "unit": "iter/sec",
            "range": "stddev: 0.0008076684896058292",
            "extra": "mean: 9.999618418355428 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11725.253820047612,
            "unit": "iter/sec",
            "range": "stddev: 0.000010964954487655164",
            "extra": "mean: 85.28600023056383 usec\nrounds: 4330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.03497089890017,
            "unit": "iter/sec",
            "range": "stddev: 0.000755431122339207",
            "extra": "mean: 9.996504132646221 msec\nrounds: 98"
          }
        ]
      }
    ]
  }
}